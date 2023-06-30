"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _colors = _interopRequireDefault(require("colors"));
// Modulo

// Colores en consola
var message = function message(_message, type) {
  switch (type) {
    case "danger":
      console.log(_message.bgRed);
      break;
    case "warning":
      console.log(_message.bgYellow);
      break;
    case "sucess":
      console.log(_message.bgGreen);
      break;
    default:
      console.log(_message.bgWhite);
      break;
  }
  ;
};
var _default = message;
exports["default"] = _default;