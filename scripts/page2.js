gsap.from("#escr1",{
  x:-1000,
  y:-10,
  scrollTrigger: {
    scroller: "body",
    trigger: "#escr1",
    start: "top 65%",
    end: "top 40%",
    scrub: 1
  }
});

gsap.from("#escr2", {
  x: 1000,
  y: 10,
  scrollTrigger: {
    scroller: "body",
    trigger: "#escr2",
    start: "top 65%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from("#escr3", {
  x: -1000,
  y: -10,
  scrollTrigger: {
    scroller: "body",
    trigger: "#escr3",
    start: "top 70%",
    end: "top 45%",
    scrub: 1,
  },
});