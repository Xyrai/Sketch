const gridContainer = document.querySelector('#grid-container');
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
let items = document.querySelectorAll('#grid-item');

clearBtn.addEventListener('click', () => {

  items.forEach(item => {
    if (item.style.backgroundColor != "") {
      item.style.backgroundColor = "white";
    }
  });
});

const rainbowBtn = document.querySelector('#random-color-btn');

rainbowBtn.addEventListener('click', () => {

  items.forEach(item => {
    item.addEventListener("mouseenter", event =>
    event.target.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16)
    );
  });
});

