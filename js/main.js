const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbarToggle");

navbarToggle.addEventListener("click", () => {
    const visibility = navbar.getAttribute("data-visible");

    if (visibility === "false"){
        navbar.setAttribute("data-visible", "true");
        navbarToggle.setAttribute("aria-expanded", "true");
    }else{
        navbar.setAttribute("data-visible", "false");
        navbarToggle.setAttribute("aria-expanded", "false");
    }
})

const sr = ScrollReveal ({
	origin: 'top',
	distance: '80px',
	duration: '2000',
	reset: 'true'
});

sr.reveal('.section',{})
sr.reveal('.bible_verse',{delay: 200})
sr.reveal('.email-list-signup',{delay: 100})
sr.reveal('input',{interval: 100})