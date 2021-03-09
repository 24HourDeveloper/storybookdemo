"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withImageAndAllButtons = exports.withImageAndbutton = exports.withImage = exports.noElements = void 0;

var _react = _interopRequireDefault(require("react"));

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

var _LogoImage = _interopRequireDefault(require("./LogoImage"));

var _IconWithText = _interopRequireDefault(require("./IconWithText"));

var _LinkText = _interopRequireDefault(require("./LinkText"));

var _UserAvatar = _interopRequireDefault(require("./UserAvatar"));

var _icons = require("@material-ui/icons/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var side = {
  title: 'Sidebar',
  compoenent: _Sidebar.default
};

var noElements = function noElements() {
  return /*#__PURE__*/_react.default.createElement(_Sidebar.default, null);
};

exports.noElements = noElements;

var withImage = function withImage() {
  return /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    logo: /*#__PURE__*/_react.default.createElement(_LogoImage.default, null)
  });
};

exports.withImage = withImage;

var withImageAndbutton = function withImageAndbutton() {
  return /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    logo: /*#__PURE__*/_react.default.createElement(_LogoImage.default, null)
  }, /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Dashboard",
    icon: /*#__PURE__*/_react.default.createElement(_icons.Home, null)
  }));
};

exports.withImageAndbutton = withImageAndbutton;

var withImageAndAllButtons = function withImageAndAllButtons() {
  return /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    logo: /*#__PURE__*/_react.default.createElement(_LogoImage.default, null)
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Dashboard",
    icon: /*#__PURE__*/_react.default.createElement(_icons.Home, null)
  }), /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Members",
    icon: /*#__PURE__*/_react.default.createElement(_icons.PersonOutline, null)
  }), /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Staff",
    icon: /*#__PURE__*/_react.default.createElement(_icons.GroupAdd, null)
  }), /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Forms",
    icon: /*#__PURE__*/_react.default.createElement(_icons.Assessment, null)
  }), /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Knowledge Base",
    icon: /*#__PURE__*/_react.default.createElement(_icons.MenuBook, null)
  }), /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Reports",
    icon: /*#__PURE__*/_react.default.createElement(_icons.MultilineChartOutlined, null)
  }), /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Search",
    icon: /*#__PURE__*/_react.default.createElement(_icons.Search, null)
  }), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      width: '90%',
      borderColor: 'black'
    }
  }), /*#__PURE__*/_react.default.createElement(_LinkText.default, {
    text: "Terms and Conditions"
  }), /*#__PURE__*/_react.default.createElement(_LinkText.default, {
    text: "Privacy Policy"
  }), /*#__PURE__*/_react.default.createElement(_UserAvatar.default, null)));
};

exports.withImageAndAllButtons = withImageAndAllButtons;
var _default = side;
exports.default = _default;