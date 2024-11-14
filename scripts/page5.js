function titleAnimation(){
  gsap.from("#page5>p", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: "#page5>p",
      start: "top 85%",
      end: "top 85%",
      scrub: 1,
    },
  });

  gsap.to("#page5>p>span", {
    textDecoration: "red line-through",
    scrollTrigger: {
      scroller: "body",
      trigger: "#page5>p",
      start: "top 70%",
      end: "top 70%",
      scrub: 0.01,
    },
  });

  gsap.to("#hfSpan", {
    y: -50,
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: "#page5>p",
      start: "top 60%",
      end: "top 50%",
      scrub: 0.01,
    },
  });

  gsap.to("#forcedSpan", {
    x: 270,
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: "#page5>p",
      start: "top 50%",
      end: "top 40%",
      scrub: 0.01,
    },
  });

  
}

titleAnimation();

gsap.from(".testimonial",{
  opacity: 0,
  scale: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#testimonials",
    start: "top 60%",
    end: "top 0%",
    scrub: true,
  },
});