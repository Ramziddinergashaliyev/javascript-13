const API_URL = "https://dummyjson.com";
const productCard = document.querySelector(".product__card");

async function fetchData(url) {
  let param = new URLSearchParams(window.location.search);
  let id = param.get("id");

  const data = await fetch(`${url}/products/${id}`);
  data
    .json()
    .then((res) => mapDataProduc(res))
    .catch((err) => console.log(err));
}
fetchData(API_URL);

function mapDataProduc(prod) {
  productCard.innerHTML = `
      <div>
        <img src=${prod.images[0]} alt="">
      </div>
      <div>
        <h1>title: ${prod.title}</h1>
        <p class="product__desc">description: ${prod.description}</p>
        <p class="product__desc">price: ${prod.price}</p>
        <p class="product__desc">discountPercentage: ${prod.discountPercentage}</p>
        <p class="product__desc">rating: ${prod.rating}</p>
        <p class="product__desc">stock: ${prod.stock}</p>
        <p class="product__desc">brand: ${prod.brand}</p>
        <p class="product__desc">category: ${prod.category}</p>
        <p class="product__desc">thumbnail: ${prod.thumbnail}</p>
      </div>
  `;
}
