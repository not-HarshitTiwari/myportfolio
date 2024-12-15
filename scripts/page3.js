var xPos = 0;
var yPos = 0;
var flag;
var tl = gsap.timeline();
var rAngle = 0;

function rotateBug() {
  var xOld = xPos;
  var yOld = yPos;
  generateCordinates();
  if (xOld - xPos < yOld - yPos) {
    rAngle = yOld - yPos;
  } else {
    rAngle = xOld - xPos;
  }
  rAngle = rAngle / 12;
}

function generateCordinates() {
  xPos = Math.random() * 1031;
  yPos = Math.random() * (585 - 133) + 133;
}
// (0 133),(1031 585)

function bugController() {
  if (flag === true) {
    rotateBug();
    gsap.to("#bug img", {
      rotation: -rAngle,
      duration: 1,
    });
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
function showMessage(dets) {
  if (dets.clientX > 515) {
    msgLeft.style.display = "inline";
  } else if (dets.clientX < 515) {
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
