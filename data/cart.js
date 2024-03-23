export const cart = [];

export function addToCart(productName){

    let matchingItem;
          
        /*check the product if it's already in the cart*/
         cart.forEach((cartitem) =>{
            if (productName === cartitem.productName){
                matchingItem = cartitem;
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
