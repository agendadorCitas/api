"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = _interopRequireDefault(require("../app.js"));
var _message = _interopRequireDefault(require("./message.js"));
// Modulos

// Configuración de colores y puerto en consola según el ambiente de desarrollo
var caseEntorno = function caseEntorno() {
  switch (process.env.NODE_ENV) {
    case "developer":
      (0, _message["default"])("Estas en el puerto: ".concat(_app["default"].get("PORT")), "sucess");
      break;
    case "qa":
      (0, _message["default"])("Estas en el puerto: ".concat(_app["default"].get("PORT")), "warning");
      break;
    case "production":
      (0, _message["default"])("Estas en el puerto: ".concat(_app["default"].get("PORT")), "danger");
      break;
    default:
      (0, _message["default"])("Estas en el puerto: ".concat(_app["default"].get("PORT")), "white");
      break;
  }
  ;
};
var _default = caseEntorno;
exports["default"] = _default;