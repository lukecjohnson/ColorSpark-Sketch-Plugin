const sketch = require('sketch/dom');
const ui = require('sketch/ui');

function generateColor() {
  const characters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random()*characters.length)];
  }

  return color;
}

export function setNewColor() {
  const selection = sketch.getSelectedDocument().selectedLayers;

  if (!selection.length) {
    ui.message('No items selected')
  }

  const color = generateColor();

  selection.forEach(layer => {
    layer.style.fills = [{
      color: color,
      fill: sketch.Style.FillType.Color
    }];
  });
}

export function setNewGradient() {
  const selection = sketch.getSelectedDocument().selectedLayers;

  if (!selection.length) {
    ui.message('No items selected')
  }

  const direction = ['x', 'y'][Math.round(Math.random())];

  const gradient = {
    gradientType: sketch.Style.GradientType.Linear,
    stops: [
      {
        position: 0,
        color: generateColor()
      },
      {
        position: 1,
        color: generateColor()
      }
    ],
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: direction === 'x' ? 1 : Math.random(),
      y: direction === 'y' ? 1 : Math.random()
    },
  };

  selection.forEach(layer => {
    layer.style.fills = [{
      fill: sketch.Style.FillType.Gradient,
      gradient: gradient
    }];
  });
}
