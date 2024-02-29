const container = document.querySelector(".container");

let size = 16;

for (let i = 1; i <= size; i++) {
  const row = document.createElement("div");
  const gridClass = document.createAttribute("class");
  gridClass.value = "grid";

  row.setAttributeNode(gridClass);

  for (let j = 1; j <= size; j++) {
    const col = document.createElement("div");
    const colClass = document.createAttribute("class");
    colClass.value = "col";
    col.setAttributeNode(colClass);
    row.appendChild(col);
  }

  container.appendChild(row);
}
