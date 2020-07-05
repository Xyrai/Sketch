const gridContainer = document.querySelector('#grid');
const root = document.querySelector(':root');

const numColumns = getComputedStyle(root).getPropertyValue('--numberOfColumns');
const numRows = getComputedStyle(root).getPropertyValue('--numberOfRows');

for (let i = 0; i < numColumns * numRows; i++) {
  const gridItem = document.createElement('div');
  gridItem.id = 'grid-item';
  gridItem.addEventListener("mouseenter", event =>
  event.target.style.backgroundColor = "black"
  );
  gridContainer.append(gridItem);
}

const clearBtn = document.querySelector('#clear-btn');

// Clear grid 
clearBtn.addEventListener('click', () => {
  let items = document.querySelectorAll('#grid-item');

  items.forEach(item => {
    item.addEventListener("mouseenter", event =>
    event.target.style.backgroundColor = "black"
    );

    if (item.style.backgroundColor != "") {
      item.style.backgroundColor = "white";
    }
  });
});

// Change grid
const editGridBtn = document.querySelector('#edit-grid-btn');

editGridBtn.addEventListener('click', () => {
  let gridSize = parseInt(prompt("Please give a number between 1 and 200", 1));

  if (!gridSize) {
    return;
  }

  if (gridSize < 1 || gridSize > 200) {
    return alert("Try again...");
  }

  gridContainer.innerHTML = "";
  document.documentElement.style.setProperty('--numberOfColumns', gridSize);
  document.documentElement.style.setProperty('--numberOfRows', gridSize);

  const newnumColumns = getComputedStyle(root).getPropertyValue('--numberOfColumns');
  const newnumRows = getComputedStyle(root).getPropertyValue('--numberOfRows');

  for (let i = 0; i < newnumColumns * newnumRows; i++) {
    const gridItem = document.createElement('div');
    gridItem.id = 'grid-item';
    gridItem.addEventListener("mouseenter", event =>
    event.target.style.backgroundColor = "black"
    );
    gridContainer.append(gridItem);
  }
});

// Function to change the color you draw with
let changeDrawingColor = e => {
  let items = document.querySelectorAll('#grid-item');
  let classColor = e.srcElement.className;

  // TODO: Find a way to get the background color of the selected target,
  // to get rid of this switch statement
  switch(classColor) {
    case "black-circle":
      drawColor = "#000";
      break;
    case "blue-circle":
      drawColor = "#21B5C7";
      break;
    case "red-circle":
      drawColor = "#AA1E1E";
      break;
    case "yellow-circle":
      drawColor = "#DED22C";
      break;
    case "green-circle":
      drawColor = "#17A72F";
      break;
    case "orange-circle":
      drawColor = "#FF7010";
      break;
    case "pink-circle":
      drawColor = "#E616D1";
      break;
    case "rainbow-circle":
      drawColor = "rainbow";
      break;
  }

  items.forEach(item => {
    item.addEventListener("mouseenter", event => {
      console.log(drawColor)

      if (drawColor == "rainbow") {
        console.log(drawColor)
        event.target.style.backgroundColor =  "#"+((1<<24)*Math.random()|0).toString(16);
      } else {
        event.target.style.backgroundColor = drawColor
      }
    });
  });
};

// Set pencil color change on color click
document.querySelector('.black-circle').onclick = changeDrawingColor;
document.querySelector('.blue-circle').onclick = changeDrawingColor;
document.querySelector('.red-circle').onclick = changeDrawingColor;
document.querySelector('.yellow-circle').onclick = changeDrawingColor;
document.querySelector('.green-circle').onclick = changeDrawingColor;
document.querySelector('.orange-circle').onclick = changeDrawingColor;
document.querySelector('.pink-circle').onclick = changeDrawingColor;
document.querySelector('.rainbow-circle').onclick = changeDrawingColor;
