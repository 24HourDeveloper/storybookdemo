"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconWithText;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./iconWithText.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWithText(_ref) {
  var icon = _ref.icon,
      text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    style: {
      width: '100%',
      borderRadius: 0,
      padding: 0,
      backgroundColor: 'orange'
    },
    disableElevation: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-button"
  }, icon, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-padding"
  }, text)));
}