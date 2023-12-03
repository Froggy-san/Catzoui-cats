// import View from "./views.js";
// import productView from "./productView.js";
// class SelectedProduct extends View {
//   _perentElement = document.querySelector(".layout-fade");
//   _cardProduct = this._perentElement.querySelector(".selected-product");
//   _imgContainer = this._perentElement.querySelector(".images-container");

//   _slides = this._imgContainer.querySelectorAll(".images-container img");

//   _dotsContainer = document.querySelector(".dots");

//   _maxSlides = this._slides.length;

//   addToWishListHandler(handler) {
//     this._perentElement.addEventListener("click", (e) => {
//       if (
//         e.target.classList.contains("close-btn") ||
//         e.target.classList.contains("layout-fade")
//       ) {
//         console.log("working1");
//         document.body.style.overflowY = "scroll";
//         this._perentElement.classList.remove("show-product");
//         console.log("workign2");
//       }

//       handler();
//       console.log(productView.curProduct, "From selected");
//       console.log(this._imgContainer);
//       console.log(this._slides);
//       console.log(this._dotsContainer);
//       console.log(this._maxSlides);
//     });
//   }

//   render(data, render = true) {
//     if (!data || (Array.isArray(data) && data.length === 0))
//       return this.renderError();

//     this._data = data;
//     console.log(this._data, "BOR BOR");
//     const markup = this._generateMarkup();
//     console.log(markup, "BOORORO");
//     console.log(this._cardProduct, "yoooooooooooooooo work please");
//     if (!render) return markup;
//     this._clear();
//     this._cardProduct.insertAdjacentHTML("afterbegin", markup);
//     this.starting();
//   }

//   _clear() {
//     this._cardProduct.innerHTML = "";
//   }
//   CreateDots() {
//     console.log(this._slides);
//     console.log(this._dotsContainer);
//     this._slides.forEach((el, i) => {
//       this._dotsContainer.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="dot dot--active" data-slide="${i}">
//            ${el}
//         </div>

//         `
//       );
//     });
//     console.log(this._dotsContainer, "ASDASDASDASDADSADAD");
//   }

//   activeDot(slide) {
//     document
//       .querySelectorAll(".dot")
//       .forEach((el) => el.classList.remove("dot--active"));

//     document
//       .querySelector(`.dot[data-slide="${slide}"]`)
//       .classList.add("dot--active");
//   }

//   goToNextSlide(slide) {
//     this._slides.forEach((el, i) => {
//       el.style.transform = `translateX(${100 * (i - slide)}%)`;
//     });
//   }

//   starting() {
//     this.CreateDots();
//     // this.activeDot(0);
//     this.goToNextSlide(0);
//     // autoSlide = waitFiveSecondAndthenStart();
//   }

//   nextSlide() {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToNextSlide(curSlide);
//     activeDot(curSlide);
//   }

//   prevSlide() {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToNextSlide(curSlide);
//     activeDot(curSlide);
//   }

//   _checkImages(data = this._data) {
//     if (Array.isArray(this._data.image)) {
//       return this._data.image
//         .map((el) => {
//           return `<img src="${el}" alt="image">`;
//         })
//         .join("");
//     } else {
//       return `<img src="${this._data.image}" alt="image">`;
//     }
//   }

//   _generateMarkup() {
//     return `

//     <div class="left-side">
//     <i class="fa-solid fa-xmark close-btn"></i>
//     <div class="product-preview">
//       <div class="images-container" >
//       ${this._checkImages()}
//         <div class="arrow arrow-right" ><i class="fa-solid fa-arrow-right-long"></i></div>
//         <div class="arrow arrow-left" ><i class="fa-solid fa-arrow-left-long"></i></div>
//       </div>

//       <div class="dots">

//       </div>

//     </div>

//   <div class="product-detials" >
//      <h2 class="product-title" >${this._data.title}</h2>
//      <div class="prices-rating" >
//       <div class="prices">
//         <del class="discount">$290</del> <span class="price" >$${
//           this._data.price
//         }</span>

//       </div>

//       <div class="rating-stars" >
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star"></span>
//         <span class="fa fa-star"></span>
//         <span class="rating-count" >${this._data.rating.count}</span>
//        </div>

//     </div>
//       <p class="discreption" >${this._data.description}.</p>

//        <div class="sizes" >
//         <h3>SIZES</h3>
//         <div class="size-containers" >

//           <span data-size="xs" class="size-unit optians-btn" >XS</span>
//           <span data-size="s" class="size-unit optians-btn btn--active" >S</span>
//           <span data-size="m" class="size-unit optians-btn" >M</span>
//           <span data-size="l" class="size-unit optians-btn" >L</span>
//           <span data-size="xl" class="size-unit optians-btn" >XL</span>
//         </div>
//        </div>

//        <div class="add-cart add-wish" >
//           <span class="add-cart__btn optians-btn btn--active" >ADD TO CART</span>

//           <div class="count--wish" >
//             <div class="amount-purchsed">
//               <div class="arrows up-arrow" > <i class="fa-solid fa-sort-up"></i></div>
//               <div class="amout" >1</div>
//               <div class=" arrows down-arrow" ><i class="fa-solid fa-sort-down"></i></div>
//            </div>

//            <span class="wish-logo"  title="add to wishlist"> <i class="fa-${
//              this._data.wished ? "solid" : "regular"
//            } fa-heart"></i></span>
//           </div>

//        </div>
//        <div class="delivery">
//          <span >
//           <i class="fa-solid fa-truck"></i>
//          </span>
//          <span class="fonts">Free delivery on orders over $30.0</span>
//        </div>
//        <div class="detials" >
//           <h3 class="det-title" >CHARACTERISTICS</h3>
//           <div class="del-section brand" >
//             <span class="tag" >Brand</span>
//             <span class="value" >Pinko</span>
//           </div>

//           <div class="del-section collection" >
//             <span class="tag" >Brand</span>
//             <span class="value" >Pinko</span>
//           </div>

//           <div class="del-section item-no" >
//             <span class="tag" >item no.</span>
//             <span class="value" >21</span>
//           </div>

//           <div class="del-section matrial" >
//             <span class="tag" >Brand</span>
//             <span class="value" >Pinko</span>
//           </div>

//           <div class="brand" >
//             <span class="tag" >Care recommendations</span>
//             <span class="value" >machine wash</span>
//           </div>
//        </div>

//      </div>
//   </div>

//       `;
//   }
// }

// export default new SelectedProduct();
