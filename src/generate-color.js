export default function(context) {

    var sketch = require('sketch');
    var document = require('sketch/dom').getSelectedDocument();
    var Style = require('sketch/dom').Style;
    var selection = document.selectedLayers;

    var characters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var generatedColor = "#";
    var i = 0;

    for (i = 0; i < 6; i++) {
            generatedColor += characters[Math.floor(Math.random()*characters.length)];;
    }

    selection.forEach(function (layer) {
      layer.style.fills = [{
        color: generatedColor,
        fill: Style.FillType.Color
      }];
    });

}
