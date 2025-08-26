export let cart  = JSON.parse(localStorage.getItem('cart'));
        
if (!cart){
    cart =  [{
        productId: 'product1',
        quantity: 1,
    },{
        productId: 'product2',
        quantity: 1,    
    },{
        productId: 'product3',
        quantity: 1,
    },{
        productId: 'product4',
        quantity: 1,
    
    },{
        productId: 'product5',
        quantity: 1
    }];
    
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem = cart.find(cartItem => productId === cartItem.productId);

    if (matchingItem) {
        matchingItem.quantity += 1;
        
    } else {
        cart.push({ productId, quantity: 1 });
    }
    
        notification(productId);
    saveToStorage();
    console.log(cart);

}
    

 export function notification(productId){

    const notif = document.getElementById('notification-container'); 
  
     notif.textContent = " 'Added to cart' ";
     notif.style.display = 'block';

     setTimeout(() => {
       notif.style.display = 'none';
     }, 2000); 
  }


 export function decreaseQuantity(productId){

    let matchingItem = cart.find(cartItem => productId === cartItem.productId);

    if(matchingItem ) {
        if (matchingItem.quantity > 1) {
            matchingItem.quantity -= 1;
        } else {
            removeFromCart(productId);
        }
        saveToStorage();
    }
     
 }



// Remove a product from the cart
export function removeFromCart(productId) {
    cart = cart.filter(cartItem => cartItem.productId !== productId);
    saveToStorage();
    console.log(cart);
    
   
}

 