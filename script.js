const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
}
)


const wrapperElements = document.querySelectorAll('.wrapper');
wrapperElements.forEach((el) => observer.observe(el));