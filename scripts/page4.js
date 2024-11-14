gsap.from("#langHeading h1", {
  opacity: 0,
  y: -20,
  scrollTrigger: {
    scroller: "body",
    trigger: "#langHeading h1",
    start: "top 80%",
    end: "top 80%",
    scrub: 0.5,
  },
});


gsap.to("#langHeading div",{
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: "#page4 h1",
    start: "top 70%",
    end: "top 60%",
    scrub: 0.5,
  }
});

gsap.to("#langs img",{
  opacity:0.5,
  y: 20,
  stagger: 5,
  scrollTrigger: {
    scroller: "body",
    trigger: "#langs img",
    start: "top 85%",
    end: "top 80%",
    scrub: 0.5,
  }
});

gsap.from("#frameworkHeading h1", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    scroller: "body",
    trigger: "#frameworkHeading h1",
    start: "top 80%",
    end: "top 80%",
    scrub: 0.5,
  },
});

gsap.to("#frameworkHeading div", {
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    trigger: "#frameworkHeading div",
    start: "top 70%",
    end: "top 60%",
    scrub: 0.5,
  },
});

gsap.to("#frameworks img", {
  opacity: 0.5,
  y: 20,
  stagger: 3,
  scrollTrigger: {
    scroller: "body",
    trigger: "#frameworks img",
    start: "top 85%",
    end: "top 80%",
    scrub: 0.5,
  }
});


gsap.to("#learnMsg h1",{
  x:-2500,
    scrollTrigger: {
      scroller: "body",
      trigger: "#page4",
      start: "top 0%",
      end: "top -130%",
      scrub: 0.5,
      pin: true,
    },
});