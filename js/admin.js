const loginBtn = document.querySelector(".loginBtn");
let isLogin = localStorage.getItem("x-auth-token");

function chekProducts() {
  if (!isLogin) {
    window.location.replace("../index.html");
  }
}
chekProducts();

loginBtn.addEventListener("click", () => {
  localStorage.clear();
  window.open("../index.html", "_self");
});
