import productView from "./productView.js";

class SearchView {
  _parentEl = document.querySelector(".bar-top");
  secondSearchBar = document.querySelector(".bar-bottom");

  getQuery() {
    const query =
      this._parentEl.querySelector(".search-bar").value ||
      this.secondSearchBar.querySelector(".search-bar").value;
    this.clearInput();
    return query.toLowerCase();
  }

  clearInput() {
    this._parentEl.querySelector(".search-bar").blur();

    [
      this._parentEl.querySelector(".search-bar"),
      this.secondSearchBar.querySelector(".search-bar"),
    ].forEach((el) => {
      el.value = "";
    });
  }
  addHandlerSearch(handler) {
    [this._parentEl, this.secondSearchBar].forEach((el) =>
      el.addEventListener("submit", function (e) {
        e.preventDefault();

        handler();

        // productView._header.innerHTML = this.getQuery();
      })
    );
  }
}

export default new SearchView();
