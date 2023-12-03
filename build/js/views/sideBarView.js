import searchView from "./searchView.js";
const burgerBars = document.querySelector(".bars-list");
const list = document.querySelector(".links");
const toggleSideBar = () => {
  list.classList.remove("show-listed__items");
  list.classList.add("animeate-mov");
};
burgerBars.addEventListener("click", () => {
  console.log("here");
  list.classList.toggle("show-listed__items");
  list.classList.toggle("animeate-mov");
});
document.addEventListener("click", (e) => {
  const nothing = e.target.closest(".links");
  const glassLogo = e.target.closest(".glass-show");
  const z = e.target.closest(".search-bar") || e.target.closest(".search-btn");

  if (e.target === burgerBars || e.target === glassLogo || e.target === z)
    return;

  if (!nothing) toggleSideBar();
  if (e.target !== glassLogo)
    searchView.secondSearchBar.classList.remove("appear");
});

const topSearchBarContanier = document.querySelector(".bar-top");
const bottomSearchBarContanier = document.querySelector(".bar-bottom");
const showBottomSearchBar = document.querySelector(".glass-show");
const topSearchBar = topSearchBarContanier.querySelector(".search-bar");

topSearchBar.addEventListener("focus", () => {
  topSearchBarContanier.classList.toggle("search-shrink");
  topSearchBarContanier.classList.toggle("search-extend");
});

topSearchBar.addEventListener("blur", () => {
  topSearchBarContanier.classList.toggle("search-extend");
  topSearchBarContanier.classList.toggle("search-shrink");
});

showBottomSearchBar.addEventListener("click", () => {
  searchView.clearInput();
  bottomSearchBarContanier.classList.toggle("appear");

  // bottomSearchBarContanier.querySelector(".search-bar").focus();
});

document.addEventListener("keydown", (e) => {
  const esc = "Escape";
  if (e.key == esc) {
    toggleSideBar();
  }
});

const goUp = document.querySelector(".go-up");

const landing = document.querySelector(".galary");

// goUp.addEventListener("click", () => {
//   document.body.scrollHeight;
// });

const stickyBtn = function (entries) {
  const [entry] = entries;
  // console.log(entry, "HERE!");

  if (!entry.isIntersecting) goUp.classList.remove("hidden");
  else goUp.classList.add("hidden");
};

const headerObserver = new IntersectionObserver(stickyBtn, {
  root: null, // mmsh 3arf
  threshold: 0, // kam fel % men el target bayn fel shasha
  // rootMargin: `-${navHight}px`, // abl el threshold b -90px e3mel call ll function
});
headerObserver.observe(landing);

// history.back();

// // Get the element by its id
// var element = document.querySelector(".layout-fade");

// // Assign a function to the popstate event
// window.onpopstate = function () {
//   // Remove the class from the element
//   element.classList.remove("show-product");
// };

// var product = document.querySelector(".layout-fade");
// product.classList.remove("product-show");

window.addEventListener("popstate", function (event) {
  if (event.state === null) {
    let product = document.querySelector(".layout-fade");
    document.body.style.overflowY = "scroll";
    if (product.classList.contains("show-product")) {
      product.classList.remove("show-product");
    }
  }
});

history.pushState({}, "");

// window.addEventListener("popstate", function(event) { // check if the user clicked the back button if (event.state === null) { // get the element with id=“product” var product = document.getElementById(“product”); // check if it has a class of “product-show” if (product.classList.contains(“product-show”)) { // remove the class product.classList.remove(“product-show”); } } });

//   // push a dummy state to the history stack history.pushState({}, “”);
