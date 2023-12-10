const modal = document.querySelector('.modal')
const productDescription = document.querySelectorAll(".product__description");
const productTitle = document.querySelectorAll(".product__title");
const productMore = document.querySelectorAll(".product__more");
const btns = document.querySelectorAll('.product__btn')

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", ()=> {
    modal.style.display ="flex"
    const title = document.querySelector('.modal__title')
    const description = document.querySelector('.modal__description')
    const modalBtn = document.querySelector(".modal__btn")
    title.textContent = productTitle[i].textContent;
    description.textContent = productDescription[i].textContent;
    modalBtn.href = productMore[i].href
    modalBtn.target = "_blank"
  })  
}
modal.addEventListener("click", (event) => {
  const target = event.target;
  if (target === modal || target.closest(".modal__close")) {
    modal.style.display ="none";
  }
})
const headerNavBtn = document.querySelector(".header__nav-btn");
const headerNavigation = document.querySelector(".header__navigation");
headerNavBtn.addEventListener("click", () => {
  headerNavigation.classList.toggle("header__navigation_open");
});