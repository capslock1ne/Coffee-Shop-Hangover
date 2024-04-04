export let cart = [{
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



export function addToCart(productId){

    let matchingItem;
          
        /*check the product if it's already in the cart*/
         cart.forEach((cartItem) =>{
            if (productId === cartItem.productId){
                matchingItem = cartItem;
            }
         });

         if (matchingItem) {
            matchingItem.quantity += 1;
         }else{
            cart.push({
                productId: productId,
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


export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
     if(cartItem.productId !== productId){
        newCart.push(cartItem);
     }

    });

    cart = newCart;

}
