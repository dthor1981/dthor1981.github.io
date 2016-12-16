 
 //DOC Ready Function
jQuery.noConflict();
jQuery(document).ready(function (){
    mainMenuScroll();
    shake("#star");
    shake("#shield");
    shake("#brush");
});
    
function mainMenuScroll(){
         jQuery(".menu-scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if(jQuery(this.hash).offset().top > jQuery(document).height()-jQuery(window).height()){
              dest=jQuery(document).height()-jQuery(window).height();
         }else{
              dest=jQuery(this.hash).offset().top-50;
         }
         //go to destination
         jQuery('html,body').animate({scrollTop:dest}, 1000,'swing');
 });   
 }

function shake(el){   
jQuery(el).hover(innerShake);
}
function innerShake(){
//var star = document.getElementById("star");
//TweenMax.to(this, 0.1, {x:"+=20", yoyo:true, repeat:1});
//TweenMax.to(this, 0.1, {x:"-=20", yoyo:true, repeat:-1});
TweenLite.fromTo(this, 2, { rotation: 20}, { rotation: -20, ease: RoughEase.ease.config({ strength: 5, points: 20,taper:"out", randomize: false}), clearProps: "rotation"});
}



