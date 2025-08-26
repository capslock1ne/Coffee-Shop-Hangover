import { cart, addToCart, removeFromCart, decreaseQuantity } from '../data/cart.js';
import { products } from '../data/product.js';
import { transparentHeader } from '../data/transparent-header.js';
import { formatCurrency } from '../Scripts/utils.js/money.js';
import { updateCartQuantity } from '../Scripts/coffee.js';





function renderCartSummary() {
    let cartSummaryHTML = '';
  
    cart.forEach((cartItem) => {
        const productS = cartItem.productId;
        const matchingProduct = products.find(product => product.id === productS);

        if (matchingProduct) {
            cartSummaryHTML += `
                <div class="order-summary js-order-summary js-order-summary-container-${matchingProduct.id}">
                    <div class="cart-product" data-product-id="${matchingProduct.id}">
                        <div class="product-image">
                            <img src="${matchingProduct.image}" alt="${matchingProduct.name}">
                        </div>
                        <div class="cart-product-details">
                            <p class="product-name">${matchingProduct.name}</p>
                            <p class="product-quantity">Quantity: ${cartItem.quantity}</p>
                            <div class="price">
                                <p class="product-price">$${formatCurrency(matchingProduct.priceCents)}</p>
                            </div>
                        </div>
                        <div class="edit-btn">
                            <button class="minus js-minus-link" data-product-id="${matchingProduct.id}">-</button>
                            <button class="plus js-plus" data-product-id="${matchingProduct.id}">+</button>
                            <button class="plus js-delete-btn" data-product-id="${matchingProduct.id}"><i class="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>
                </div>`;
        }
    });
    
    console.log(cartSummaryHTML);
    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

    /* Reattach event listeners
    document.querySelectorAll('.js-plus').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
            renderCartSummary(); // Re-render the cart summary
        });
    });

*/

        $('.js-plus').each(function(index, button) {
            $(button).on('click', () => {
             const productId = button.dataset.productId;
             addToCart(productId);
             updateCartQuantity();
             renderCartSummary();
            });
           });


  /*
   
    document.querySelectorAll('.js-minus-link').forEach((button) =>{
         button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            decreaseQuantity(productId);
            updateCartQuantity();
            renderCartSummary();
        

         });
    });

    */
    
     $('.js-minus-link').each(function(index, button){
         $(button).on('click', () =>{
            const productId = button.dataset.productId;
            decreaseQuantity(productId);
            updateCartQuantity();
            renderCartSummary();
         });
     });

 
      /*
    document.querySelectorAll('.js-delete-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            removeFromCart(productId);
            updateCartQuantity();
            renderCartSummary(); // Re-render the cart summary
        });
    });
    */

    $('.js-delete-btn').each(function(index, button) {
        $(button).on('click', () =>{
            const productId = button.dataset.productId;
             removeFromCart(productId);
             updateCartQuantity();
             renderCartSummary();
        })
    })
}

renderCartSummary();
transparentHeader();
updateCartQuantity();