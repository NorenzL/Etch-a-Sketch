const container = document.querySelector(".container");

let size = 16;

function createGrid() {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 1; j <= size; j++) {
      const col = document.createElement("div");
      col.setAttribute("class", "col");
      row.appendChild(col);
    }

    container.appendChild(row);
  }

  const cols = document.querySelectorAll(".col");

  cols.forEach((columns) => {
    const newColSize = 600 / size;

    columns.style.width = `${newColSize}px`;
    columns.style.height = `${newColSize}px`;
  });
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

// Change grid size button
const resize = document.querySelector(".btn");

resize.addEventListener("click", () => {
  do {
    size = prompt("Enter a number for the size of the grid. (2-100).");

    if (size === "") {
      alert("Input a number!");
    } else if (size === null) {
      break;
    } else {
      size = Number(size);

      if (size > 100) {
        alert("Maximum of 100 grid size!");
      } else if (size <= 1) {
        alert("Minimum of 2 grid size!");
      } else if (!Number.isInteger(size)) {
        alert("Not an Integer!");
      }
    }
  } while (!Number.isInteger(size) || size > 100 || size <= 1 || size === "");

  // Removes grid
  if (Number.isInteger(size)) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid();
    createTrail();
  }
});

// Reset button
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  const col = document.querySelectorAll(".col");

  col.forEach((cols) => {
    cols.style.backgroundColor = "rgb(255, 255, 2552)";
  });
});
