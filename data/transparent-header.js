
export function transparentHeader(){
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function () {
            const header = document.getElementById('main-header');
            const scrollPosition = window.scrollY;
    
            if (scrollPosition > 100) {
                header.style.backgroundColor = '#FFF';
               
            } else {
                header.style.backgroundColor = 'transparent';
                
            }
    
            
    

    
              
    
        });
    });
    
    
}




