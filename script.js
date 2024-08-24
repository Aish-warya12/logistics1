var menuBar = document.querySelector(".head-wrapper>div:nth-child(1)")
var toAlignLeft =  document.querySelector(".head-wrapper>div:nth-child(3)")
var section = document.querySelectorAll(".head-wrapper>div:nth-child(3)>a")
const mediaQuery = window.matchMedia("(max-width:1000px)")
let toggel = false
function  handleMediaQuery(e){
   if(e.matches === true){
   

    menuBar.addEventListener("click",()=>{
        toggel=!toggel
        if(toggel){
               toAlignLeft.style.left="0%"
               toAlignLeft.style.transition ="1s"
     }else{
             toAlignLeft.style.left="-50%"
               toAlignLeft.style.transition ="1s"
     }
   
         })

         section.forEach((el)=>{
              el.addEventListener("click",()=>{
                toAlignLeft.style.left="-50%"
               toAlignLeft.style.transition ="1s"
                   

              })
              
         })
         
   }
}
 // Initialize WOW.js
 new WOW().init();


handleMediaQuery(mediaQuery)

mediaQuery.addEventListener("change",handleMediaQuery)

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.fadeInLeft').forEach(function(element) {
        element.classList.add('fadeInLeft');
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const slideInElements = document.querySelectorAll('.slide-in-left');

    function checkSlide() {
        slideInElements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Check the position on page load
});





