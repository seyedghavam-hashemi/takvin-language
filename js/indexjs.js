function divrandom() {
   var divtags=$(".header-changing0");
   if(divtags.length) {
       var display=Math.floor(Math.random() * divtags.length);
       for(var i=0; i<divtags.length; i++){
           if(i!==display){
               $(divtags[i]).hide();
 
           }
       }
   }
 }



/*index0-1 start*/
function changebg1() {
    document.getElementById("header-changing1").style.backgroundImage = "url(./img/halloween-2.png)";
 }
 function hideshow1(){
    document.getElementById("moon-icon1").style.display="none";
    document.getElementById("star-icon1").style.display="none";
    document.getElementById("textIdProceed1").style.display="none";
    
    document.getElementById("ghoolak1").style.display="block";
    document.getElementById("textIdEnter1").style.display="block";

 }
/*index0-1 end*/
/*index0-2 start*/
function changebg2() {
   document.getElementById("header-changing2").style.backgroundImage = "url(./img/halloween-4.png)";
}
function hideshow2(){
   document.getElementById("moon-icon2").style.display="none";
   document.getElementById("star-icon2").style.display="none";
   document.getElementById("textIdProceed2").style.display="none";
   
   document.getElementById("ghoolak2").style.display="block";
   document.getElementById("textIdEnter2").style.display="block";

}
/*index0-2 end*/

/*index0-3 start*/
function changebg3() {
   document.getElementById("header-changing3").style.backgroundImage = "url(./img/halloween-6.png)";
}
function hideshow3(){
   document.getElementById("moon-icon3").style.display="none";
   document.getElementById("star-icon3").style.display="none";
   document.getElementById("textIdProceed3").style.display="none";
   
   document.getElementById("ghoolak3").style.display="block";
   document.getElementById("textIdEnter3").style.display="block";

}
/*index0-3 end*/

/*index0-4 start*/
function changebg4() {
   document.getElementById("header-changing4").style.backgroundImage = "url(./img/halloween-8.png)";
}
function hideshow4(){
   document.getElementById("moon-icon4").style.display="none";
   document.getElementById("star-icon4").style.display="none";
   document.getElementById("textIdProceed4").style.display="none";
   
   document.getElementById("ghoolak4").style.display="block";
   document.getElementById("textIdEnter4").style.display="block";

}
/*index0-3 end*/








