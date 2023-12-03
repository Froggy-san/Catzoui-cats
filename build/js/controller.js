import * as model from "./model.js";
import * as slideView from "./views/sideBarView.js";
import * as sliderView from "./views/sliderView.js";
import productView from "./views/productView.js";
import searchView from "./views/searchView.js";
import sortView from "./views/sortView.js";
import { getRandomYear } from "./helper.js";

const controlInitProducts = async function () {
  try {
    await model.loadProducts();
    console.log(model.Products);
    productView.render(model.Products);
  } catch (err) {
    console.log(err);
  }
};

const controlSearch = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;

    productView.renderSpinner();
    // await model.loadProducts();
    model.loadSearchResults(model.Products, query);
    // model.clear();
    model.restSorting();
    model.restFilterArray();
    sortView.removeActive();
    removeActive(allFilterRange);
    // model.cl();

    productView.changeTitle(query);
    productView.render(model.results);
    addOnSearch(query);
    productView._scrollTo();
    // model.filteringFunction();
  } catch (err) {
    console.log(err);
  }
};

const type = function (sortingBy) {
  switch (sortingBy) {
    case "price":
      return !model.sortedP;
    case "title":
      return !model.sortedT;
    case "rating":
      return !model.sortedR;
    default:
      throw Error(`no sorting type has been found `);
  }
};
const controlSorting = function (sortingBy) {
  model.sorting(sortingBy, type(sortingBy));

  productView.render(model.sortedResults);
};
controlInitProducts();
searchView.addHandlerSearch(controlSearch);
sortView.addEventHandler(controlSorting);

//
//
//

//
//
//

///
//

const toggleFunc = function () {
  if (!btn.classList.contains("btn--active")) {
    allBtn.forEach((btn) => btn.classList.remove("btn--active"));
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
};

// sortView.addEventHandler(controlSorting);

// _perentElement.addEventListener("click", function (e) {
//   const btn = e.target.closest(".sort-op");

//   if (!btn) return;

//   const sortBy = btn.dataset.sort;
//   console.log(sortBy);
//   const type = function () {
//     if (sortBy === "price") {
//       return !model.sortedP;
//     } else if (sortBy === "title") {
//       return !model.sortedT;
//     } else if (sortBy === "rating") {
//       return !model.sortedR;
//     }
//   };

//   if (!btn.classList.contains("btn--active")) {
//     removeActive();
//     btn.classList.add("btn--active");
//   } else {
//     btn.classList.remove("btn--active");
//   }
//   model.sortBy2(sortBy, type());
//   console.log(model.sortedResults);
//   console.log(model.sortedP);
//   productView.render(model.sortedResults);
// });

const allFilterSec = document.querySelectorAll(".filter-sec");
const allFilterRange = document.querySelectorAll(".filter-range");
const toggle = function (btn, selectedBtns, className) {
  if (!btn.classList.contains("btn--active")) {
    removeActive(selectedBtns);
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
  console.log(btn, selectedBtns, className);
};
const removeActive = (btn) => {
  btn.forEach((btn) => btn.classList.remove("btn--active"));
  sortView.removeActive();
};
const toggle2 = function (btn, selectedBtns) {
  removeActive(selectedBtns);
  btn.classList.toggle("btn--active");
};

const addOnSearch = function (searchQuery) {
  // Remove the active class from all buttons first
  removeActive(allFilterSec);
  // Loop through all buttons and check for matching query
  allFilterSec.forEach((el) => {
    if (el.dataset.query === searchQuery) {
      // Add the active class to the matching button
      el.classList.toggle("btn--active");
    }
  });
};
// addOnSearch("electronics");
const getMaxAmout = function (min, max) {
  if (min === 0 && max === 50) {
    return !model.filtedPriceRange1;
  }
  if (min === 50 && max === 200) {
    return !model.filtedPriceRange2;
  }
  if (min === 200 && max === 600) {
    return !model.filtedPriceRange3;
  }
  if (isNaN(min) || isNaN(max)) {
    return !model.filtedPriceRange4;
  }
};
const filterContainer = document.querySelector(".filter");

function commenRestes() {
  model.restFilters();
  model.restSorting();
  model.restFilterArray();
}

filterContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-op");
  if (!btn) return;

  if (btn.dataset.query) {
    if (btn.dataset.query === "Variety") {
      productView.render(model.Products);
      commenRestes();
      model.restResultsArray();
      productView.changeTitle(btn.dataset.query);
    } else {
      model.loadSearchResults(model.Products, btn.dataset.query);
      productView.render(model.results);
      commenRestes();
      productView.changeTitle(btn.dataset.query);
      model.loadSearchResults(model.Products, btn.dataset.query);
      productView.render(model.results);
    }
    toggle2(btn, allFilterSec);
    removeActive(allFilterRange);
  }

  if (btn.dataset.from) {
    // console.log(parseInt(btn.dataset.from), btn.dataset.to);

    model.filterByPrice(
      parseInt(btn.dataset.from),
      1000000,
      getMaxAmout(btn.dataset.from, btn.dataset.to)
    );
    toggle(btn, allFilterRange, "filter-range");
    productView.render(model.filtedResults);
  }
  if (btn.dataset.amount) {
    const currAmount = JSON.parse(btn.dataset.amount);

    model.filterByPrice(
      currAmount[0],
      currAmount[1],
      getMaxAmout(currAmount[0], currAmount[1])
    );
    toggle(btn, allFilterRange, "filter-range");
    productView.render(model.filtedResults);
  }
});

const x = function () {
  if (model.sortedResults.length !== 0) {
    return model.sortedResults;
  } else if (model.filtedResults.length !== 0) {
    return model.filtedResults;
  } else if (model.results.length !== 0) {
    return model.results;
  } else {
    return model.Products;
  }
};

const controlWishList = function (id) {
  const item = model.Products.find((el) => el.id === id);

  if (!item.wished) {
    model.addToWishlist(id);
  } else {
    model.deleteWishList(id);
  }
  productView.update(x());
};

productView.addToWishListHandler(controlWishList);

// selectedProView.addToWishListHandler(controlSelectedProduct);
const productsContainer = document.querySelector(".products-list");

const perentElement = document.querySelector(".layout-fade");
const selectedProductContainer =
  perentElement.querySelector(".selected-product");
const imgContainer = perentElement.querySelector(".images-container");

let curSlide = 0;
// const maxSlides = slides.length;

const checkImages = function (data) {
  if (Array.isArray(data.image)) {
    return data.image
      .map((el, i) => {
        return `<img class="img${i}" src="${el}" alt="image">`;
      })
      .join("");
  } else {
    return `<img src="${data.image}" alt="image">`;
  }
};

const clear = () => {
  selectedProductContainer.innerHTML = "";
};

const CreateDots = function (objImg) {
  if (Array.isArray(objImg.image)) {
    return objImg.image

      .map((el, i) => {
        return `    <div class="dot dot--active" data-slide="${i}">
       <img src="${el}" alt="${objImg.title}"> 
   </div>`;
      })
      .join("");
  } else {
    return `    <div class="dot dot--active" data-slide="0">
    <img src="${objImg.image}" alt="${objImg.title}"> 
</div>`;
  }
};

const activeDot = function (slide) {
  document
    .querySelectorAll(".dot")
    .forEach((el) => el.classList.remove("dot--active"));

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add("dot--active");
};

const goToNextSlide = function (slidess, slide) {
  slidess.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const starting = function (slides) {
  // CreateDots();
  activeDot(0);
  goToNextSlide(slides, 0);
  // autoSlide = waitFiveSecondAndthenStart();
};

// starting();

const nextSlide = function (sildess, maxSlides) {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToNextSlide(sildess, curSlide);
  activeDot(curSlide);
};

const prevSlide = function (sildess, maxSlides) {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToNextSlide(sildess, curSlide);
  activeDot(curSlide);
};

/// listner for the product preview
let maxSlide;
let allImg;
let currentProduct;
productsContainer.addEventListener("click", (e) => {
  const img = e.target.closest(".img-container");
  const title = e.target.closest(".item-title");

  if (img || title) {
    const curProductID = +e.target.closest(".product-item").dataset.id;
    currentProduct = model.Products.find((el) => el.id === curProductID);
    console.log(currentProduct, "CURRENT PRROOOOROOO");
    clear();

    selectedProductContainer.insertAdjacentHTML(
      "afterbegin",
      generateMarkUp(currentProduct)
    );
    allImg = document.querySelectorAll(".images-container img");
    maxSlide = allImg.length;
    starting(allImg);

    perentElement.classList.add("show-product");
    document.body.style.overflowY = "hidden";
  }
});

perentElement.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("close-btn") ||
    e.target.classList.contains("layout-fade")
  ) {
    console.log("working1");
    document.body.style.overflowY = "scroll";
    perentElement.classList.remove("show-product");
    console.log("workign2");
  }

  const rightBtn = e.target.closest(".arrow-right");
  const leftBtn = e.target.closest(".arrow-left");
  const dot = e.target.closest(".dot");
  const wishBtn = e.target.closest(".wish-logo");
  const allSizeBtns = document.querySelectorAll(".size-unit");
  const sizeBtn = e.target.closest(".size-unit");
  const amount = document.querySelector(".amout");
  const incBtn = e.target.closest(".up-arrow");
  const decBtn = e.target.closest(".down-arrow");
  if (incBtn) ++amount.textContent;
  if (decBtn) amount.textContent !== "1" ? --amount.textContent : "";
  if (sizeBtn) toggle2(sizeBtn, allSizeBtns);
  if (rightBtn) nextSlide(allImg, maxSlide);
  if (leftBtn) prevSlide(allImg, maxSlide);
  if (dot) goToNextSlide(allImg, +dot.dataset.slide);
  if (wishBtn) {
    if (!currentProduct.wished) {
      model.addToWishlist(currentProduct.id);
    } else {
      model.deleteWishList(currentProduct.id);
    }
    console.log(currentProduct, "CURRENT PRODUCT HERE !!!!!");
    update(currentProduct);
    productView.update(x());
  }
});

const checkIfClothing = function (obj) {
  const catetitle = !Array.isArray(obj.category) ? obj.category.split(" ") : "";
  if (
    obj.generalCategory == "clothing" ||
    catetitle.some((el) => el === "clothing")
  ) {
    return `     <div class="sizes" >
    <h3>SIZES</h3>
    <div class="size-containers" >

      <span data-size="xs" class="size-unit optians-btn" >XS</span>
      <span data-size="s" class="size-unit optians-btn btn--active" >S</span>
      <span data-size="m" class="size-unit optians-btn" >M</span>
      <span data-size="l" class="size-unit optians-btn" >L</span>
      <span data-size="xl" class="size-unit optians-btn" >XL</span>
    </div>
   </div>`;
  } else {
    return "";
  }
};

const checkIfClothing2 = function (obj, categoryName, word1, word2) {
  const catetitle = !Array.isArray(obj.category) && obj.category.split(" ");
  if (
    (catetitle && catetitle.some((el) => el === categoryName)) ||
    obj.generalCategory === categoryName
  ) {
    return word1;
  } else {
    return word2;
  }
};

const cheackIfArray = function (Obj) {
  if (
    (Array.isArray(Obj.image) && Obj.image.length == 1) ||
    !Array.isArray(Obj.image)
  ) {
    return "";
  }
  if (Array.isArray(Obj.image)) {
    return `    <div class="arrow arrow-right" ><i class="fa-solid fa-arrow-right-long"></i></div>
 <div class="arrow arrow-left" ><i class="fa-solid fa-arrow-left-long"></i></div>`;
  }
};

function calcRating(obj) {
  switch (true) {
    case obj.rating.rate === 0:
      return `
      <div class="rating-stars" >
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="rating-count" >${obj.rating.count}</span>
       </div>
    
    </div>
      `;
    case obj.rating.rate <= 1:
      return `
      <div class="rating-stars " >
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="rating-count" >${obj.rating.count}</span>
       </div>
    
    </div>
      `;
    case obj.rating.rate <= 2:
      return `
      <div class="rating-stars " >
        <span class="fa fa-star  checked"></span>
        <span class="fa fa-star  checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="rating-count" >${obj.rating.count}</span>
       </div>
    
    </div>
      `;
    case obj.rating.rate <= 3:
      return `
    <div class="rating-stars " >
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star  checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="rating-count" >${obj.rating.count}</span>
     </div>
  
  </div>
    `;
    case obj.rating.rate <= 4:
      return `
    <div class="rating-stars" >
      <span class="fa fa-star  checked "></span>
      <span class="fa fa-star  checked"></span>
      <span class="fa fa-star  checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="rating-count" >${obj.rating.count}</span>
     </div>
  
  </div>
    `;
    case obj.rating.rate <= 5:
      return `
    <div class="rating-stars" >
      <span class="fa fa-star checked "></span>
      <span class="fa fa-star  checked"></span>
      <span class="fa fa-star checked "></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star" checked></span>
      <span class="rating-count" >${obj.rating.count}</span>
     </div>
  
  </div>
    `;
    default:
      return `Invalid rating`;
  }
}

const generateMarkUp = function (productOBJ) {
  return `
  <div  data-id ="${productOBJ.id}" class="left-side">
  <i class="fa-solid fa-xmark close-btn"></i>
  <div class="product-preview">
    <div class="images-container" >
    ${checkImages(productOBJ)}
   ${cheackIfArray(productOBJ)}
    </div>


    <div class="dots">

       ${CreateDots(productOBJ)}

    </div>
  </div>


<div class="product-detials" >
   <h2 class="product-title" >${productOBJ.title}</h2>
   <div class="prices-rating" > 
    <div class="prices">
      <del class="discount">${
        productOBJ.discountedPrice ? `$${productOBJ.discountedPrice}` : ""
      }</del> <span class="${
    productOBJ.discountedPrice ? "price" : "only-price"
  }" >$${productOBJ.price}</span>
  
    </div>
  
    ${calcRating(productOBJ)}
    <p class="discreption" >${productOBJ.description}.</p>

     ${checkIfClothing(productOBJ)}

     <div class="add-cart add-wish" >
        <span class="add-cart__btn optians-btn btn--active" >ADD TO CART</span>
      
        <div class="count--wish" >
          <div class="amount-purchsed">
            <div class="arrows up-arrow" > <i class="fa-solid fa-sort-up"></i></div>
            <div class="amout" >1</div>
            <div class=" arrows down-arrow" ><i class="fa-solid fa-sort-down"></i></div>
         </div>
 
         <span class="wish-logo"  title="add to wishlist"> <i class="fa-${
           productOBJ.wished ? "solid" : "regular"
         } fa-heart"></i></span>
        </div>
      
     </div>
     <div class="delivery">
       <span >
        <i class="fa-solid fa-truck"></i>
       </span>
       <span class="fonts">Free delivery on orders over $30.0</span>
     </div>
     <div class="detials" >
        <h3 class="det-title" >CHARACTERISTICS</h3>
        <div class="del-section brand" >
          <span class="tag" >Brand</span>
          <span class="value" >${productOBJ.title.split(" ")[0]}</span>
        </div>
 
        <div class="del-section collection" >
          <span class="tag" >Collection</span>
          <span class="value" >${getRandomYear()}</span>
        </div>

        <div class="del-section item-no" >
          <span class="tag" >item no.</span>
          <span class="value" >${productOBJ.id}</span>
        </div>

        <div class="del-section warranty" >
          <span class="tag" >warranty</span>
          <span class="value" >${checkIfClothing2(
            productOBJ,
            "electronics",
            "2 years",
            "unset"
          )}</span>
        </div>

        <div class="brand" >
          <span class="tag" >Care recommendations</span>
          <span class="value" >${checkIfClothing2(
            productOBJ,
            "clothing",
            "wash machine",
            "refer to warranty"
          )}</span>
        </div>
     </div>
   


   </div>
</div>
 
 `;
};

const update = function (data) {
  // if (!data || (Array.isArray(data) && data.length === 0))
  //   return this.renderError();

  const newMarkup = generateMarkUp(data);

  const newDOM = document.createRange().createContextualFragment(newMarkup);

  const newElements = Array.from(newDOM.querySelectorAll("*"));
  const curElements = Array.from(
    selectedProductContainer.querySelectorAll("*")
  );
  console.log(newElements, "LOK!!");
  // console.log(curElements, "LOK!!");

  // ------------  VERY!! ! IMPORTANT ----// NodeValue see notes
  newElements.forEach((newEl, i) => {
    const curEl = curElements[i];

    // Cheacking the the elment is differant and checking if it is a text or not , and then updates changed text

    if (
      !newEl.isEqualNode(curEl) &&
      newEl.firstChild?.nodeValue &&
      newEl.firstChild.nodeValue.trim() !== ""
    ) {
      // console.log(newEl.firstChild?.nodeValue.trim(), '🎆🎆'); nodeValue always returns text it can't return elements.
      curEl.textContent = newEl.textContent;
    }
    // Update changed attribues (dataset)
    if (!newEl.isEqualNode(curEl)) {
      // console.log(newEl.attributes, '!!!!');
      // console.log(Array.from(newEl.attributes));
      Array.from(newEl.attributes).forEach((attr) =>
        curEl.setAttribute(attr.name, attr.value)
      );
    }
  });
};
