import { API_URL, RES_PER_PAGE } from "./config.js";
import { AJAX } from "./helper.js";
const perentElement = document.querySelector(".products-list");

const products = [
  {
    generalCategory: "electronics",
    category: "mobile",
    description: `

    Samsung Galaxy A04s 3GB 32GB Black boasts the following specifications:
    
        A 6.5-inch PLS LCD screen with a resolution of 720 x 1600 pixels. This screen offers a clear and bright viewing experience with a wide viewing angle.
    
        Operating on Android 12, upgradable to Android 13, with the One UI Core 5 interface. This system provides security updates, new features, and ease of use.
    
        Powered by an octa-core Exynos 850 processor built on an 8nm process, delivering powerful and fast performance in applications and games.
    
        3GB of RAM and 32GB of internal storage. This memory allows for ample data and file storage and the simultaneous operation of multiple applications.
    
    `,

    id: 21,
    image: [
      "https://m.media-amazon.com/images/I/61p+pI6HutL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/316nEE+AbLL._AC_.jpg",
      "https://m.media-amazon.com/images/I/41UoTwboZ7L._AC_.jpg",
    ],
    discountedPrice: 222,
    price: 695,
    rating: { rate: 1, count: 400 },
    title: "Samsung Galaxy A04s 3GB 32GB Black ",
  },

  {
    generalCategory: "electronics",
    category: "mobile",
    description: `


    Nokia C21 Plus boasts the following specifications:

    A 6.52-inch IPS LCD screen with a resolution of 720 x 1600 pixels. This screen provides a clear and vibrant viewing experience with a wide viewing angle.
    Operating on Android 11 (Go edition), this system offers two years of security updates, new features, and user-friendly navigation.
    Powered by an octa-core Unisoc SC9863A processor, providing powerful and fast performance for applications and games.
    3GB of RAM and 64GB of internal storage allow for ample data and file storage, as well as the simultaneous use of multiple applications.


    
    `,

    id: 22,
    image: [
      "https://nokianews.net/images/2022-nov/Nokia-C21-Plus-Indonesia.jpg",
      "https://ehabgroup.com/media/catalog/product/cache/3400290c1ce8265e757d2073b3c47523/n/o/nokia_c21_plus_3g_64g_warm_gray-2.png",
      "https://ehabgroup.com/media/catalog/product/cache/3400290c1ce8265e757d2073b3c47523/n/o/nokia_c21_plus_3g_64g_warm_gray_-1.png",
    ],
    discountedPrice: 3799,
    price: 3333,
    rating: { rate: 2.6, count: 400 },
    title: "Nokia C21 Plus 3G 64GB Warm Gray ",
  },

  {
    generalCategory: "electronics",
    category: "mobile",
    description: `

    Discover the Xiaomi Redmi 12C - a powerful smartphone with a 50MP camera, 4GB RAM, 128GB Storage, Helio G85 chipset, and a long-lasting 5000mAh battery, all packed into a sleek gray design. Get the best of both worlds with the 6.71" 720x1650 pixel screen for immersive viewing and stunning photography.
    
    `,

    id: 23,
    image: [
      "https://m.media-amazon.com/images/I/61A+l+pyiUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/41Or8HPsxkL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61HZsMD+viL._AC_SL1500_.jpg",
    ],
    discountedPrice: 9349,
    price: 8199,
    rating: { rate: 1.6, count: 400 },
    title: "Xiaomi Redmi 12C 4GB 128GB Gray",
  },

  {
    generalCategory: "electronics",
    category: "mobile",
    description: `

   

Realme 11 4G 8GB 256GB is a mid-range smartphone from Realme released in September 2023. It features a 6.4-inch AMOLED display, a 108MP main rear camera, and a 5000mAh battery.

6.4-inch AMOLED display with 1080x2400 pixels resolution
108MP main rear camera
16MP front camera
MediaTek Helio G99 processor
8GB of RAM
256GB of internal storage
5000mAh battery.


    
    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/61gX0uIFEUL._AC_SL1000_.jpg",
      "https://ehabgroup.com/media/catalog/product/cache/3400290c1ce8265e757d2073b3c47523/r/e/realme_11_4g_8gb_256gb_gold_4_.png",
      "https://ehabgroup.com/media/catalog/product/cache/3400290c1ce8265e757d2073b3c47523/r/e/realme_11_4g_8gb_256gb_gold_2_.png",
    ],
    discountedPrice: 9349,
    price: 8199,
    rating: { rate: 4.6, count: 400 },
    title: "Realme 11 4G 8GB 256GB Gold",
  },

  {
    generalCategory: "electronics",
    category: "mobile",
    description: `

    Discover the power and sophistication of the Oppo Find X5 5G Black. With a 6.55" AMOLED display, 50MP camera, Snapdragon 888 5G processor, 8GB RAM, 256GB storage, and a 4800mAh battery, this smartphone is designed for high-end performance. The sleek black color adds a touch of modern elegance. Shop now and experience the best of Oppo technology.
    
    `,

    id: 5,
    image: [
      "https://ehabgroup.com/media/catalog/product/cache/3400290c1ce8265e757d2073b3c47523/o/p/oppo-find-x5-pro-8gb-256gb-black.jpg",
      "c:UsersMOHAME~1AppDataLocalTempoppo-find-x5-pro-8gb-256gb-black-1.jpg",
      "https://ehabgroup.com/media/catalog/product/cache/3400290c1ce8265e757d2073b3c47523/o/p/oppo-find-x5-pro-8gb-256gb-black-3.jpg",
    ],
    discountedPrice: 18849,
    price: 16499,
    rating: { rate: 4.6, count: 400 },
    title: "OPPO Find X5 5G 8Gb 256GB Black ",
  },

  {
    generalCategory: "electronics",
    category: "laptop",
    description: `

    Processor: 12th Gen Intel® Core™ i7-12650H Processor 2.3 GHz (24M Cache, up to 4.7 GHz, 
      RAM: 16GB
      Hard Disk: 512GB SSD
      Graphics Card: NVIDIA® GeForce RTX™ 3070 8GB
      Color: Black
    
    `,

    id: 5,
    image: [
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/d33f1c152d6eb7e8608a208d80f21a14/z/u/zu302-edited.jpg",
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/d33f1c152d6eb7e8608a208d80f21a14/z/u/zu302.jpg",
    ],
    discountedPrice: 59499,
    price: 50999,
    rating: { rate: 4.6, count: 400 },
    title: `Asus TUF Dash F15 FX517ZR - F15173070 Intel® Core™™ i7-12650H - 16GB - 512GB SSD - NVIDIA® GeForce RTX™3070 8GB - 15.6"FHD - Win11 - Black`,
  },

  {
    generalCategory: "electronics",
    category: "laptop",
    description: `

    Processor: 12th Gen Intel® Core™ i5-1235U Processor 12M Cache, up to 4.40 GHz, with IPU
    Ram: 8GB
    Hard Disk: 512GB SSD
    Graphics Card: NVIDIA® GeForce MX550 2GB
    Color: Black
    
    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/619Odb+Ig+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/41DHCW+rkhL._AC_.jpg",
      "https://m.media-amazon.com/images/I/31o7OsfnVFL._AC_.jpg",
      "https://m.media-amazon.com/images/I/31CY5l-ikkL._AC_.jpg",
    ],
    discountedPrice: 59499,
    price: 50999,
    rating: { rate: 4.1, count: 400 },
    title: `Lenovo ThinkPad E14 - Intel® Core™ i5-1235U - 8GB - 512GB SSD - NVIDIA® GeForce MX550 2GB - 14" FHD - Black`,
  },

  {
    generalCategory: "electronics",
    category: "laptop",
    description: `

    Processor: R7-6800HS
RAM: 16GB
Hard Disk: 512GB SSD
Graphics Card: NVIDIA® GeForce RTX 3050 Ti
Color: Black
    
    `,

    id: 5,
    image: [
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/z/u/zu389-min.jpg",
    ],
    discountedPrice: 56399,
    price: 49999,
    rating: { rate: 4.5, count: 400 },
    title: `Asus ROG Flow X13 GV301RE-LJ118W - R7-6800HS - NVIDIA® GeForce RTX 3050 Ti - 13.4'' FHD - 16GB - 512GB SSD - Win 11 - Black`,
  },

  {
    generalCategory: "electronics",
    category: "laptop",
    description: `
    Processor: AMD Ryzen™ 9-5900HS
    RAM: 16GB
    Hard Disk: 1TB SSD
    Graphics Card: NVIDIA® GeForce RTX 3060
    
    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/6174ASdUQ+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/510xhpwgz6L._AC_.jpg",
      "https://m.media-amazon.com/images/I/41tAuZOwZgL._AC_.jpg",
      "https://m.media-amazon.com/images/I/51K-xQ6wpoL._AC_.jpg",
    ],
    discountedPrice: 58199,
    price: 50999,
    rating: { rate: 4, count: 400 },
    title: `Asus ROG Zephyrus G14 GA401QM-K2012T - AMD Ryzen™ 9-5900HS - 16GB - 1TB SSD - NVIDIA® GeForce RTX 3060 - 14.0'' WQHD - Win 10 - Eclipse Gray `,
  },

  {
    generalCategory: "electronics",
    category: "laptop",
    description: `
    Processor: 11th Generation Intel® Core™ i7-11800H (8C / 16T, 2.3GHZ Up To 4.6GHz, 24MB)
Ram: 16GB
Hard Disk: 1TB SSD
Graphics Card: NVIDIA® GeForce® RTX™ 3050 Ti 4GB
Refresh Rate: 165Hz
Color: Stin Grey
    
    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/51T5wbg9BVL._AC_SL1000_.jpg",
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/z/l/zl900-dove-3-2b-min.jpg",
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/z/l/zl900-dove-2-2b-min.jpg",
    ],
    discountedPrice: 51299,
    price: 45699,
    rating: { rate: 4.5, count: 400 },
    title: `Lenovo Legion 5 Pro 16ITH6 - Intel® Core™ i7-11800H - 16GB - 1TB SSD - NVIDIA® GeForce® RTX™ 3050 Ti 4GB - 16" WQXGA - Stin Grey `,
  },

  {
    generalCategory: "electronics",
    category: "laptop",
    description: `
    Processor: AMD Ryzen™ 3 3250U Processor 2.6GHz Base Frequency ( 2 cores, 4 threads, Up to 3.5GHz, 4MB cache)
RAM: 4GB
Hard Disk: 256GB SSD
Graphics Card: AMD Radeon Integrated Graphics
Color: Black
    
    `,

    id: 5,
    image: [
      "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/d33f1c152d6eb7e8608a208d80f21a14/z/h/zh399-1-2b-1.jpg",
    ],
    discountedPrice: 15999,
    price: 13999,
    rating: { rate: 3.4, count: 400 },
    title: `HP 15s-eq1001ne - AMD Ryzen 3-3250U - 4 GB - 256 GB SSD - AMD Radeon Integrated Graphics -15.6" HD - Win11- Black`,
  },

  {
    generalCategory: "clothing",
    category: ["tops", "shirts", "t-shirts"],
    description: `
    Men's Crew Fitness Hoodie 100 - Black 
    
    `,

    id: 5,
    image: [
      "https://contents.mediadecathlon.com/p2073099/k$0dd6e26b582cf8b9509d70c258c6aa17/fitness-hoodie-with-kangaroo-pocket-grey-pattern.jpg?format=auto&quality=40&f=800x800",
      "https://contents.mediadecathlon.com/p2073115/k$2ead8aa63d3d62a6dbfe572eb6ccdd23/fitness-hoodie-with-kangaroo-pocket-grey-pattern.jpg?format=auto&quality=40&f=800x800",
      "https://contents.mediadecathlon.com/p2073107/k$7de49d78c37dff8012ffbf033144d693/fitness-hoodie-with-kangaroo-pocket-grey-pattern.jpg?format=auto&quality=40&f=800x800",
      "https://contents.mediadecathlon.com/p2073131/k$fc750e2198ae4260f51a0544946a2584/fitness-hoodie-with-kangaroo-pocket-grey-pattern.jpg?format=auto&quality=40&f=800x800",
    ],
    discountedPrice: "",
    price: 299,
    rating: { rate: 3.4, count: 400 },
    title: `DOMYOS`,
  },

  {
    generalCategory: "clothing",
    category: ["tops", "shirts", "t-shirts"],
    description: `
    Women's short-sleeved breathable running T-Shirt Dry - green
    `,

    id: 5,
    image: [
      "https://contents.mediadecathlon.com/p1975262/k$5b985a2dc276a8638661f8a7af3d230e/-run-dry-.jpg?format=auto&quality=40&f=800x800",
      "https://contents.mediadecathlon.com/p1974147/k$50bc46ad33a12b0526445ef4d937b24e/-run-dry-.jpg?format=auto&quality=40&f=800x800",
      "https://contents.mediadecathlon.com/p1974272/k$6ce096f454173faaf9d7220395b3ddfe/-run-dry-.jpg?format=auto&quality=40&f=800x800",
      "https://contents.mediadecathlon.com/p1974265/k$3008068a31ce07746d8e48806aa780dd/-run-dry-.jpg?format=auto&quality=40&f=800x800",
    ],
    discountedPrice: "",
    price: 199,
    rating: { rate: 2, count: 400 },
    title: `KALENJI`,
  },

  {
    generalCategory: "clothing",
    category: ["tops", "shirts", "sweatshirts"],
    description: `
    Printonline Unisex Zip Hoodie Sweatshirt 
    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/61IrEgdqMZL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/51OrghZp2LL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/61JiXMHGqhL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/71C1agAwEYL._AC_SY741_.jpg",
    ],
    discountedPrice: "",
    price: 380,
    rating: { rate: 3.4, count: 400 },
    title: `KALENJI`,
  },

  {
    generalCategory: "clothing",
    category: ["bags", "sport bags", "travil bags"],
    description: `
   
70L Safari Travel Bag for Camping Hiking Climbing Outdoor Sports & Wildlife Backless
2.7 2.7 out of 5 stars 10 ratings

    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/61IxuJ1SgLL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51OTU5Lu5hL._AC_SX679_.jpg",
    ],
    discountedPrice: "",
    price: 380,
    rating: { rate: 3.4, count: 400 },
    title: `ASINAIDI`,
  },

  {
    generalCategory: "clothing",
    category: ["bags", "sport bags", "travil bags"],
    description: `
    RUICK High Capacity 80L Outdoor Camouflage Tartical Hiking Daypacks Waterproof Military Bags For Mens Travelling Camping Hunting Trekking Climbing Backpack 

    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/61PdangkACL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61WSAbFs+tL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81G9vPRMpSL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71RrLETTteL._AC_SX679_.jpg",
    ],
    discountedPrice: "",
    price: 125,
    rating: { rate: 4, count: 400 },
    title: `RUICK`,
  },

  {
    generalCategory: "clothing",
    category: ["bags", "kid bags", "school bags", "back to school"],
    description: `
    Bixbee Kids Backpack Funtastical Pink School Bag for Children, Medium 

    `,

    id: 5,
    image: [
      "https://m.media-amazon.com/images/I/81FNrub8DRL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81WrN6p3zZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/813j++zcmrL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71vqg2TM1vL._AC_SX679_.jpg",
    ],
    discountedPrice: 1200,
    price: 929,
    rating: { rate: 5, count: 400 },
    title: `Bixbee`,
  },
];
let apiCount = 20;
products.forEach((el) => {
  el.wished = false;
  el.id = ++apiCount;
});
export let Products;
export let sortedResults = [];
export let results = [];
export let filtedResults = [];
export let wishList = [];

// module.exports = results;
export let sorted = false;
export let sortedP = false;
export let sortedR = false;
export let sortedT = false;
// const mark = function (pro) {
//   return `
// <div class="product-item" >
// <a href="productView.html" >
// <div>
//  <img src="${pro.image}" alt="images">
// </div>
//  <p>${pro.description}</p>
//  <div class="price praice-discount"> <del class="discount">$290</del> <span class="price" >${pro.price}/span></div>
// </a>
// </div>
// `;
// };/category/jewelery

// export const sort = function (sortBy) {
//   console.log("banansssssss");
//   console.log(sortBy);
//   if (sortBy === "rating") {
//     sortByRate();
//   } else if (typeof Products[0][sortBy] === "number") {
//     sortByNumber(sortBy);
//   } else if (typeof Products[0][sortBy] === "string") {
//     sortByAz(sortBy);
//   }

//   console.log(results);
// };

// export const clearResults = () => (results = []);

// const sortByNumber = function (sortBy) {
//   results =
//     results.length == 0
//       ? Products.slice().sort((a, b) => b[sortBy] - a[sortBy])
//       : results.slice().sort((a, b) => b[sortBy] - a[sortBy]);
// };
// const sortByRate = function () {
//   results =
//     results.length == 0
//       ? Products.slice().sort(
//           (a, b) => b["rating"]["rate"] - a["rating"]["rate"]
//         )
//       : results
//           .slice()
//           .sort((a, b) => b["rating"]["rate"] - a["rating"]["rate"]);
// };

// const sortByAz = function (sortBy) {
//   results =
//     results.length == 0
//       ? Products.slice().sort((a, b) =>
//           a[sortBy].toUpperCase().localeCompare(b[sortBy].toUpperCase())
//         )
//       : results
//           .slice()
//           .sort((a, b) =>
//             a[sortBy].toUpperCase().localeCompare(b[sortBy].toUpperCase())
//           );
// };
const init = function () {
  const storage = localStorage.getItem("wishlist");
  if (storage) wishList = JSON.parse(storage);
};
init();

export const loadProducts = async function () {
  const data = await AJAX(`${API_URL}`);

  // console.log(data);
  // console.log(data[0]);
  Products = data;
  Products.push(...products);

  data.forEach((element) => {
    element.wished = false;
    wishList.some((id) => {
      if (id === element.id) {
        element.wished = true;
      }
    });
  });

  try {
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (products, query) {
  try {
    results = products.filter((el) => {
      if (
        (el.category && typeof el.category === "string") ||
        (el.generalCategory && typeof el.generalCategory === "string")
      ) {
        const p = [
          ...String(el.category || "").split(" "),
          ...String(el.generalCategory || "").split(" "),
        ];

        return p.some((element) => {
          return element.toLowerCase().includes(query);
        });
      } else {
        return [];
      }
    });
  } catch (err) {
    console.error(err);
  }
};
// const _perentElement = document.querySelector(".category-title__sort");
// _perentElement.addEventListener("click", function (e) {
//   const btn = e.target.closest(".sort-op");

//   if (!btn) return;

//   btn.classList.toggle("btn--active");

//   const sortBy = btn.dataset.sort;
//   console.log(sortBy);

//   sortBy2(sortBy, !sortedP);
//   // sortedP = !sortedP;
//   console.log(results);
//   console.log(sortedResults);
//   console.log(sortedP);
// });
// this function is for when there are no search result returned so it doesn't sort anything up until the user research for something
export const clear = function () {
  Products = [];
};
export const restSorting = () => {
  sortedP = false;
  sortedR = false;
  sortedT = false;
  sortedResults = [];
};
// export const cl = () => {
//   console.log("sortedP", sortedP);
//   console.log("sortedT", sortedT);
//   console.log("sortedR", sortedR);
// };

const sortByNums = function (sortType, sort) {
  if (sortType === "price") {
    if (sort && filtedResults.length !== 0) {
      return filtedResults.slice().sort((a, b) => b[sortType] - a[sortType]);
    } else if (!sort && filtedResults.length !== 0) {
      return filtedResults;
    } else if (sort && results.length !== 0) {
      return results.slice().sort((a, b) => b[sortType] - a[sortType]);
    } else if (!sort && results.length !== 0) {
      return results;
    } else if (sort && results.length === 0) {
      return Products.slice().sort((a, b) => b[sortType] - a[sortType]);
    } else if (!sort) {
      return Products;
    }
  }
  if (sortType === "rating") {
    if (sort && filtedResults.length !== 0) {
      return filtedResults
        .slice()
        .sort((a, b) => b[sortType].rate - a[sortType].rate);
    } else if (!sort && filtedResults.length !== 0) {
      return filtedResults;
    } else if (sort && results.length !== 0) {
      return results
        .slice()
        .sort((a, b) => b[sortType].rate - a[sortType].rate);
    } else if (!sort && results.length !== 0) {
      return results;
    } else if (sort && results.length === 0) {
      return Products.slice().sort(
        (a, b) => b[sortType].rate - a[sortType].rate
      );
    } else if (!sort) {
      return Products;
    }
  }
};

const sortByTitle = function (sortType, sort) {
  if (sort && filtedResults.length !== 0) {
    return filtedResults
      .slice()
      .sort((a, b) =>
        a[sortType].toUpperCase().localeCompare(b[sortType].toUpperCase())
      );
  } else if (!sort && filtedResults.length !== 0) {
    return filtedResults;
  } else if (sort && results.length !== 0) {
    return results
      .slice()
      .sort((a, b) =>
        a[sortType].toUpperCase().localeCompare(b[sortType].toUpperCase())
      );
  } else if (!sort && results.length !== 0) {
    return results;
  } else if (sort && results.length === 0) {
    return Products.slice().sort((a, b) =>
      a[sortType].toUpperCase().localeCompare(b[sortType].toUpperCase())
    );
  } else if (!sort) {
    return Products;
  }
};
export const sorting = function (sortType, sort = false) {
  if (sortType === "price") {
    // sortedResults = sort
    //   ? results.slice().sort((a, b) => b.price - a.price)
    //   : results;
    sortedResults = sortByNums(sortType, sort);
    sortedP = !sortedP;

    sortedT = false;
    sortedR = false;

    // if (sortedR === true) {
    //   sortedR === false;
    // }
  }

  if (sortType === "title") {
    // sortedResults = sort
    //   ? results
    //       .slice()
    //       .sort((a, b) =>
    //         a.title.toUpperCase().localeCompare(b.title.toUpperCase())
    //       )
    //   : results;
    sortedResults = sortByTitle(sortType, sort);
    sortedT = !sortedT;
    sortedP = false;
    sortedR = false;
  }

  if (sortType === "rating") {
    // sortedResults = sort
    //   ? results.slice().sort((a, b) => b.rating.rate - a.rating.rate)
    //   : results;
    sortedResults = sortByNums(sortType, sort);
    sortedR = !sortedR;
    sortedP = false;
    sortedT = false;
  }
};

// export const sortBy2 = function (sortType, sort = false) {
//   if (sort || sortType == "price") {
//     sortedResults = sort
//       ? results.slice().sort((a, b) => b.price - a.price)
//       : results;
//     sortedP = !sortedP;
//   }

//   if (sort || sortType == "title") {
//     sortedResults = sorted
//       ? results
//           .slice()
//           .sort((a, b) =>
//             a.title.toUpperCase().localeCompare(b.title.toUpperCase())
//           )
//       : results;
//     sortedP = !sortedP;
//   }

//   // if (sorted && sortType === "brand") {
//   //   sortedResults = results
//   //     .slice()
//   //     .sort((a, b) =>
//   //       a.title.toUpperCase().localeCompare(b.title.toUpperCase())
//   //     );
//   //   sorted = !sorted;
//   // }

//   // if (sorted && sortType === "rating") {
//   //   sortedResults = results
//   //     .slice()
//   //     .sort((a, b) => a.rating.rate - b.rating.rate);
//   //   sorted = !sorted;
//   // }

//   // if (!sorted) {
//   //   return results;
//   // }

//   // const movs = results.slice().sort((a, b) => b.price - a.price);
//   // // const sortByAz = Products
//   // //   .slice()
//   // //   .sort((a, b) => b.title.toUpperCase() - a.title.toUpperCase());
//   // const sortByAz = Products.slice().sort((a, b) =>
//   //   a.title.toUpperCase().localeCompare(b.title.toUpperCase())
//   // );

//   // const sortingByRating = Products.slice().sort(
//   //   (a, b) => a.rating.rate - b.rating.rate
//   // );
// };

// export const findProduct = function (arr, call) {
//   const result = arr.find((el) => {
//     el.category === call;
//   });
//   // if (!result) return;
//   console.log(result);
// };

console.log(products);

/// implementing  Filtering

export let filtred = false;

// export const filteringFunction = async function () {
//   await loadProducts();
//   console.log(Products);
//   function filterByPrice(min, max, filted = true) {
//     filted = !filted;
//     return checkIfEmpty().filter(function (product) {
//       return filted ? product.price >= min && product.price <= max : Products;
//     });
//   }

//   console.log(filterByPrice(200, 500, false));
// };
export let filtedPriceRange1 = false;
export let filtedPriceRange2 = false;
export let filtedPriceRange3 = false;
export let filtedPriceRange4 = false;
export let filtedByCate1 = false;
export let filtedByCate2 = false;

export const restFilters = function () {
  filtedPriceRange1 = false;
  filtedPriceRange2 = false;
  filtedPriceRange3 = false;
  filtedPriceRange4 = false;
};

export const restFilterArray = function () {
  filtedResults = [];
};
export const restResultsArray = function () {
  results = [];
};
export function filterByPrice(min = 600, max, filter = false) {
  if ((min === 0, max === 50)) {
    filtedResults = checkIfEmpty().filter(function (product) {
      return filter
        ? product.price >= min && product.price <= max
        : checkIfEmpty();
    });
    filtedPriceRange1 = !filtedPriceRange1;
    filtedPriceRange2 = false;
    filtedPriceRange3 = false;
    filtedPriceRange4 = false;
    filtedByCate1 = false;
    filtedByCate2 = false;
    restSorting();
  }

  if ((min === 50, max === 200)) {
    filtedResults = checkIfEmpty().filter(function (product) {
      return filter
        ? product.price >= min && product.price <= max
        : checkIfEmpty();
    });
    filtedPriceRange1 = false;
    filtedPriceRange2 = !filtedPriceRange2;
    filtedPriceRange3 = false;
    filtedPriceRange4 = false;
    filtedByCate1 = false;
    filtedByCate2 = false;
    restSorting();
  }

  if ((min === 200, max === 600)) {
    filtedResults = checkIfEmpty().filter(function (product) {
      return filter
        ? product.price >= min && product.price <= max
        : checkIfEmpty();
    });
    filtedPriceRange1 = false;
    filtedPriceRange2 = false;
    filtedPriceRange3 = !filtedPriceRange3;
    filtedPriceRange4 = false;
    filtedByCate1 = false;
    filtedByCate2 = false;
    restSorting();
  }

  if ((min === 600, max === 1000000)) {
    filtedResults = checkIfEmpty().filter(function (product) {
      return filter
        ? product.price >= min && product.price <= max
        : checkIfEmpty();
    });
    filtedPriceRange1 = false;
    filtedPriceRange2 = false;
    filtedPriceRange3 = false;
    filtedPriceRange4 = !filtedPriceRange4;
    filtedByCate1 = false;
    filtedByCate2 = false;
    restSorting();
  }
}

const checkIfEmpty = function () {
  return results.length === 0 ? Products : results;
};

const presistWishList = function () {
  localStorage.setItem("wishlist", JSON.stringify(wishList));
};

export const addToWishlist = function (id) {
  console.log(wishList);
  const wishedItem = Products.find((el) => el.id === id);
  wishList.push(wishedItem.id);
  // wishedItem.dataset.wished = true;
  console.log(wishedItem);
  wishedItem.wished = true;
  presistWishList();
  console.log(wishList);
};
export const deleteWishList = function (id) {
  // DELETE bookmark
  const index = wishList.findIndex((el) => el === id);
  console.log(wishList);
  console.log(index);
  wishList.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  const wishedItem = Products.find((el) => el.id === id);
  // wishedItem.dataset.wished = true;
  console.log(wishedItem);
  wishedItem.wished = false;
  presistWishList();
  console.log(wishList);
};
