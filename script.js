const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var timeout;

// function circleSkew() {
//   window.addEventListener("mousemove", function () {
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove", function (dets) {
//       clearTimeout(timeout);
//       xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//       yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

//       xprev = dets.clientX;
//       yprev = dets.clientY;

//       circleMouseFollower(xscale, yscale);

//       timeout = setTimeout(() => {
//         document.querySelector(
//           "#minicircle"
//         ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
//       }, 100);
//     });
//   });
// }

// circleSkew();

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

circleMouseFollower();

function heroAnimation() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
  })
    .to(".belem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: "-5",
      opacity: 0,
      duration: 1.5,
      delay: -1.1,
      ease: Expo.easeInOut,
    });
}

heroAnimation();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mousemove", function (details) {
    // console.log(elem.getBoundingClientRect());
    var diff = details.clientY - elem.getBoundingClientRect().top;
    diffrot = details.clientX - rotate;
    rotate = details.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.4),
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.2,
    });
  });
});
