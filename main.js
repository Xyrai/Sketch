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
  let gridSize = parseInt(prompt("Please give a number", 0));

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

// Get random colors
const rainbowBtn = document.querySelector('.rainbow-circle');

rainbowBtn.addEventListener('click', () => {
  let items = document.querySelectorAll('#grid-item');

  items.forEach(item => {
    item.addEventListener("mouseenter", event =>
    event.target.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16)
    );
  });
});
