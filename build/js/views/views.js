export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._perentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    console.log(newDOM, "LOK!!");
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._perentElement.querySelectorAll("*"));
    // console.log(newElements, "LOK!!");
    // console.log(curElements, "LOK!!");

    // ------------  VERY!! ! IMPORTANT ----// NodeValue see notes
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));
      // Cheacking the the elment is differant and checking if it is a text or not , and then updates changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
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
  }

  _clear() {
    this._perentElement.innerHTML = "";
  }
  renderError(message = this._errorMessage) {
    const markup = `
       <div class="message">
             
              <p>${message}</p>
            </div>
       `;
    this._clear();
    this._perentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // renderMessage(message = this._message) {
  //   const markup = `
  //      <div class="message">
  //             <div>
  //               <svg>
  //                 <use href="${icons}#icon-smile"></use>
  //               </svg>
  //             </div>
  //             <p>${message}</p>
  //           </div>
  //      `;
  //   this._clear();
  //   this._perentElement.insertAdjacentHTML("afterbegin", markup);
  // }
  renderSpinner() {
    const markup = `
    <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>

  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>


  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>



  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>



  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>



  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>


  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>



  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>


  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>

  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>


  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>


  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>

  <div class="product-item animate-pulse loading-item" >
    <a href="productView.html" >
    <div>
      
    </div>
      <p></p>
      <div class="price praice-discount"> <del class="discount"></del> <span class="price" ></span></div>
    </a>
  </div>`;
    this._perentElement.innerHTML = "";
    this._perentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
