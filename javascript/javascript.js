 function play() {
  const audio = document.getElementById('myAudio');
  const msg1= document.getElementById('msg1');
  const msg2=document.getElementById('msg2');
  const msg3=document.getElementById('msg3');
  

  msg1.style.display="none";
  msg2.style.display="block";
  audio.play().catch(function(error) {
      console.error("Audio playback failed:", error);
  });
};
 function gender(){
  msg2.style.display="none";
  msg3.style.display="block";
 }

const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Randomize snowflake properties
  snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Fall speed
  snowflake.style.opacity = Math.random(); // Random opacity
  snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + "px"; // Random size

  document.body.appendChild(snowflake);

  // Remove snowflake after animation ends
  setTimeout(() => {
      snowflake.remove();
  }, 5000);
};

// Generate snowflakes every 150ms
setInterval(createSnowflake, 150);

var i = 0;
var txt ='I am a Santa Claus Golden Retriever, and I would love to celebrate this Christmas with you! If you are ready, look into my eyes — I am tired of waiting for you... I have brought you a lot of happiness as your Christmas gift.Please touch me and give me life to celebrate and receive your gift!-"Touch the dog"';
var speed = 50;

window.onload= function typeWriter() {
  if (i < txt.length) {
    document.getElementById("msgg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const text = `Hey... 💖! 
Em Chestunnav..?
// inka 2024 lo memories ni carry chestunnava..
ee prapacham lo prathidi oka adbutham la anipistunda andulo ni navvu kuda okati ani marchipoku😅
alalanti adbuthanni chinna chinna badhala valla enduku dhooram chesukuntunav kanu reppa patulo samvatsaram ayipoyindi
kada em nerchukunnav...
// manasuki badhani ichina kshanalu gurtostunnaya... haha...
okkasari recap chesuko ee year lo nv entha happy ga unnav entha badha ni barinchav anni gurtutechuko kani prathidi gurtupettuko...
badha aina santhosham aina manatho chivari varaku undevi ee gnapakale nv eduruchusinatte kotha samvatsaram vasthe emaina maruthunda
ante maradhu maname marchukovali every minute happy moments ni create chesukovali badhalu marchipoyi brathakali adhe jeevitham
jeevitham lo prathi daniki oka ending untundi ee year ending enti telusa ni memories barinchina badhalu chusina prema anthe
gadichina kalam memories ni istundi kani raboye kalam expections ni istundi rendu okalantive chivariki badhane migilchutundi.....
Any How.....
a beautiful gift is waiting for choose one gift box to claim your gift❤`;

  const typewriter = document.getElementById('typewriter');
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50); // Adjust typing speed here
    }
  }

  type();
});

 // GSAP Path Animation
 gsap.to("path", {
  strokeDashoffset: 0, // Fully reveal the paths
  duration: 20, // Duration of the animation
  ease: "power1.inOut",
});

function gf1(){
  const gf=document.querySelector(".mesggg");
  const fmsg = document.getElementById("fmsg");
  const msg2=localStorage.getItem('msg2in');
  const boy=document.getElementById('boy');
  const girl =document.getElementById('girl');
  const gen=localStorage.getItem('gender');
  
  gf.style.display="none";
  fmsg.style.display="block";
  if (gen == "male") {
    boy.style.display = "block";   // Display boy element if gen is male
    girl.style.display = "none";   // Hide girl element
  } else if (gen == "female") {
    girl.style.display = "block";  // Display girl element if gen is female
    boy.style.display = "none";   // Hide boy element
  } else {
    // If gen is neither male nor female (optional case)
    girl.style.display = "block";  // Hide girl element
    boy.style.display = "block";   // Hide boy element
  }


  document.getElementById('output').innerText=msg2;
}

function redirect(){
  var name = document.getElementById('msg2in').value;
  var gen=document.getElementById('gender').value;
  localStorage.setItem('msg2in', name);
  localStorage.setItem('gender', gen);
  window.location.href='./rough.html';
}


