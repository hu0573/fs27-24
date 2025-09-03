const porgress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive += 1;
  if (currentActive >= 4) {
    currentActive = 4;
  }
  renderProgress();
});

prev.addEventListener("click", () => {
  currentActive -= 1;
  if (currentActive <= 1) {
    currentActive = 1;
  }
  renderProgress();
});

const renderProgress = () => {
  const percent = (currentActive - 1) / 3;
  porgress.style.width = `${percent * 100}%`;

  for (let step = 1; step <= 4; step++) {
    if (step <= currentActive) {
      circles[step - 1].classList.add("active");
    } else {
      circles[step - 1].classList.remove("active");
    }
  }

  if (currentActive === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (currentActive === 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
};

renderProgress();
