"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _elasticsearch = _interopRequireDefault(require("../../elasticsearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// pages/api/create-index.js
function handler(req, res) {
  var indexName, indexExists, response;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "POST")) {
            _context.next = 21;
            break;
          }

          indexName = req.body.indexName;
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_elasticsearch["default"].indices.exists({
            index: indexName
          }));

        case 5:
          indexExists = _context.sent;

          if (!indexExists.body) {
            _context.next = 9;
            break;
          }

          res.status(400).json({
            message: "Index '".concat(indexName, "' already exists.")
          });
          return _context.abrupt("return");

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(_elasticsearch["default"].indices.create({
            index: indexName
          }));

        case 11:
          response = _context.sent;

          if (response.statusCode === 200) {
            res.status(200).json({
              message: "Index '".concat(indexName, "' created successfully.")
            });
          } else {
            res.status(500).json({
              message: "Failed to create index '".concat(indexName, "'.")
            });
          }

          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);
          res.status(500).json({
            message: "An error occurred while creating the index."
          });

        case 19:
          _context.next = 22;
          break;

        case 21:
          res.status(405).json({
            message: "Method Not Allowed"
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 15]]);
}