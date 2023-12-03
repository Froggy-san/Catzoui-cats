// import { sortBy } from "../model.js";

import View from "./views.js";

class SortView extends View {
  _perentElement = document.querySelector(".sorting");
  allSortBtn = document.querySelectorAll(".sort-op");
  // sortingBy;

  constructor() {
    super();
  }
  addEventHandler(handler) {
    this._perentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".sort-op");
      console.log(btn);
      if (!btn) return;

      // this.sortingBy = btn.dataset.sort;

      this.toggle(btn);

      handler(btn.dataset.sort);
    });
  }

  toggle(btn) {
    if (!btn.classList.contains("btn--active")) {
      this.removeActive();
      btn.classList.add("btn--active");
    } else {
      btn.classList.remove("btn--active");
    }
  }
  removeActive() {
    this.allSortBtn.forEach((btn) => btn.classList.remove("btn--active"));
  }
}

export default new SortView();

// // Using HTMLCollection
// allSortBtn = document.getElementsByClassName("sort-op");

// // Using NodeList and updating it
// allSortBtn = document.querySelectorAll(".sort-op");
// // Whenever you add or remove an element with the class .sort-op, do this:
// allSortBtn = document.querySelectorAll(".sort-op");

// Using arrow function
// this._perentElement.addEventListener("click", (e) => {
//   let btn = e.target.closest(".sort-op");
//   if (!btn) return;
//   //   console.log(btn);
//   this.sortingBy = btn.dataset.sort;
//   // console.log(this.sortingBy);

//   if (!btn.classList.contains("btn--active")) {
//     this.removeActive();
//     btn.classList.add("btn--active");
//   } else {
//     btn.classList.remove("btn--active");
//   }
//   handler(this.sortingBy);
// });

// // Using bind method
// // Bind the removeActive function to the SortView instance and assign it to a variable
// let removeActiveBound = this.removeActive.bind(this);

// // Now you can call it inside the event listener with the correct this value
// this._perentElement.addEventListener("click", function (e) {
//   let btn = e.target.closest(".sort-op");
//   if (!btn) return;
//   //   console.log(btn);
//   this.sortingBy = btn.dataset.sort;
//   // console.log(this.sortingBy);

//   if (!btn.classList.contains("btn--active")) {
//     removeActiveBound();
//     btn.classList.add("btn--active");
//   } else {
//     btn.classList.remove("btn--active");
//   }
//   handler(this.sortingBy);
// });
// this._perentElement.addEventListener("click", (e) => {
//   let btn = e.target.closest(".sort-op");
//   if (!btn) return;
//   //   console.log(btn);
//   this.sortingBy = btn.dataset.sort;
//   // console.log(this.sortingBy);

//   if (!btn.classList.contains("btn--active")) {
//     console.log(this.allSortBtn);
//     this.removeActive();
//     btn.classList.add("btn--active");
//   } else {
//     btn.classList.remove("btn--active");
//   }
//   handler(this.sortingBy);
// });

// Use the this keyword to define the removeActiveBound function as an instance property

// this._perentElement.addEventListener("click", function (e) {
//   let btn = e.target.closest(".sort-op");
//   if (!btn) return;
//   //   console.log(btn);
//   this.sortingBy = btn.dataset.sort;
//   // console.log(this.sortingBy);

//   if (!btn.classList.contains("btn--active")) {
//     console.log(this.allSortBtn);
//     // Use the this keyword to call the removeActiveBound function
//     this.removeActiveBound();
//     btn.classList.add("btn--active");
//   } else {
//     btn.classList.remove("btn--active");
//   }
//   handler(this.sortingBy);
// });
