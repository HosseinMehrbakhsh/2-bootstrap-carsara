let scrollBtn = document.querySelector('.scrol_btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.remove('d-none');
    }
    else scrollBtn.classList.add('d-none');
});


scrollBtn.addEventListener('click',()=>{
    window.scrollTo(0,0);
})




















// slider
window.addEventListener("load", function () {
    const items = document.querySelectorAll(".carousel_item_comments");
    const items_d = document.querySelectorAll(".carousel_item_comments_d");
    let maxHeight = 0;

    // Find tallest slide
    items.forEach(item => {
        item.style.height = "auto"; // reset in case
        const height = item.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Apply tallest height to all slides
    items.forEach(item => {
        item.style.height = maxHeight + "px";
    });
    items_d.forEach(item => {
        item.style.height = maxHeight + "px";
    });
});