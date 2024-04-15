

import {cart, addToCart, updateCartQuantity} from '../data/cart.js';
import {product, ProductElement} from '../data/product.js';
import { transparentHeader } from '../data/transparent-header.js';
import {formatCurrency } from './utils.js/money.js';


let productsHTML = '';

product.forEach((product) => {
   productsHTML  += `<div class="box">
   <img src="${product.image}">
   <div class="content3">
     <h3 class=" name">${product.name}</h3>
     <span class="price ">$${formatCurrency(product.priceCents)}</span>
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
        <button class="show-more">${ProductElement.Showbtn}</button>
        `;



document.querySelector('.js-menu')
.innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>{
     button.addEventListener('click', () => {
         const  productId = button.dataset.
         productId;
         addToCart(productId);
         updateCartQuantity();


       
        
     });
});


transparentHeader();


























