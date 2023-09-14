const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function genGra() {
  const count = colors.length;
  let color1 = colors[Math.floor(Math.random() * count)];
  let color2 = colors[Math.floor(Math.random() * count)];
  let grad = `linear-gradient(to left, ${color1},${color2})`;
  document.body.style.background = grad;

  let info = document.querySelector(".info");
  let firstColor = info.querySelector("span:first-child");
  let SecondColor = info.querySelector("span:nth-child(2)");
  firstColor.innerText = color1;
  SecondColor.innerText = color2;
}

const btn = document.querySelector("button");

btn.addEventListener("click", genGra);
