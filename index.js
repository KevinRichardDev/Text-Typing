const target = document.getElementById("target");

let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array [wordIndex][0];
}

createLetter();

setInterval(createLetter, 2000);