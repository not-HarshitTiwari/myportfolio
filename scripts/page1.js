var msgs = [
  "I am a passionate and dedicated software engineer with a keen eye for detail. My creativity shines through in my work as I create visually appealing and user-friendly interfaces. I am always eager to learn and improve my skills, so feel free to reach out if you're interested in collaborating on a project or simply discussing your interests.",
  "I have a strong background in information technology and a strong interest in the field of web development and cybersecurity. I am currently looking for a job where I can learn new technologies and make new connections.",
  "In my free time, I enjoy playing soccer, cooking, reading, and exploring the city. I also love to travel and visit new places.",
  "I am currently available for freelance work or consulting. If you're interested in working together, please don't hesitate to reach out.",
];

function addSpan() {
  var string = "";
  msgs.forEach((msg, index) => {
    msg.split("").map((letter) => {
      string += `<span>${letter}</span>`;
    });
    document.getElementById("msg").innerHTML += `<p class="msgs">${string}</p>`;
    string = "";
  });
}

function typewriter() {
  gsap.from("#msg p span", {
    opacity: 0,
    stagger: 0.05,
    duration: 0.01,
  });
}

function mainProfileAnimation() {
  gsap.to("#profileMain", {
    left: "9%",
    width: "30vw",
    height: "30vw",
    borderRadius: "50%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#page1",
      start: "top -6%",
      end: "top -10%",
      pin: true,
      scrub: 0.5,
    }
  });
}

typewriter();
addSpan();
mainProfileAnimation();