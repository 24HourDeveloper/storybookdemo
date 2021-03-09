"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./sidebar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(_ref) {
  var logo = _ref.logo,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: "sidebar-container",
    elevation: 3
  }, /*#__PURE__*/_react.default.createElement("div", null, logo), children);
}