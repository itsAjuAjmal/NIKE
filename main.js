        var wdt= screen.width;
        var lastScrollTop=0;
        navbar = document.getElementById("search-container");
        window.addEventListener("scroll",function(){
            var scrollTop = window.pageYOffset || document
            .documentElement.scrollTop;
            if(scrollTop >lastScrollTop){
                
                     navbar.style.top="-100px";
            

            }
            else if(scrollTop<10){
                    navbar.style.top="35px";
            }
            else{
                navbar.style.top="0px";
                
            }
            lastScrollTop = scrollTop;
        })
       
   