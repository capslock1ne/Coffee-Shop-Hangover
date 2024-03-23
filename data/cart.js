export const cart = [];

export function addToCart(productName){

    let matchingItem;
          
        /*check the product if it's already in the cart*/
         cart.forEach((cartItem) =>{
            if (productName === cartItem.productName){
                matchingItem = cartItem;
            }
         });

         if (matchingItem) {
            matchingItem.quantity += 1;
         }else{
            cart.push({
                productName: productName,
                quantity: 1
             });
         }
}


export function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) =>{
        cartQuantity +=  cartItem.quantity ;
    });
     
    document.querySelector('.js-quantity-count').innerHTML = 
    cartQuantity;
}