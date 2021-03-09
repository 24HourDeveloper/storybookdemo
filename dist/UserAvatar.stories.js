"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProfile = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserAvatar = _interopRequireDefault(require("./UserAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  title: 'User Profile',
  component: _UserAvatar.default
};

var defaultProfile = function defaultProfile() {
  return /*#__PURE__*/_react.default.createElement(_UserAvatar.default, null);
};

exports.defaultProfile = defaultProfile;
var _default = user;
exports.default = _default;