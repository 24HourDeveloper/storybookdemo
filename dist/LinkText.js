"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkText;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkText(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, text));
}