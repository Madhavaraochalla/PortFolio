var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var string = " CHALLA MADHAVARAO";
var str = string.split("");
var el = document.getElementById("str");

(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})();

const lines = [
  ["DevOps Engineer...", "@Prokopto..."],
  
];

const line1Element = document.getElementById('line1');
const line2Element = document.getElementById('line2');

let pairIndex = 0;
let charIndex = 0;
let typingDirection = 1; // 1 for typing, -1 for erasing

const TYPE_DELAY = 100; // Delay between typing each letter
const LINE_DELAY = 2000; // Delay before switching to the next pair

function updateText() {
  const [line1, line2] = lines[pairIndex];

  if (typingDirection === 1) {
    // Typing effect
    line1Element.textContent = line1.substring(0, charIndex);
    line2Element.textContent = line2.substring(0, charIndex);

    charIndex++;
    if (charIndex > Math.max(line1.length, line2.length)) {
      typingDirection = -1; // Switch to erasing
      setTimeout(updateText, LINE_DELAY);
      return;
    }
  } else {
    // Erasing effect
    line1Element.textContent = line1.substring(0, charIndex);
    line2Element.textContent = line2.substring(0, charIndex);

    charIndex--;
    if (charIndex < 0) {
      typingDirection = 1; // Switch to typing the next pair
      pairIndex = (pairIndex + 1) % lines.length; // Loop through pairs
    }
  }
  setTimeout(updateText, TYPE_DELAY);
}

updateText(); // Start the typing effect

// 1st project  
document.getElementById("depbus").addEventListener("click", function () {
  window.open(
    "https://github.com/Madhavaraochalla/End-To-End_Project.git",
    "_blank"
  );
});
document.getElementById("gitbus").addEventListener("click", function () {
  window.open(
    "https://github.com/Madhavaraochalla/End-To-End_Project.git",
    "_blank"
  );
});


//2nd prject 
document.getElementById("gitindiamart").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla/Kubernetes-project.git", "_blank");
});

document.getElementById("indmartdep").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla/Kubernetes-project.git", "_blank");
});

//3rd prject github and deploy link
document.getElementById("depshopnow").addEventListener("click", function () {
  window.open(
    "https://madhavarao-portfolio.netlify.app/",
    "_blank"
  );
});
document.getElementById("gitshopnow").addEventListener("click", function () {
  window.open(
    "https://github.com/Madhavaraochalla/HTML-Project.git",
    "_blank"
  );
});

//4th prject github and deploy link

document.getElementById("gitweather").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla", "_blank");
});
document.getElementById("depweather").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla", "_blank");
});

// linkedin and github
document.getElementById("linkedin").addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/madhavaraochalla",
    "_blank"
  );
});
document.getElementById("gitprofile").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla", "_blank");
});
// Instagram 
document.getElementById("instagram").addEventListener("click", function () {
  window.open("https://www.instagram.com/naturelover4583/", "_blank");
});







