function greeting() {
  var hours = new Date().getHours();
  var ele = document.getElementById("greeting");
  var text = "";
  ele.innerHTML = text;
  if (hours >= 5 && hours < 12) {
    "Good Morning".split("").map((elem) => {
      text += `<span>${elem}</span>`;
    });
  } else if (hours >= 12 && hours < 16) {
    "Good Afternoon".split("").map((elem) => {
      text += `<span>${elem}</span>`;
    });
  } else if (hours >= 16 && hours < 20) {
    "Good Evening".split("").map((elem) => {
      text += `<span>${elem}</span>`;
    });
  } else {
    "You should sleep now!".split("").map((elem, index) => {
      text += `<span>${elem}</span>`;
    });
  }
  ele.innerHTML = text;
  gsap.from("#greeting span", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "elastic.inOut(1)",
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
  });
}
greeting();

function socialHandles() {
  var tl = gsap.timeline({
    repeat: -1,
  });
  tl.from("#socialHandles li", {
    rotationX: 0,
    opacity: 1,
  });
  tl.fromTo("#socialHandles li",{
    rotationX: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 1,
    ease: "elastic.inOut(1)",
    yoyo: true,
  }, {
    rotationX: 360,
    opacity: 1,
    duration: 1.2,
    stagger: 1,
  });
}
socialHandles();
