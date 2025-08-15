const body = document.querySelector("body");
const color_btns = Array.from(document.querySelectorAll(".box"));

color_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
