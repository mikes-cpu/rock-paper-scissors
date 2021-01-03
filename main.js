const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const title = document.createElement("h1");
title.innerText = "Rock, Paper, Scissors";
container.appendChild(title);

// const userName = document.createElement("p");
// userName.innerText = "Username";
// userName.classList.add("userName");
// container.appendChild(userName);

const userOptionsContainer = document.createElement("div");
userOptionsContainer.classList.add("userOptionsContainer");
container.appendChild(userOptionsContainer);

const rockButton = document.createElement("button");
rockButton.innerHTML = `<i class="far fa-hand-rock"></i>`;
rockButton.classList.add("gameButton", "rockButton");
userOptionsContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.innerHTML = `<i class="far fa-hand-paper"></i>`;
paperButton.classList.add("gameButton", "paperButton");
userOptionsContainer.appendChild(paperButton);

const scissorButton = document.createElement("button");
scissorButton.innerHTML = `<i class="far fa-hand-scissors"></i>`;
scissorButton.classList.add("gameButton", "scissorButton");
userOptionsContainer.appendChild(scissorButton);

const vsContainer = document.createElement("div");
container.appendChild(vsContainer);

const vsText = document.createElement("h2");
vsText.innerText = "VS";
vsText.classList.add("vsText");
vsContainer.appendChild(vsText);

// const computerName = document.createElement("p");
// computerName.innerText = "Computer";
// computerName.classList.add("computerName");
// container.appendChild(computerName);

const rockComputerIcon = document.createElement("span");
rockComputerIcon.innerHTML = `<i class="far fa-hand-rock"></i>`;
rockComputerIcon.classList.add("computerIcon", "rockComputerIcon");
container.appendChild(rockComputerIcon);

const paperComputerIcon = document.createElement("span");
paperComputerIcon.innerHTML = `<i class="far fa-hand-paper"></i>`;
paperComputerIcon.classList.add("computerIcon", "paperComputerIcon");
container.appendChild(paperComputerIcon);

const scissorsComputerIcon = document.createElement("span");
scissorsComputerIcon.innerHTML = `<i class="far fa-hand-scissors"></i>`;
scissorsComputerIcon.classList.add("computerIcon", "scissorsComputerIcon");
container.appendChild(scissorsComputerIcon);

const rockUserIcon = document.createElement("span");
rockUserIcon.innerHTML = `<i class="far fa-hand-rock"></i>`;
rockUserIcon.classList.add("userIcon", "rock");

const rockClicked = () => {
  rockButton.remove();
  paperButton.remove();
  scissorButton.remove();

  userOptionsContainer.appendChild(rockUserIcon);

  const rockText = document.createElement("p");
  rockText.innerText = "ROCK";
  rockText.classList.add("optionText");
  userOptionsContainer.appendChild(rockText);
  computerMove(selectRandom.html, selectRandom.type);
  displayWinner(rockUserIcon.classList[1]);

  // console.log(rockUserIcon.classList[1]);
};

const paperUserIcon = document.createElement("span");
paperUserIcon.innerHTML = `<i class="far fa-hand-paper"></i>`;
paperUserIcon.classList.add("userIcon", "paper");

const paperClicked = () => {
  rockButton.remove();
  paperButton.remove();
  scissorButton.remove();

  userOptionsContainer.appendChild(paperUserIcon);

  const paperText = document.createElement("p");
  paperText.innerText = "PAPER";
  paperText.classList.add("optionText");
  userOptionsContainer.appendChild(paperText);
  computerMove(selectRandom.html, selectRandom.type);
  displayWinner(paperUserIcon.classList[1]);

  // console.log(paperUserIcon.classList[1]);
};

const scissorUserIcon = document.createElement("span");
scissorUserIcon.innerHTML = `<i class="far fa-hand-scissors"></i>`;
scissorUserIcon.classList.add("userIcon", "scissors");

const scissorClicked = () => {
  rockButton.remove();
  paperButton.remove();
  scissorButton.remove();

  userOptionsContainer.appendChild(scissorUserIcon);

  const scissorText = document.createElement("p");
  scissorText.innerText = "SCISSORS";
  scissorText.classList.add("optionText");
  userOptionsContainer.appendChild(scissorText);
  computerMove(selectRandom.html, selectRandom.type);
  displayWinner(scissorUserIcon.classList[1]);

  // console.log(scissorUserIcon.classList[1]);
};

const computerChoice = document.createElement("span");
const computerMove = (html, type) => {
  rockComputerIcon.remove();
  paperComputerIcon.remove();
  scissorsComputerIcon.remove();

  computerChoice.innerHTML = html;
  computerChoice.classList.add("computerIcon", type);
  container.appendChild(computerChoice);

  // console.log(computerChoice.classList[1]);
};

rockButton.addEventListener("click", rockClicked);
paperButton.addEventListener("click", paperClicked);
scissorButton.addEventListener("click", scissorClicked);

const computerOptions = [
  {
    index: 1,
    type: "rock",
    html: `<i class="far fa-hand-rock"></i>`,
  },
  {
    index: 2,
    type: "paper",
    html: `<i class="far fa-hand-paper"></i>`,
  },
  {
    index: 3,
    type: "scissors",
    html: `<i class="far fa-hand-scissors"></i>`,
  },
];

const selectRandom =
  computerOptions[Math.floor(Math.random() * computerOptions.length)];

const displayWinner = (handDecision) => {
  if (handDecision === computerChoice.classList[1]) {
    const drawText = document.createElement("p");
    drawText.innerText = "It was a draw";
    drawText.classList.add("resultText", "drawText");
    container.appendChild(drawText);
  }
  if (handDecision === "rock" && computerChoice.classList[1] === "scissors") {
    const rockWinText = document.createElement("p");
    rockWinText.innerText = "You win this round";
    rockWinText.classList.add("resultText", "rockWinText");
    container.appendChild(rockWinText);
  }
  if (handDecision === "rock" && computerChoice.classList[1] === "paper") {
    const rockLooseText = document.createElement("p");
    rockLooseText.innerText = "You loose this round";
    rockLooseText.classList.add("resultText", "rockLooseText");
    container.appendChild(rockLooseText);
  }
  if (handDecision === "paper" && computerChoice.classList[1] === "rock") {
    const paperWinText = document.createElement("p");
    paperWinText.innerText = "You win this round";
    paperWinText.classList.add("resultText", "paperWinText");
    container.appendChild(paperWinText);
  }
  if (handDecision === "paper" && computerChoice.classList[1] === "scissors") {
    const paperLooseText = document.createElement("p");
    paperLooseText.innerText = "You loose this round";
    paperLooseText.classList.add("resultText", "paperLooseText");
    container.appendChild(paperLooseText);
  }
  if (handDecision === "scissors" && computerChoice.classList[1] === "paper") {
    const scissorWinText = document.createElement("p");
    scissorWinText.innerText = "You win this round";
    scissorWinText.classList.add("resultText", "scissorWinText");
    container.appendChild(scissorWinText);
  }
  if (handDecision === "scissors" && computerChoice.classList[1] === "rock") {
    const scissorLooseText = document.createElement("p");
    scissorLooseText.innerText = "You loose this round";
    scissorLooseText.classList.add("resultText", "scissorLooseText");
    container.appendChild(scissorLooseText);
  }
};
