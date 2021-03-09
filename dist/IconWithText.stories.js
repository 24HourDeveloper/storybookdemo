"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchButton = exports.ReportButton = exports.KnowledgeButton = exports.FormsButton = exports.StaffButton = exports.MembersButton = exports.HomeButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconWithText = _interopRequireDefault(require("./IconWithText"));

var _icons = require("@material-ui/icons/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var iconButton = {
  title: 'Icon with text',
  component: _IconWithText.default,
  argTypes: {
    text: {
      control: 'text'
    }
  }
}; //export const HomeButton = () => <IconWithText text="Dashboard" icon={<Home />}/>

var HomeButton = function HomeButton(args) {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, _extends({}, args, {
    icon: /*#__PURE__*/_react.default.createElement(_icons.Home, null)
  }));
};

exports.HomeButton = HomeButton;
HomeButton.args = {
  text: 'hello'
};

var MembersButton = function MembersButton() {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Members",
    icon: /*#__PURE__*/_react.default.createElement(_icons.PersonOutline, null)
  });
};

exports.MembersButton = MembersButton;

var StaffButton = function StaffButton() {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Staff",
    icon: /*#__PURE__*/_react.default.createElement(_icons.GroupAdd, null)
  });
};

exports.StaffButton = StaffButton;

var FormsButton = function FormsButton() {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Forms",
    icon: /*#__PURE__*/_react.default.createElement(_icons.Assessment, null)
  });
};

exports.FormsButton = FormsButton;

var KnowledgeButton = function KnowledgeButton() {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "knowledge Base",
    icon: /*#__PURE__*/_react.default.createElement(_icons.MenuBook, null)
  });
};

exports.KnowledgeButton = KnowledgeButton;

var ReportButton = function ReportButton() {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Reports",
    icon: /*#__PURE__*/_react.default.createElement(_icons.MultilineChartOutlined, null)
  });
};

exports.ReportButton = ReportButton;

var SearchButton = function SearchButton() {
  return /*#__PURE__*/_react.default.createElement(_IconWithText.default, {
    text: "Search",
    icon: /*#__PURE__*/_react.default.createElement(_icons.Search, null)
  });
};

exports.SearchButton = SearchButton;
var _default = iconButton;
exports.default = _default;