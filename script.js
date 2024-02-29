const container = document.querySelector(".container");

let size = 16;

function createGrid() {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    const gridClass = document.createAttribute("class");
    gridClass.value = "grid";

    row.setAttributeNode(gridClass);

    for (let j = 1; j <= size; j++) {
      const col = document.createElement("div");
      col.setAttribute("class", "col");
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

createGrid();
createTrail();

function createTrail() {
  const col = document.querySelectorAll(".col");

  col.forEach((cols) => {
    cols.addEventListener("mouseenter", () => {
      let randomRed = Math.floor(Math.random() * 256);
      let randomGreen = Math.floor(Math.random() * 256);
      let randomBlue = Math.floor(Math.random() * 256);

      cols.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });
  });
}

const resetBtn = document.querySelector(".btn");

resetBtn.addEventListener("click", () => {
  size = Number(
    prompt("Enter a number for the size of the grid. Maximum of 100.")
  );

  // Removes grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid();
  createTrail();
});
