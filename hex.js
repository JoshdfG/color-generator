// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomColor()];
//   }
//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomColor() {
//   return Math.floor(Math.random() * hex.length);
// }

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const colorGenerator = () => {
  // the to string method generates numbers from 0-9 and letters from A-F the substring method reduces the output to 6 and the math.random gives random numbers and letters
  const randomColor = Math.random().toString(16).substring(2, 8);
  const hex = "#";
  const hexColor = `${hex + randomColor}`;
  color.innerHTML = hexColor;
  document.body.style.backgroundColor = hexColor;
};
btn.addEventListener("click", colorGenerator);

// to generate a random color on page load call the function
// colorGenerator();
