/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section')

///add list items
const fragment = document.createDocumentFragment();
sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const listItem = document.createElement('li');
    const listLink = document.createElement('a')
    /// Set href Attribute
    listLink.setAttribute('href', `#${sectionId}`)
    listLink.textContent = sectionTitle;
    // Set clss Attribute
    listLink.classList.add('menu__link')


    ///Add smooth to scroll
    listLink.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
    listItem.appendChild(listLink);
    fragment.appendChild(listItem)


})
navList.appendChild(fragment)

/// Add Active Class
const links = document.querySelectorAll(".menu__link")

window.addEventListener("scroll", evt => {
    sections.forEach(section => {
        const secTop = section.getBoundingClientRect().top;
        section.classList.remove("your-active-class")
        if (secTop >= 0 && secTop < 250) {
            section.classList.add("your-active-class")

            links.forEach(link => {

                if (section.dataset.nav === link.textContent) {
                    link.classList.add("activeList")
                } else {
                    link.classList.remove("activeList")
                }
            })
        } else {
            section.classList.remove("your-active-class")
        }
    })
})

// Up btn 
let span = document.querySelector('.up');
window.onscroll = function () {

    if (this.scrollY >= 1000) {
        span.classList.add("show");

    }
    else {
        span.classList.remove("show");
    }
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};











