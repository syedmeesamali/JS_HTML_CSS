$('#contact-form-button').click(function (e) { 
    e.preventDefault();
    var form = $('#contact-form');
    var form_id = 'contact-form';
    var url = form.prop('action');
    var type = form.prop('method');
    var formData = getFormData(form_id);

    send_form(form, form_id, url, type, modular_ajax, formData);
    
});