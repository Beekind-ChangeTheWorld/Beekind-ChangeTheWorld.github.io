


function fadeOut(el, color) {
    var opacity = 1; // Initial opacity
    var interval = setInterval(function() {
       if (opacity > 0) {
          opacity -= 0.012;
          let backStr = "rgba("+color+", "+ opacity +")";
          el.style.backgroundColor = backStr;
       } else {
          clearInterval(interval); // Stop the interval when opacity reaches 0
       }
    }, 25);
 }

 function highlight(id, color){
    const box = document.getElementById(id);
    box.style.backgroundColor = "rgba("+color+", 1)";

    fadeOut(box, color);
}


// ---------------------------------- highlight 2

function fadeTo(el) {
   nums = [240, 238.8, 194];
   var interval = setInterval(function() {
      if (nums[0] > 168) {

         //scrolling
         if(nums[0] == 200){
            //scroll up a bit
            window.scrollBy(0, -10);
         }
         
         //d = 72
         nums[0] --;
         nums[1] -= 0.4; // 238.8 -> 210 // 28.8
         nums[2] -= 1.5; // 194 -> 86 // 108

         let backStr = "rgb(255, "+nums[1]+", "+nums[2]+")";
         el.style.backgroundColor = backStr;
      } else {
         clearInterval(interval); // Stop the interval
      }
   }, 25);
}

function highlight_2(id){
   const box = document.getElementById(id);
   box.style.backgroundColor = "rgb(240, 240, 240)";

   fadeTo(box);
}

