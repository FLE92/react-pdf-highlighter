"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var MouseMonitor = /*#__PURE__*/function (_Component) {
  _inherits(MouseMonitor, _Component);

  var _super = _createSuper(MouseMonitor);

  function MouseMonitor() {
    var _this;

    _classCallCheck(this, MouseMonitor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "unsubscribe", function () {});

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (event) {
      if (!_this.container) {
        return;
      }

      var _this$props = _this.props,
          onMoveAway = _this$props.onMoveAway,
          paddingX = _this$props.paddingX,
          paddingY = _this$props.paddingY;
      var clientX = event.clientX,
          clientY = event.clientY; // TODO: see if possible to optimize

      var _this$container$getBo = _this.container.getBoundingClientRect(),
          left = _this$container$getBo.left,
          top = _this$container$getBo.top,
          width = _this$container$getBo.width,
          height = _this$container$getBo.height;

      var inBoundsX = clientX > left - paddingX && clientX < left + width + paddingX;
      var inBoundsY = clientY > top - paddingY && clientY < top + height + paddingY;
      var isNear = inBoundsX && inBoundsY;

      if (!isNear) {
        onMoveAway();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "attachRef", function (ref) {
      _this.container = ref;

      _this.unsubscribe();

      if (ref) {
        var doc = ref.ownerDocument;
        doc.addEventListener("mousemove", _this.onMouseMove);

        _this.unsubscribe = function () {
          doc.removeEventListener("mousemove", _this.onMouseMove);
        };
      }
    });

    return _this;
  }

  _createClass(MouseMonitor, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line
      var _this$props2 = this.props,
          onMoveAway = _this$props2.onMoveAway,
          paddingX = _this$props2.paddingX,
          paddingY = _this$props2.paddingY,
          children = _this$props2.children,
          restProps = _objectWithoutProperties(_this$props2, ["onMoveAway", "paddingX", "paddingY", "children"]);

      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.attachRef
      }, /*#__PURE__*/_react["default"].cloneElement(children, restProps));
    }
  }]);

  return MouseMonitor;
}(_react.Component);

var _default = MouseMonitor;
exports["default"] = _default;