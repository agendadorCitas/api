"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _config = _interopRequireDefault(require("./config"));
// Modulos

// Se escucha el puerto
_app["default"].listen(_app["default"].get("PORT"), _config["default"]);