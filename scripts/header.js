function page1PictureAnimation() {
  gsap.to("#profile1", {
    y: -860,
    opacity: 0.2,
    scrollTrigger: {
      scroller: "body",
      trigger: "header",
      pin: true,
      start: "top 0%",
      end: "top -2%",
      scrub: 0.5,
    },
  });

  gsap.to("#profile2", {
    y: -860,
    opacity: 0.2,
    scrollTrigger: {
      scroller: "body",
      trigger: "header",
      start: "top -0.1%",
      end: "top -3%",
      scrub: 0.5,
      pin: true,
    },
  });
}
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

function socialHandles() {
  var tl = gsap.timeline({
    repeat: -1,
  });
  tl.from("#socialHandles li", {
    rotationX: 0,
    opacity: 1,
  });
  tl.fromTo(
    "#socialHandles li",
    {
      rotationX: 0,
      opacity: 0,
      duration: 1.2,
      stagger: 1,
      ease: "elastic.inOut(1)",
      yoyo: true,
    },
    {
      rotationX: 360,
      opacity: 1,
      duration: 1.2,
      stagger: 1,
    }
  );
}

function socialHandlesCallback() {
  document.querySelector(".ri-mail-line").addEventListener("click", () => {
    window.open("mailto:harshit54646587@gmail.com", "_blank");
  });
  document.querySelector(".ri-instagram-line").addEventListener("click", () => {
    window.open("https://www.instagram.com/tiwari_._jiii", "_blank");
  });
  document
    .querySelector(".ri-linkedin-box-line")
    .addEventListener("click", () => {
      window.open(
        "https://www.linkedin.com/in/harshit-tiwari-289798235/?original_referer=&originalSubdomain=in",
        "_blank"
      );
    });
  document.querySelector(".ri-github-line").addEventListener("click", () => {
    window.open("https://www.github.com/not-HarshitTiwari", "_blank");
  });
}

page1PictureAnimation();
socialHandles();
greeting();
socialHandlesCallback();