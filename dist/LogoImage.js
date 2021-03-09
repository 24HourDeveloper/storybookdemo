"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogoImage;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./logoimage.css");

var _ttech = _interopRequireDefault(require("../assets/ttech2.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LogoImage() {
  return /*#__PURE__*/_react.default.createElement(_core.Paper, {
    elevation: 3,
    style: {
      textAlign: 'center',
      borderRadius: 0
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logo",
    src: _ttech.default,
    width: "45%"
  }));
}