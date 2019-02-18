export default function(context) {

    var sketch = require('sketch');
    var document = require('sketch/dom').getSelectedDocument();
    var Style = require('sketch/dom').Style;
    var selection = document.selectedLayers;

    var characters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var generatedColor = "#";
    var generatedColor2 = "#";
    var i = 0;

    for (i = 0; i < 6; i++) {
            generatedColor += characters[Math.floor(Math.random()*characters.length)];;
            generatedColor2 += characters[Math.floor(Math.random()*characters.length)];;
    }

    var gradientAngles = [
        {
            fromX: "0",
            fromY: "0.5",
            toX: "1",
            toY: "0.5"
        },
        {
            fromX: "0.5",
            fromY: "0",
            toX: "0.5",
            toY: "1"
        },
        {
            fromX: "0",
            fromY: "0",
            toX: "1",
            toY: "1"
        },
        {
            fromX: "1",
            fromY: "0",
            toX: "0",
            toY: "1"
        },
        {
            fromX: "0.75",
            fromY: "0",
            toX: "0.25",
            toY: "1"
        },
        {
            fromX: "0",
            fromY: "0.25",
            toX: "1",
            toY: "0.75"
        },
        {
            fromX: "0.15",
            fromY: "1",
            toX: "0.85",
            toY: "0"
        },
        {
            fromX: "0",
            fromY: "0.85",
            toX: "1",
            toY: "0.15"
        },
        {
            fromX: "0.4",
            fromY: "1",
            toX: "0.6",
            toY: "0"
        }
    ];

    var generatedAngle = gradientAngles[Math.floor(Math.random()*gradientAngles.length)];

    selection.forEach((layer) => {

        layer.style.fills = [{
            fill: Style.FillType.Gradient,
            gradient: {
              gradientType: Style.GradientType.Linear,
              from: {
                x: generatedAngle.fromX,
                y: generatedAngle.fromY
              },
              to: {
                x: generatedAngle.toX,
                y: generatedAngle.toY
              },
              stops: [{
                position: 0,
                color: generatedColor
              }, {
                position: 1,
                color: generatedColor2
              }]
            }
        }];
    });

}
