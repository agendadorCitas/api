"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEmail = exports.insertEmail = exports.findEmail = exports.findAllEmail = exports.deleteEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../config/dataBase/db.js");
// Modulos

// MOSTRAR TODOS LOS DATOS
var findAllEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _yield$pool$query, _yield$pool$query2, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _db.pool.query("CALL spFindAllEmail()");
        case 3:
          _yield$pool$query = _context.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          rows = _yield$pool$query2[0];
          res.json(rows);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("Ha ocurrido un error: " + _context.t0);
        case 12:
          ;
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function findAllEmail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// MOSTRAR LOS DATOS SEGUN SU ID
exports.findAllEmail = findAllEmail;
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
          console.error("Ha ocurrido un error: " + _context2.t0);
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
var insertEmail = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var email, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          email = req.body.email;
          _context3.prev = 1;
          _context3.next = 4;
          return _db.pool.query("CALL spInsertEmail('".concat(email, "');"));
        case 4:
          result = _context3.sent;
          res.json(result);
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.error("Ha ocurrido un error: " + _context3.t0);
        case 11:
          ;
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function insertEmail(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ACTUALIZAR INFORMACIÓN
exports.insertEmail = insertEmail;
var updateEmail = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, email, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          email = req.body.email;
          _context4.prev = 2;
          _context4.next = 5;
          return _db.pool.query("CALL spUpdateEmail(".concat(id, ", '").concat(email, "');"));
        case 5:
          result = _context4.sent;
          if (result[0].affectedRows != 0) res.json(result);else res.json({
            "rs": "ERROR"
          });
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          console.error("Ha ocurrido un error: " + _context4.t0);
        case 12:
          ;
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function updateEmail(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ELIMINA INFORMACIÓN
exports.updateEmail = updateEmail;
var deleteEmail = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _db.pool.query("CALL spDeleteEmail(".concat(id, ");"));
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
          console.error("Ha ocurrido un error al intentar eliminar: " + _context5.t0);
        case 11:
          ;
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function deleteEmail(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteEmail = deleteEmail;