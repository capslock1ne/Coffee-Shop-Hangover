

  import {cart, addToCart} from '../data/cart.js';
  import {products, ProductElement} from '../data/product.js';
  import { transparentHeader } from '../data/transparent-header.js';
  import {formatCurrency } from './utils.js/money.js';





  let productsHTML = '';

  products.forEach((product) => {
    productsHTML  += `<div class="image-wrapper">
    <img src="${product.image}" class = "image">
     
    <div class = "add-to-cart">
    <i class="bi bi-bag-heart-fill  js-add-to-cart" title = "add to cart"
    data-product-id = "${product.id}">
    
      
      </i>
      </div>
      
      
    <div class="content3">
      <h3 class=" name">${product.name}</h3>
      <p class = "description">${product.description}</p>
      <span class="price ">$${formatCurrency(product.priceCents)}</span>
      
      
      
    </div>
    
  </div> 

  

  `;


    
  });


  productsHTML += `
         
          
          <button class="show-menu">
          ${ProductElement.Showbtn} 
          <i class="ri-arrow-right-up-line"></i></button>
      
          `;
          
         



  const containerMenu = document.querySelector('.js-menu');

  if(containerMenu){
    containerMenu.innerHTML = productsHTML;
  }


  export function updateCartQuantity(){
    
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;

      
    });
  
  
  document.querySelector('.js-quantity-count').innerHTML = 
  cartQuantity;
    

  
  }
      
  



  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
        const productId = button.dataset.productId;
        

       

        

        addToCart(productId);
        updateCartQuantity();

        
    });
});

  



  transparentHeader();







  /* Expanding search button 

  const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
          searchButton =  document.getElementById(button)

          searchButton.addEventListener('click', () =>{
            searchBar.classList.toggle('show-search')
          });
  }

  toggleSearch('search-bar', 'search-button');
   

 

/*Hover effect addtocart */



















