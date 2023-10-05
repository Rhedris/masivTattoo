const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-hidden');
        } else {
            entry.target.classList.remove('scroll-hidden');
        }
    });
}, { threshold: 0.8 });

const the_animation = document.querySelectorAll('.hidden');
the_animation.forEach((element) => {
    observer.observe(element);
});

const The_animation = document.querySelectorAll('.hidden1');
The_animation.forEach((element) => {
    observer.observe(element);
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("Header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


