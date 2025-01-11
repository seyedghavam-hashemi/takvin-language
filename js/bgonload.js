const bgs = [ 
    'img/bg1.jpg', 
    'img/bg2.png', 
    'img/bg3.png', 
    'img/bg4.jpg',
    'img/bg5.jpg',
    'img/bg6.jpg',
    'img/bg7.jpg',
    'img/bg8.jpg',
    'img/bg9.jpg',
    'img/bg10.png',
    'img/bg11.png',

    // Add more image URLs as needed 
]; 

function bgDisplay() { 
    const randomIndexbg = Math.floor(Math.random() * bgs.length); 
    const selectedImagebg = bgs[randomIndexbg]; 
    var bg= document.getElementsByTagName("BODY");
    bg.style.background.image="url('selectedImagebg')"; 
};