import {cart} from '../data/cart.js';
import {product} from '../data/product.js';


cart.forEach((cartItem) => {
    const productId = cartItem.productId;

   let matchingProduct;
   product.forEach((product) =>{
    if (product.id === productId){
        matchingProduct = product;
    }
   });

   

   document.querySelector('.js-order-summary')
   .innerHTML  += `
    
<div class="cart-product">
    <div class="product-image">
        <img src="${matchingProduct.image}">
        </div>
        <div class="cart-product-details">
        <p class="product-name">${matchingProduct.name}</p>
        <p class="product-quantity">Quantity: ${cartItem.quantity}</p>
        <div class="price">
        <p class="product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</p>
        </div>
        
    
    </div>

    
    `;
});


