/* Selectors */
const buttonSelectors = document.querySelectorAll('[data-selection]')
const gameSelector = document.querySelector('.game')
const standardGrid = grid()
const sliderSelector = document.querySelector('.slider')
const clearBtnSelector = document.querySelector('.clear-button')


/* Generates standard grid */
function grid() {
  for (i = 1; i <= 1024; i++) {
    createSquare()
    gameSelector.setAttribute('style', `grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32, 1fr);`);
  }
}


/* Generates and changes all grid options */
function createSquare() {
  const create = document.createElement('span')
  create.setAttribute('class', 'square')
  gameSelector.appendChild(create)
}

function changeGrid(gridSize) {
  gridArea = gridSize * gridSize
  for (i = 1; i <= gridArea; i++) {
    gameSelector.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`);
    createSquare()
  }
}

function updateGrid() {
  const childs = document.querySelectorAll('span');
  childs.forEach(child => {
    gameSelector.removeChild(child);
  }) 
}

function colorSelector(selected) {
  const squareSelectors = document.querySelectorAll('span')
  squareSelectors.forEach(squareSelector => {
    squareSelector.addEventListener ('mouseover', e => {
      if (selected == 'black') {
        e.target.setAttribute('style', 'background: black');
      }
      else if (selected == 'rgb') {
        e.target.setAttribute('style', 'background: red');
      }
      if (selected == 'eraser') {
        e.target.setAttribute('style', 'background: white');
      }
    }) 
})  
}

/* Event Listeners */
// Select grid sizes //
sliderSelector.addEventListener('click', e => {
  const gridSize = sliderSelector.value
  document.querySelector('.value').innerHTML = gridSize + "x" + gridSize
  updateGrid()
  changeGrid(gridSize)
})  

// Select colors //
buttonSelectors.forEach(buttonSelector => {
  buttonSelector.addEventListener('click', e => { 
    const selected = buttonSelector.dataset.selection
    colorSelector(selected)       
  })
})

// Clear grid //
clearBtnSelector.addEventListener('click', e => {
  const gridSize = sliderSelector.value
  updateGrid()
  changeGrid(gridSize)
})  
