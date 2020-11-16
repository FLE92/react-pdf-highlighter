"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../style/Tip.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tip = /*#__PURE__*/function (_Component) {
  _inherits(Tip, _Component);

  var _super = _createSuper(Tip);

  function Tip() {
    var _this;

    _classCallCheck(this, Tip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      compact: true,
      text: "",
      emoji: ""
    });

    return _this;
  }

  _createClass(Tip, [{
    key: "componentDidUpdate",
    // for TipContainer
    value: function componentDidUpdate(nextProps, nextState) {
      var onUpdate = this.props.onUpdate;

      if (onUpdate && this.state.compact !== nextState.compact) {
        onUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onConfirm = _this$props.onConfirm,
          onOpen = _this$props.onOpen;
      var _this$state = this.state,
          compact = _this$state.compact,
          text = _this$state.text,
          emoji = _this$state.emoji;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Tip"
      }, compact ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "Tip__compact",
        onClick: function onClick() {
          onOpen();

          _this2.setState({
            compact: false
          });
        }
      }, "Add highlight") : /*#__PURE__*/_react["default"].createElement("form", {
        className: "Tip__card",
        onSubmit: function onSubmit(event) {
          event.preventDefault();
          onConfirm({
            text: text,
            emoji: emoji
          });
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("textarea", {
        width: "100%",
        placeholder: "Your comment",
        autoFocus: true,
        value: text,
        onChange: function onChange(event) {
          return _this2.setState({
            text: event.target.value
          });
        },
        ref: function ref(node) {
          if (node) {
            node.focus();
          }
        }
      }), /*#__PURE__*/_react["default"].createElement("div", null, ["💩", "😱", "😍", "🔥", "😳", "⚠️"].map(function (_emoji) {
        return /*#__PURE__*/_react["default"].createElement("label", {
          key: _emoji
        }, /*#__PURE__*/_react["default"].createElement("input", {
          checked: emoji === _emoji,
          type: "radio",
          name: "emoji",
          value: _emoji,
          onChange: function onChange(event) {
            return _this2.setState({
              emoji: event.target.value
            });
          }
        }), _emoji);
      }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "submit",
        value: "Save"
      }))));
    }
  }]);

  return Tip;
}(_react.Component);

var _default = Tip;
exports["default"] = _default;