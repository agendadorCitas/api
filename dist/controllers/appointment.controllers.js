"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAppointment = exports.insertAppointment = exports.findEmail = exports.findAllAppointment = exports.deleteAppointment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../config/dataBase/db.js");
// Modulo

// MOSTRAR TODOS LOS DATOS
var findAllAppointment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _yield$pool$query, _yield$pool$query2, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _db.pool.query("CALL spFindAllAppointment()");
        case 3:
          _yield$pool$query = _context.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          rows = _yield$pool$query2[0];
          res.json(rows);
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("Ha ocurrido un error");
          console.log(_context.t0);
        case 13:
          ;
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function findAllAppointment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// MOSTRAR LOS DATOS SEGUN SU ID
exports.findAllAppointment = findAllAppointment;
var findEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _yield$pool$query3, _yield$pool$query4, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _db.pool.query("CALL spFindEmail(".concat(id, ");"));
        case 4:
          _yield$pool$query3 = _context2.sent;
          _yield$pool$query4 = (0, _slicedToArray2["default"])(_yield$pool$query3, 1);
          rows = _yield$pool$query4[0];
          res.json(rows);
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.error("Ha ocurrido un error");
        case 13:
          ;
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function findEmail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// INSERTAR INFORMACIÓN
exports.findEmail = findEmail;
var insertAppointment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var cedula, nombre, apellido, telefono, direccion, correo, idLab, fecha, horaCita, costoCita, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cedula = req.body.cedula;
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          telefono = req.body.telefono;
          direccion = req.body.direccion;
          correo = req.body.correo;
          idLab = req.body.idLab;
          fecha = req.body.fecha;
          horaCita = req.body.horaCita;
          costoCita = req.body.costoCita;
          _context3.prev = 10;
          _context3.next = 13;
          return _db.pool.query("CALL spInsertAppointment(".concat(cedula, ", '").concat(nombre, "', '").concat(apellido, "', '").concat(telefono, "', '").concat(direccion, "', '").concat(correo, "', ").concat(idLab, ", '").concat(fecha, "', '").concat(horaCita, "', '").concat(costoCita, "');"));
        case 13:
          result = _context3.sent;
          res.json(result);
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](10);
          console.error("Ha ocurrido un error" + _context3.t0);
        case 20:
          ;
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[10, 17]]);
  }));
  return function insertAppointment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ACTUALIZAR INFORMACIÓN
exports.insertAppointment = insertAppointment;
var updateAppointment = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, cedula, nombre, apellido, telefono, direccion, correo, idLab, fecha, horaCita, costoCita, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          cedula = req.body.cedula;
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          telefono = req.body.telefono;
          direccion = req.body.direccion;
          correo = req.body.correo;
          idLab = req.body.idLab;
          fecha = req.body.fecha;
          horaCita = req.body.horaCita;
          costoCita = req.body.costoCita;
          _context4.prev = 11;
          _context4.next = 14;
          return _db.pool.query("CALL spUpdateAppointment(".concat(id, ", ").concat(cedula, ", '").concat(nombre, "', '").concat(apellido, "', '").concat(telefono, "', '").concat(direccion, "', '").concat(correo, "', ").concat(idLab, ", '").concat(fecha, "', '").concat(horaCita, "', '").concat(costoCita, "');"));
        case 14:
          result = _context4.sent;
          if (result[0].affectedRows != 0) res.json(result);else res.json({
            "rs": "ERROR"
          });
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](11);
          console.error("Ha ocurrido un error" + _context4.t0);
        case 21:
          ;
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[11, 18]]);
  }));
  return function updateAppointment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ELIMINA INFORMACIÓN
exports.updateAppointment = updateAppointment;
var deleteAppointment = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _db.pool.query("CALL spDeleteAppointment(".concat(id, ");"));
        case 4:
          result = _context5.sent;
          if (result[0].affectedRows === 1) res.json(result);else res.json({
            "ERROR": "NO BORRÓ"
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          console.error(_context5.t0);
        case 11:
          ;
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function deleteAppointment(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteAppointment = deleteAppointment;