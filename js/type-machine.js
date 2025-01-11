function interpretation1(){
    document.getElementById('button-fortune-interpretation4').style.display="none";
    document.getElementById('image-fortune-interpretation2').style.display="block";
  }
  
  function changePage(){
    document.getElementById('header-changing1').style.display="none";
    document.getElementById('header-changing2').style.display="none";
    document.getElementById('header-changing3').style.display="none";
    document.getElementById('header-changing4').style.display="none";
    document.getElementById('header-changing5').style.display="none";    
    document.getElementById('panda-div').style.display="none";

    document.getElementById('section-card').style.display="none";
    document.getElementById('section-fortune').style.margin="30px 0px 30px 0px";
  
  }

  const button1 = document.getElementById('button-fortune-interpretation4');
          const divs = document.querySelectorAll('.div-container-fortune');
  
          button1.addEventListener('click', () => {
              // Hide all divs
              
              divs.forEach(div => div.classList.remove('active'));
  
              // Get a random div
              const randomIndex = Math.floor(Math.random() * divs.length);
              const randomDiv = divs[randomIndex];
  
              // Show the random div
              randomDiv.classList.add('active');
              myGreeting();
            });
          function myGreeting() {
    document.getElementById("fortune-section").style.display = "block";
  
    //document.getElementsById("fortuneText").style.display = "block";
  };
  