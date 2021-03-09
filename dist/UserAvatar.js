"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserAvatar;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserAvatar() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      width: 220,
      zIndex: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Button, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    src: "../assets/ttech.png",
    style: {
      height: 45,
      width: 45,
      marginRight: 10
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, "TTech")));
}