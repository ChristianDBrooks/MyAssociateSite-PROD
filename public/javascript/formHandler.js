console.log($('#fn-input').val())
console.log($('fn-input').val())

const email = $('#')

accessBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if ($('fn-input').val() != "" && $('#ln-input').val() != "" && $('#phone-input').val() != "" && $('#email-input').val() != "") {
        $.post({
            to: 
        })

        accessForm.className = "d-none";
        accessVideo.className = "col col-12 col-sm-6"
    } else {
        alert("Please complete the form to proceed.")
    }
})