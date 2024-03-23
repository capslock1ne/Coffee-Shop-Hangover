

import {cart, addToCart} from '../data/cart.js';
import {product, ProductElement} from '../data/product.js';



let productsHTML = '';

product.forEach((product) => {
   productsHTML  += `<div class="box">
   <img src="${product.image}">
   <div class="content3">
     <h3 class=" name">${product.name}</h3>
     <span class="price ">$${(product.priceCents / 100).toFixed(2)}</span>
     <button class="order-btn">Order</button>
     <button class="addCart js-add-to-cart" 
     data-product-name = "${product.name}">
     Add to Cart</button>
     
   </div>
   
</div> 

`;
  
});


productsHTML += `
        <i class="${ProductElement.Arrow1}"></i>
        <i class="${ProductElement.Arrow2}"></i>
        <button class="showmore">${ProductElement.Showbtn}</button>
        `;



document.querySelector('.js-menu')
.innerHTML = productsHTML;


function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartitem) =>{
        cartQuantity +=  cartitem.quantity ;
    });
     
    document.querySelector('.js-quantity-count').innerHTML = 
    cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>{
     button.addEventListener('click', () => {
         const  productName = button.dataset.
         productName;
         addToCart(productName);
         updateCartQuantity();


       
        
     });
});





























