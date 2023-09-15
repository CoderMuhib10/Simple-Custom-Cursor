var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");
var title=document.querySelector("h1")
main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

title.addEventListener("mousemove", function () {
    crsr.style.scale = 3;
    crsr.style.outline = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

title.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.outline = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  title.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.outline = "0px solid white";
    crsr.style.backgroundColor = "white";
  });
