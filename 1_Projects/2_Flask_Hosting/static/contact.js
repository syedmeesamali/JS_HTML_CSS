$(document).ready(function() {
    $('form').on('submit', function(event){
        alert("Data submitted")
        console.log("Contact js is loaded!")
        $.ajax({
            data: {
                name : $('#name').val(),
                email : $('#email').val(),
                title : $('#title').val(),
                Message : $('#message').val()
            }, 
            type : 'POST',
            url : '/save_form'
        })
        .done(function(data) {
            if (data.error) {
                $('#errorAlert').show();
                $('#successAlert').hide();
            } else {
                $('#successAlert').show();
                $('#errorAlert').hide();
            }

        });
        event.preventDefault();
    });
});