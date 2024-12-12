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
