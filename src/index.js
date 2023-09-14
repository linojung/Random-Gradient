function genGra() {
  let color1 = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
  let color2 = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };

  let from = `rgb(${color1.r},${color1.g},${color1.b})`;
  let to = `rgb(${color2.r},${color2.g},${color2.b})`;

  console.log(from, to);
  let grad = `linear-gradient(to left, ${from},${to})`;
  document.body.style.background = grad;

  let info = document.querySelector(".info");
  let firstColor = info.querySelector("span:first-child");
  let SecondColor = info.querySelector("span:nth-child(2)");
  firstColor.innerText = from;
  SecondColor.innerText = to;
}

const btn = document.querySelector("button");

btn.addEventListener("click", genGra);
