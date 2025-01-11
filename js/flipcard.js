

/*card-1 code*/ 
  const images1 = [ 
      'img/1.png', 
      'img/2.png', 
      'img/3.png', 
      'img/4.png',
      'img/5.png',
      'img/6.png',
      // Add more image URLs as needed 
  ]; 

  function imageDisplay1() { 
      const randomIndex1 = Math.floor(Math.random() * images1.length); 
      const selectedImage1 = images1[randomIndex1]; 
      document.getElementById('randomImage1').src = selectedImage1; 
  };


/*card-2 code */
const images2 = [ 
    'img/7.png', 
    'img/8.png', 
    'img/9.png', 
    'img/10.png',
    'img/11.png',
    'img/12.png',
    // Add more image URLs as needed 
]; 

function imageDisplay2() { 
    const randomIndex2 = Math.floor(Math.random() * images2.length); 
    const selectedImage2 = images2[randomIndex2]; 
    document.getElementById('randomImage2').src = selectedImage2; 
};







/*card-3 code*/ 
const images3 = [ 
    'img/13.png', 
    'img/14.png', 
    'img/15.png', 
    'img/16.png',
    'img/17.png',
    'img/18.png',
    // Add more image URLs as needed 
]; 

function imageDisplay3() { 
    const randomIndex3 = Math.floor(Math.random() * images3.length); 
    const selectedImage3 = images3[randomIndex3]; 
    document.getElementById('randomImage3').src = selectedImage3; 
};


/*card-4 code*/ 
const images4 = [ 
    'img/19.png', 
    'img/20.png', 
    'img/21.png', 
    'img/22.png',
    'img/23.png',
    'img/24.png',
    // Add more image URLs as needed 
]; 

function imageDisplay4() { 
    const randomIndex4 = Math.floor(Math.random() * images4.length); 
    const selectedImage4 = images4[randomIndex4]; 
    document.getElementById('randomImage4').src = selectedImage4; 
};

function displayInterpretation(){
    document.getElementById('section-fortune').style.display = "block"; 

    
}