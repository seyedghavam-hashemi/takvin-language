const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('image-animation');
    }
  });
});

const viewbox = document.querySelectorAll('.image');
viewbox.forEach(image => {
  observer.observe(image);
});


function flip1() {
       document.getElementById('card1').classList.toggle('is-flipped');
        }
function flip2() {
       document.getElementById('card2').classList.toggle('is-flipped');
        }
  
function flip3() {
       document.getElementById('card3').classList.toggle('is-flipped');
        }
function flip4() {
        document.getElementById('card4').classList.toggle('is-flipped');
        }
          






/*racoon function*/
function gemBlue(){
  document.getElementById('pickImageButton').style.display="none";
  document.getElementById('gem-blue').style.display="block";

}
function racoon1(){
  document.getElementById('racoon-1').style.display="none";
  document.getElementById('racoon-2').style.display="block";

}



/*totem function*/
function totemkey(){
  document.getElementById('totem-k-1').style.display="none";
  document.getElementById('totem-k-2').style.display="block";

}
function totem1(){
  document.getElementById('totem-1').style.display="none";
  document.getElementById('totem-2').style.display="block";

}
/*owl function*/
function dragonSun(){
  document.getElementById('dragon-button').style.visibility="hidden";
  /*document.getElementById('gem-blue').style.display="block";*/

}
function dragon1(){
  document.getElementById('dragon-1').style.display="none";
  document.getElementById('dragon-2').style.display="block";

}
/*snow function*/
function snowkey(){
  document.getElementById('snow-button').style.visibility="hidden";
  /*document.getElementById('gem-blue').style.display="block";*/

}
function snow1(){
  document.getElementById('snow-1').style.display="none";
  document.getElementById('snow-2').style.display="block";

}

/*owl-eagle function*/
function owleaglekey(){

  document.getElementById('oeKeyId').style.display="none";
   
  document.getElementById('oeKeyId2').style.display="block";

}

document.getElementById('oeKeyId').addEventListener('click', function() {
  setTimeout(owleaglekey, 1200)
})
function owleagle1(){
  document.getElementById('owl-eagle-1').style.display="none";
  document.getElementById('owl-eagle-2').style.display="block";

}





/*Random header*/
function divrandom() {
  var divtags=$(".header-changing");
  if(divtags.length) {
      var display=Math.floor(Math.random() * divtags.length);
      for(var i=0; i<divtags.length; i++){
          if(i!==display){
              $(divtags[i]).hide();

          }
      }
  }
}
  /*owl eagle key Circulation*/
  $('.oek').click(function() {
    $('.oek').animate(
      { deg: 90 },
      {
        duration: 1000,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });

/*PANDA*/


  

  

/*
var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});



*/