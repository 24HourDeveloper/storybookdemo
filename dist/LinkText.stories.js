"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bottomTextOfSidebar = void 0;

var _react = _interopRequireDefault(require("react"));

var _LinkText = _interopRequireDefault(require("./LinkText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var link = {
  title: "Sidebar Bottom Links",
  component: _LinkText.default
};

var bottomTextOfSidebar = function bottomTextOfSidebar() {
  return /*#__PURE__*/_react.default.createElement(_LinkText.default, {
    text: "Terms and Conditions"
  });
};

exports.bottomTextOfSidebar = bottomTextOfSidebar;
var _default = link;
exports.default = _default;