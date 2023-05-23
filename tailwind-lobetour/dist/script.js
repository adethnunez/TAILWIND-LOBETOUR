const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  header.classList.toggle("open");
});

//  footer LINKS
const flinks = document.querySelectorAll(".footer__links__item h4");
flinks.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

//  help LINKS
const hlinks = document.querySelectorAll(".links__item h4");
hlinks.forEach((baba) => {
  baba.addEventListener("click", () => {
    removeActivelinks();
    baba.nextElementSibling.classList.add("active");
    removeActivelinks__icon();
    baba.querySelector("i").classList.add("active");
  });
});

function removeActivelinks() {
  hlinks.forEach((baba) => {
      baba.nextElementSibling.classList.remove("active");
  });
}

function removeActivelinks__icon() {
  hlinks.forEach((baba) => {
    baba.querySelector("i").classList.remove("active");
  });
}


// help scroll
const hscroll = document.querySelector(".links__scroll");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300 && window.pageYOffset <= 400) {
    hscroll.classList.add("sticky");
  } else {
    hscroll.classList.remove("sticky");
  }
});


const faqNav = document.querySelectorAll(".faq__nav__link");
const faqContent = document.querySelectorAll(".faq__content");
faqNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveStar();
    faq.classList.add("active");
    const activeContent = document.querySelector(`#${faq.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  faqNav.forEach((faq) => {
    faq.classList.remove("active");
  });
}

function removeActiveContent() {
  faqContent.forEach((faq) => {
    faq.classList.remove("active");
  });
}