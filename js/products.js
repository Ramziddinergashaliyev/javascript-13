const API_URL = "https://dummyjson.com";
const loginBtn = document.querySelector(".loginBtn");
const formCard = document.querySelector(".form__card");
const productsCards = document.querySelector(".products__cards");
const seeMoreBtn = document.querySelector(".seeMoreBtn");
const form = document.querySelector(".form");
const products = document.querySelector(".products");

const username = document.querySelector(".username");
const password = document.querySelector(".password");

let limitProducs = 4;
let count = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let product = {
    username: username.value,
    password: password.value,
  };
  logIn(product);
});

async function logIn(product) {
  await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message === "Invalid credentials") {
        return alert("Malumot xato kiritildi");
      }
      localStorage.setItem("x-auth-token", res.token);
      window.open("./pages/admin.html", "_self");
    })
    .catch((err) => console.log(err));
}

async function apiProduct(url) {
  let producData = await fetch(`${url}/products?limit=${limitProducs * count}`);
  producData
    .json()
    .then((res) => mapProductData(res))
    .catch((err) => console.log(err))
    .finally(() => {
      seeMoreBtn.innerHTML = "See more";
      seeMoreBtn.removeAttribute("disabled", true);
    });
}
apiProduct(API_URL);

function mapProductData(product) {
  let productsCard = "";
  product.products.forEach((prod) => {
    productsCard += `
          <div class="products__card">
            <div class="products__card__img">
              <img class="card__img" data-id=${prod.id} src=${prod.images[0]} alt="">
            </div>
            <div class="products__card__info">
              <h1 class="products__card__info__title">brand: ${prod.brand}</h1>
              <p class="products__card__info__desc">category: ${prod.category}</p>
              <p class="products__card__info__desc">price: ${prod.price}</p>
            </div>
          </div>
    `;
  });
  productsCards.innerHTML = productsCard;
}

seeMoreBtn.addEventListener("click", () => {
  count++;
  apiProduct(API_URL);
  seeMoreBtn.innerHTML = "loading...";
  seeMoreBtn.setAttribute("disabled", true);
});

loginBtn.addEventListener("click", () => {
  formCard.style.display = "block";
});

products.addEventListener("click", (e) => {
  if (e.target.className === "card__img") {
    let id = e.target.dataset.id;
    window.open(`./pages/products.html?id=${id}`, "_self");
  }
});

const logbtn = document.querySelector(".loginBtn");

function chekAdmin() {
  let isLogin = localStorage.getItem("x-auth-token");
  if (isLogin) {
    logbtn.innerHTML = "Login In";
  } else {
    logbtn.innerHTML = "login Out";
  }
}

chekAdmin();
