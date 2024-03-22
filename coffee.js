
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function () {
        var header = document.getElementById('main-header');
        var scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.style.backgroundColor = '#FFF';
           
        } else {
            header.style.backgroundColor = 'transparent';
            
        }

        



          

    });
});



const product = [{
     image: './Assets/images/cafe-americano.jpg',
     name: 'Americano',
     priceCents: 210,
    
}, {
    image: './Assets/images/coffee espresso.jpg',
    name: 'Espresso',
    priceCents: 311,
    

},{

    image: './Assets/images/coffee-latte.jpg',
    name: 'Latte',
    priceCents: 290,
    
},{

    image: './Assets/images/flat-white.jpg',
    name: 'Flat White',
    priceCents: 290,
   
},{
    
    image: './Assets/images/cappuccino.jpg',
    name: 'Special Cappucino',
    priceCents: 310,
    
}];


let productsHTML = '';

product.forEach((product) => {
   productsHTML  += `<div class="box">
   <img src="${product.image}">
   <div class="content3">
     <h3 class=" name">${product.name}</h3>
     <span class="price ">$${(product.priceCents / 100).toFixed(2)}</span>
     <button class="order-btn">Order</button>
     <button class="addCart">Add to Cart</button>
     
   </div>
   
</div> 

`;
  
});

const ProductElement = [{
    Arrow1: 'arrowLeft',
    Arrow2: 'arrowRight',
    Showbtn: 'showmore'

}];

let ProductElementHTML = '';

ProductElement.forEach((OtherStuff) =>{
     ProductElementHTML += 
     `<i class="fas fa-angle-left ${OtherStuff.Arrow1} "></i>
     <i class="fas fa-angle-right ${OtherStuff.Arrow2}"></i>
     <button class="showmore">${OtherStuff.Showbtn}</button>`;

});


console.log(productsHTML);



document.querySelector('.js-menu')
.innerHTML = productsHTML;































/*===== MENU SECTION ======*/
