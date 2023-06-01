const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hidenElements = document.querySelectorAll(".hidden");
hidenElements.forEach((ell) => observer.observe(ell));

const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show2");
        } else {
            entry.target.classList.remove("show2");
        }
    });
});
const hidenElements2 = document.querySelectorAll(".hidden2");
hidenElements2.forEach((ell) => observer2.observe(ell));

const openmenu = document.getElementsByClassName("openmenu")[0];
const closemenu = document.getElementsByClassName("closemenu")[0];
const sidenav = document.getElementsByClassName("sidenav")[0];
const sidenavcont = document.getElementsByClassName("sidenavcont")[0];

openmenu.addEventListener("click", active);
closemenu.addEventListener("click", inactive);

function active() {
    sidenav.classList.add("active");
}

function inactive() {
    sidenav.classList.remove("active");
}
HTMLFormControlsCollection.log;
