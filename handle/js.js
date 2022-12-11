const headerElement = document.querySelector('.header-wrapper')
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        headerElement.classList.add('fixed-header')
    } else {
        headerElement.classList.remove('fixed-header')
    }
})
