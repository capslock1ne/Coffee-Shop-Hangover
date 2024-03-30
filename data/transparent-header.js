
export function transparentHeader(){
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
    
    
}

