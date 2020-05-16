$(document).ready(function() {
    $('#myForm').on('submit', function(event){
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
                $('#errorAlert').text(data.error).show();
                $('#successAlert').hide();
            } else {
                $('#successAlert').text(data.Message).show();
                $('#errorAlert').hide();
            }

        });
        event.preventDefault();
    });
});