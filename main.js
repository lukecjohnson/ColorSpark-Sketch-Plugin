const sketch = require('sketch/dom')

function generateColor() {
  const characters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random()*characters.length)];
  }

  return color;
}

export function setNewColor() {
  const selection = sketch.getSelectedDocument().selectedLayers;

  const color = generateColor();
  console.log(color);

  selection.forEach(layer => {
    layer.style.fills = [{
      color: color,
      fill: sketch.Style.FillType.Color
    }];
  });
}

export function setNewGradient() {
  const selection = sketch.getSelectedDocument().selectedLayers;

  const direction = Math.round(Math.random()) ? 'x' : 'y';

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
