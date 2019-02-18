var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/generate-gradient.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generate-gradient.js":
/*!**********************************!*\
  !*** ./src/generate-gradient.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var sketch = __webpack_require__(/*! sketch */ "sketch");

  var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

  var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

  var selection = document.selectedLayers;
  var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  var generatedColor = "#";
  var generatedColor2 = "#";
  var i = 0;

  for (i = 0; i < 6; i++) {
    generatedColor += characters[Math.floor(Math.random() * characters.length)];
    ;
    generatedColor2 += characters[Math.floor(Math.random() * characters.length)];
    ;
  }

  var gradientAngles = [{
    fromX: "0",
    fromY: "0.5",
    toX: "1",
    toY: "0.5"
  }, {
    fromX: "0.5",
    fromY: "0",
    toX: "0.5",
    toY: "1"
  }, {
    fromX: "0",
    fromY: "0",
    toX: "1",
    toY: "1"
  }, {
    fromX: "1",
    fromY: "0",
    toX: "0",
    toY: "1"
  }, {
    fromX: "0.75",
    fromY: "0",
    toX: "0.25",
    toY: "1"
  }, {
    fromX: "0",
    fromY: "0.25",
    toX: "1",
    toY: "0.75"
  }, {
    fromX: "0.15",
    fromY: "1",
    toX: "0.85",
    toY: "0"
  }, {
    fromX: "0",
    fromY: "0.85",
    toX: "1",
    toY: "0.15"
  }, {
    fromX: "0.4",
    fromY: "1",
    toX: "0.6",
    toY: "0"
  }];
  var generatedAngle = gradientAngles[Math.floor(Math.random() * gradientAngles.length)];
  selection.forEach(function (layer) {
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
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=generate-gradient.js.map