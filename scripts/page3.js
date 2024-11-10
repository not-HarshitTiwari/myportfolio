var xPos;
var yPos;
var flag;
var tl = gsap.timeline();

function generateCordinates() {
  xPos = Math.random() * 1031;
  yPos = Math.random() * (585 - 133) + 133;
}
// (0 133),(1031 585)

function bugController() {
  if (flag === true) {
    generateCordinates();
    tl.to("#bugDiv", {
      x: xPos,
      y: yPos,
      duration: 2,
    });
    setTimeout(bugController, 3000);
  }
}

var msgLeft = document.querySelector("#leftCloud");
var msgRight = document.querySelector("#rightCloud");
function showMessage(dets){
  if(dets.clientX>515){
    msgLeft.style.display = "inline";
  }
  else if(dets.clientX<515){
    msgRight.style.display = "inline";
  }
}

document.getElementById("page2").addEventListener("mouseover", () => {
  flag = true;
  bugController();
});

var bug = document.getElementById("bug");
bug.addEventListener("mouseenter", (dets) => {
  flag = false;
  tl.pause();
  showMessage(dets);
  tl.set("#bugDiv", {
    x: dets.clientX - 50,
    y: dets.clientY - 50,
  });
});
bug.addEventListener("mouseleave", () => {
  flag = true;
  tl.play();
  msgLeft.style.display = "none";
  msgRight.style.display = "none";
  bugController();
});
