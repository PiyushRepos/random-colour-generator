const btn = document.querySelector(".btn");
const colorBox = document.querySelector(".colorBox");
const colorCode = document.querySelector(".colorCode");

btn.addEventListener("click", setRandomColor);

function setRandomColor() {
  const red = parseInt(Math.floor(Math.random() * 255) + 1);
  const green = parseInt(Math.floor(Math.random() * 255) + 1);
  const blue = parseInt(Math.floor(Math.random() * 255) + 1);

  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  colorCode.innerHTML = rgbToHex(red, green, blue);
}

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex(red, green, blue) {
  return (
    "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue)
  );
}

colorCode.addEventListener("click", function () {
  navigator.clipboard.writeText(colorCode.innerHTML);
});
