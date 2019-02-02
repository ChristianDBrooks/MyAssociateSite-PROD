const scrollBtnStart = $('#scroll-btn-start');
const scrollBtnEnd = $('#scroll-btn-end');
const scrollDiv = $('.scroll-div')

let current = 0;

scrollBtnStart.on("click", function () {
    console.log(current);
    if (current - 1 >= 0) {
        current -= 1;
        scrollDiv.children()[current].scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }
})

scrollBtnEnd.on("click", function () {
    console.log(current);
    if (current + 1 <= scrollDiv.children().length - 1) {
        current += 1;
        scrollDiv.children()[current].scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    } else {
        console.log(current + "is the current index, but it didn't move.");
    }
})