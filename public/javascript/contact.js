const domain = document.domain;
const name = $('#name-input');
const company = $('#company-input');
const phone = $('#phone-input');
const email = $('#email-input');
const subject = $('#subject-input');
const message = $('#message-input');
const btn = $('#message-submit');

btn.on("click", function (event) {
    event.preventDefault();
    $.post("/contact", {
        name: name.val(),
        company: company.val(),
        phone: phone.val(),
        email: email.val(),
        subject: subject.val(),
        message: message.val(),
        domain: domain,
    })
    name.val('');
    company.val('');
    phone.val('');
    email.val('');
    message.val('');
})