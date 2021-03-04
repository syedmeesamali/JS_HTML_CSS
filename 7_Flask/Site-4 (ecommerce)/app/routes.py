import os
import secrets
from PIL import Image
from flask import render_template, request, url_for, redirect, flash, redirect, abort
from app import app, db, bcrypt
from app.models import User, Post
from app.forms import RegistrationForm, LoginForm, UpdateAccountForm, PostForm, RequestResetForm, ResetPasswordForm
from flask_login import login_user, current_user, logout_user, login_required

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def page_not_found(e):
    return render_template("404.html"), 500

#Main display page
@app.route('/')
def index():
    page = request.args.get('page', 1, type = int)
    posts = Post.query.order_by(Post.date_posted.desc()).paginate(page = page, per_page = 4)
    return render_template('index.html', posts = posts)

@app.route('/Products')
def Products():
    return render_template('Products.html')

@app.route('/Gallery')
def Gallery():
    return render_template('Gallery.html')

@app.route('/Register', methods = ['POST', 'GET'])
def Register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username = form.username.data, email = form.email.data, password = hashed_password)
        db.session.add(user)
        db.session.commit()
        flash("Your account has been created! You can now login", 'success')
        return redirect(url_for('Login'))
    return render_template('register.html', title='Register', form = form)

@app.route('/Login', methods = ['POST', 'GET'])
def Login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email = form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember = form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('index'))
        else:
            flash("Login unsuccessful! Please check email and password", 'danger')
    return render_template('login.html',  title='Login', form = form)

@app.route('/Logout')
def Logout():
    logout_user()
    return redirect(url_for('index'))


#Special save picture function
def save_picture(form_picture):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, 'static/profile_pics', picture_fn)
    output_size = (125, 125)
    i = Image.open(form_picture)
    i.thumbnail(output_size)
    i.save(picture_path)
    return picture_fn

@app.route('/Account', methods = ['POST', 'GET'])
@login_required
def Account():
    form = UpdateAccountForm()
    if form.validate_on_submit():
        if form.picture.data:
            picture_file = save_picture(form.picture.data)
            current_user.image_file = picture_file
        current_user.username = form.username.data
        current_user.email = form.email.data
        db.session.commit()
        flash('Your account has been successfully updated', 'success')
        return(redirect(url_for('Account')))
    elif request.method == 'GET':
        form.username.data = current_user.username
        form.email.data = current_user.email
    image_file = url_for('static', filename = 'profile_pics/' + current_user.image_file)
    return render_template('account.html',  title='Account', image_file = image_file, form = form)

@app.route('/post/new', methods = ['POST', 'GET'])
@login_required
def new_post():
    form = PostForm()
    if form.validate_on_submit():
        post = Post(title = form.title.data, content = form.content.data, author = current_user)
        db.session.add(post)
        db.session.commit()
        flash(f'Your post has been created successfully', 'success')
        return redirect(url_for('index'))
    return render_template('create_new.html', title = 'New post', 
                    form = form, legend = 'New Post')


@app.route('/post/<int:post_id>')
def post(post_id):
    post = Post.query.get_or_404(post_id)    
    return render_template('post.html', title = post.title, post = post)


@app.route('/post/<int:post_id>/update', methods = ['POST', 'GET'])
@login_required
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    if post.author != current_user:
        abort(403)
    form = PostForm()
    if form.validate_on_submit():
        post.title = form.title.data
        post.content = form.content.data
        db.session.commit()
        flash('Your post has been updated!', 'success')
        return redirect(url_for('post', post_id = post.id))
    elif request.method == 'GET':
        form.title.data = post.title
        form.content.data = post.content
    return render_template('create_new.html', title = 'Update post', 
                form = form, legend = 'Update Post')

@app.route('/post/<int:post_id>/delete', methods = ['POST'])
@login_required
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    if post.author != current_user:
        abort(403)
    db.session.delete(post)
    db.session.commit()
    flash('Your post has been deleted!', 'success')
    return redirect(url_for('index'))

#Main display page
@app.route('/user/<string:username>')
def user_posts(username):
    page = request.args.get('page', 1, type = int)
    user = User.query.filter_by(username = username).first_or_404()
    posts = Post.query.filter_by(author = user)\
        .order_by(Post.date_posted.desc())\
        .paginate(page = page, per_page = 4)
    return render_template('user_posts.html', posts = posts, user = user)

#Reset password route
@app.route('/reset_password', methods = ['POST', 'GET'])
def reset_request():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RequestResetForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email = form.email.data).first()
        send_reset_email(user)
        flash('An Email has been sent with instructions to reset your password!', 'info')
        return redirect(url_for('index'))
    return render_template('reset_request.html', title = 'Reset Password', form = form)

#Reset email sending function
def send_reset_email(user):
    token = user.get_reset_token()
    msg = Message('Password reset request', sender = 'meeghou8689@gmail.com', recipients = [user.email])
    msg.body = f'''To reset your password, visit the following link:
    {url_for('reset_token', token = token, _external = True)}
    If you did not made this request, then please ignore this email and no changes will take place.
    '''
    mail.send(msg)

#Route to take care of the password reset token
@app.route('/reset_password/<token>', methods = ['POST', 'GET'])
def reset_token(token):
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    user = User.verify_reset_token(token)
    if user is None:
        flash('That is an invalid or expired token!', 'warning')
        return redirect(url_for('reset_request'))
    form  = ResetPasswordForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user.password = hashed_password
        db.session.commit()
        flash("Your password has been updated! You can now login", 'success')
        return redirect(url_for('Login'))
    return render_template('reset_token.html', title = 'Reset Password', form = form)