function bioAnimation() {
  const roles = document.querySelectorAll("#role h1");
  const descriptions = document.querySelectorAll("#description h1");
  const index = roles.length;

  gsap.set(roles, { y: "100%", opacity: 0 });

  let currentIndex = 0;
  animateText();
  function animateText() {
    const currentRole = roles[currentIndex];
    const nextIndex = (currentIndex + 1) % index;
    const nextRole = roles[nextIndex];

    gsap.to(currentRole, {
      y: -10,
      opacity: 0,
      duration: 1.1,
      ease: "power4.inOut",
    });
    gsap.fromTo(
      nextRole,
      { y: 20, opacity: 0 },
      {
        y: 5,
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.4,
      }
    );
    const currentDescription = descriptions[currentIndex];
    const nextDescription = descriptions[nextIndex];

    gsap.to(currentDescription, {
      y: -10,
      opacity: 0,
      duration: 1.1,
      ease: "power4.inOut",
    });
    gsap.fromTo(
      nextDescription,
      { y: 20, opacity: 0 },
      {
        y: 5,
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.4,
        onComplete: () => {
          currentIndex = nextIndex;
          animateText();
        },
      }
    );
  }
}
bioAnimation();

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
      end: "top -16%",
      pin: true,
      scrub: 0.5,
    }
  });
}
mainProfileAnimation();