// function saySomething   () {


  // alert  ("Welcome, Order Your Favourite");
// }

// saySomething(); 
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');



cartIcon.onclick = () => {
  cart.classList.add("active");

};
closeCart.onclick = () => {
  cart.classList.remove("active");

};
let my = document.getElementById("my");
let formContainer = document.querySelector('.form-container');

my.onclick = () => {
  formContainer.classList.add("show");
}



