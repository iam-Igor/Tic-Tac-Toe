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

let scoreO = parseInt(localStorage.getItem("scoreO")) || 0;
let scoreX = parseInt(localStorage.getItem("scoreX")) || 0;

const updateScore = function () {
  const xScorer = document.getElementById("scoreX");

  const oScorer = document.getElementById("scoreO");

  xScorer.innerText = scoreX;
  oScorer.innerText = scoreO;
};

updateScore();

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (!cells[i].getAttribute("data-clicked")) {
      if (isThisanX) {
        cells[i].innerText = "X";
      } else {
        cells[i].innerText = "O";
      }
      isThisanX = !isThisanX;

      console.log(isThisanX);

      cells[i].setAttribute("data-clicked", "true");
    } else cells[i].classList.add("wiggle");

    if (
      cells[0].innerText === "X" &&
      cells[1].innerText === "X" &&
      cells[2].innerText === "X"
    ) {
      cells[0].style.backgroundColor = "green";
      cells[1].style.backgroundColor = "green";
      cells[2].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[0].innerText === "O" &&
      cells[1].innerText === "O" &&
      cells[2].innerText === "O"
    ) {
      cells[0].style.backgroundColor = "green";
      cells[1].style.backgroundColor = "green";
      cells[2].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[3].innerText === "X" &&
      cells[4].innerText === "X" &&
      cells[5].innerText === "X"
    ) {
      cells[3].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[5].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[3].innerText === "O" &&
      cells[4].innerText === "O" &&
      cells[5].innerText === "O"
    ) {
      cells[3].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[5].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[6].innerText === "X" &&
      cells[7].innerText === "X" &&
      cells[8].innerText === "X"
    ) {
      cells[6].style.backgroundColor = "green";
      cells[7].style.backgroundColor = "green";
      cells[8].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[6].innerText === "O" &&
      cells[7].innerText === "O" &&
      cells[8].innerText === "O"
    ) {
      cells[6].style.backgroundColor = "green";
      cells[7].style.backgroundColor = "green";
      cells[8].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[0].innerText === "X" &&
      cells[3].innerText === "X" &&
      cells[6].innerText === "X"
    ) {
      cells[0].style.backgroundColor = "green";
      cells[3].style.backgroundColor = "green";
      cells[6].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[0].innerText === "O" &&
      cells[3].innerText === "O" &&
      cells[6].innerText === "O"
    ) {
      cells[0].style.backgroundColor = "green";
      cells[3].style.backgroundColor = "green";
      cells[6].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[1].innerText === "X" &&
      cells[4].innerText === "X" &&
      cells[7].innerText === "X"
    ) {
      cells[1].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[7].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[1].innerText === "O" &&
      cells[4].innerText === "O" &&
      cells[7].innerText === "O"
    ) {
      cells[1].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[7].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[2].innerText === "X" &&
      cells[5].innerText === "X" &&
      cells[8].innerText === "X"
    ) {
      cells[2].style.backgroundColor = "green";
      cells[5].style.backgroundColor = "green";
      cells[8].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[2].innerText === "O" &&
      cells[5].innerText === "O" &&
      cells[8].innerText === "O"
    ) {
      cells[2].style.backgroundColor = "green";
      cells[5].style.backgroundColor = "green";
      cells[8].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[0].innerText === "X" &&
      cells[4].innerText === "X" &&
      cells[8].innerText === "X"
    ) {
      cells[0].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[8].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[0].innerText === "O" &&
      cells[4].innerText === "O" &&
      cells[8].innerText === "O"
    ) {
      cells[0].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[8].style.backgroundColor = "green";
      scoreO++;
    }
    if (
      cells[2].innerText === "X" &&
      cells[4].innerText === "X" &&
      cells[6].innerText === "X"
    ) {
      cells[2].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[6].style.backgroundColor = "green";
      scoreX++;
    } else if (
      cells[2].innerText === "O" &&
      cells[4].innerText === "O" &&
      cells[6].innerText === "O"
    ) {
      cells[2].style.backgroundColor = "green";
      cells[4].style.backgroundColor = "green";
      cells[6].style.backgroundColor = "green";
      scoreO++;
    }
    localStorage.setItem("scoreX", scoreX);
    localStorage.setItem("scoreO", scoreO);

    updateScore();
  });
}

const restart = document.getElementById("restart");

restart.addEventListener("click", function () {
  location.reload();
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  localStorage.removeItem("scoreX", scoreX);
  localStorage.removeItem("scoreO", scoreO);
  location.reload();
});
