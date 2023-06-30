"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _message = _interopRequireDefault(require("./config/message.js"));
var _enviroments = _interopRequireDefault(require("./config/enviroments"));
var _emailRoutes = _interopRequireDefault(require("./routes/email.routes.js"));
var _laboratoryRoutes = _interopRequireDefault(require("./routes/laboratory.routes.js"));
var _pqrsRoutes = _interopRequireDefault(require("./routes/pqrs.routes.js"));
var _appointmentRoutes = _interopRequireDefault(require("./routes/appointment.routes.js"));
// Modulos

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send({
    msg: "Hello World"
  });
});

// Se establece el puerto
app.set("PORT", process.env.PORT || 3000);

// Rutas
app.use(_express["default"].json());
app.use('/api', _emailRoutes["default"]);
app.use('/labApi', _laboratoryRoutes["default"]);
app.use('/PQRS', _pqrsRoutes["default"]);
app.use("/appointment", _appointmentRoutes["default"]);
var _default = app;
exports["default"] = _default;