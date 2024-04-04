import {cart, removeFromCart} from '../data/cart.js';
import {product} from '../data/product.js';
import {formatCurrency} from './utils.js/money.js';




cart.forEach((cartItem) => {
    const productId = cartItem.productId;

   let matchingProduct;
   product.forEach((product) =>{
    if (product.id === productId){
        matchingProduct = product;
    }
   });

   

   
   
   document.querySelector('.js-order-summary')
   .innerHTML   += `
   <div class="order-summary js-order-summary 
   js-cart-item-container-${matchingProduct.id}">
<div class="cart-product">
    <div class="product-image">
        <img src="${matchingProduct.image}">
        </div>
        <div class="cart-product-details">
        <p class="product-name">${matchingProduct.name}</p>
        <p class="product-quantity">Quantity: ${cartItem.quantity}</p>
        <div class="price">
        <p class="product-price">$${formatCurrency(matchingProduct.priceCents)}</p>
        </div>
        
    
    </div>
    <div class="edit-btn">
    <button class="minus js-minus" 
    data-product-id="${matchingProduct.id}" >-</button>
    <button class="plus js-plus" >+</button>
  </div>
  </div>
    `;
    
});


document.querySelectorAll('.js-minus')
.forEach((link) => {
    link.addEventListener('click',  () => {
     const productId = link.dataset.productId
     console.log(productId);
     removeFromCart(productId);
     

     document.querySelector
     (`.js-cart-item-container-${productId}`);
    });
});




