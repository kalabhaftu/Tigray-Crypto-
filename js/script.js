document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Welcome to Tigray Crypto 🌱", "Your trusted crypto news source 🌱"];
    let textIndex = 0;
    let charIndex = 0;
  
    function typeEffect() {
      if (charIndex < textArray[textIndex].length) {
        document.getElementById("autoTypeText").innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(() => {
          document.getElementById("autoTypeText").innerHTML = "";
          charIndex = 0;
          textIndex = (textIndex + 1) % textArray.length;
          typeEffect();
        }, 2000);
      }
    }
    typeEffect();
  });

  /*what i need is when 
@media (min-width: 800px) reachs the web to change it's structure look what to do at the same place the image by right the fuature sectio by left side at th esame position the footer with full width at th ebottom and set limited size to the image


Show drafts


*/