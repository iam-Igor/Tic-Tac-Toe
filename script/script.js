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
