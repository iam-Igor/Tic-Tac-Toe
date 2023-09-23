const gameContainer = document.getElementById("game-container");

const createTableGame = function () {
  for (let i = 0; i < 9; i++) {
    const divgames = document.createElement("div");
    divgames.classList.add("cells");
    gameContainer.appendChild(divgames);
  }
};
createTableGame();

const cells = document.getElementsByClassName("cells");

const combinations = [
  [0, 1, 2], //row
  [3, 4, 5], //row
  [6, 7, 8], //row
  [0, 3, 6], //column
  [1, 4, 7], //column
  [2, 5, 8], //column
  [0, 4, 8], //diagonal
  [2, 4, 6], //diagonal
];

let isThisanX = true;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (isThisanX) {
      cells[i].innerText = "X";
    } else {
      cells[i].innerText = "O";
    }
    isThisanX = !isThisanX;
  });
}
