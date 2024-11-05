var xPos;
var yPos;
var flag;
var tl = gsap.timeline();

function generateCordinates() {
  xPos = Math.random() * 1031;
  yPos = Math.random() * (585 - 133) + 133;
}
// 0 133,1031 585

function bugController() {
  if (flag === true) {
    generateCordinates();
    tl.to("#bug", {
      x: xPos,
      y: yPos,
      duration: 2,
    });
    setTimeout(bugController, 3000);
  }
}

document.getElementById("page2").addEventListener("mouseover", () => {
  flag = true;
  bugController();
});

document.getElementById("bug").addEventListener("mouseenter", (dets) => {
  flag = false;
  tl.pause();
  tl.set("#bug", {
    x: dets.clientX - 50,
    y: dets.clientY - 50,
  });
});
document.getElementById("bug").addEventListener("mouseleave", () => {
  flag = true;
  tl.play();
  bugController();
});
