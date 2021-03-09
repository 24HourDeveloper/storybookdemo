"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultLogo = void 0;

var _react = _interopRequireDefault(require("react"));

var _LogoImage = _interopRequireDefault(require("./LogoImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logo = {
  title: "Logo",
  component: _LogoImage.default
};

var defaultLogo = function defaultLogo() {
  return /*#__PURE__*/_react.default.createElement(_LogoImage.default, null);
};

exports.defaultLogo = defaultLogo;
var _default = logo;
exports.default = _default;