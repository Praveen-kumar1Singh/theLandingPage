// var crsr = document.querySelector("#cursor")
// var blu = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove", function(dets){
//     crsr.Style.left = dets.x+ "px"
//     crsr.Style.top = dets.y+ "px"
//     // blu.Style.left = dets.x - 150 + "px"
//     // blu.Style.top = dets.y - 150 + "px"
// })







gsap.to("#nav",{
    backgroundColor: "#000",
    duration : 0.5,
    height: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });