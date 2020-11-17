"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pdfjsDom = require("../lib/pdfjs-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var MouseSelection = /*#__PURE__*/function (_Component) {
  _inherits(MouseSelection, _Component);

  var _super = _createSuper(MouseSelection);

  function MouseSelection() {
    var _this;

    _classCallCheck(this, MouseSelection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      locked: false,
      start: null,
      end: null
    });

    _defineProperty(_assertThisInitialized(_this), "root", void 0);

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var onDragEnd = _this.props.onDragEnd;
      onDragEnd();

      _this.setState({
        start: null,
        end: null,
        locked: false
      });
    });

    return _this;
  }

  _createClass(MouseSelection, [{
    key: "getBoundingRect",
    value: function getBoundingRect(start, end) {
      return {
        left: Math.min(end.x, start.x),
        top: Math.min(end.y, start.y),
        width: Math.abs(end.x - start.x),
        height: Math.abs(end.y - start.y)
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var onChange = this.props.onChange;
      var _this$state = this.state,
          start = _this$state.start,
          end = _this$state.end;
      var isVisible = Boolean(start && end);
      onChange(isVisible);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.root) {
        return;
      }

      var that = this;
      var _this$props = this.props,
          onSelection = _this$props.onSelection,
          onDragStart = _this$props.onDragStart,
          onDragEnd = _this$props.onDragEnd,
          shouldStart = _this$props.shouldStart;
      var container = (0, _pdfjsDom.asElement)(this.root.parentElement);

      if (!(0, _pdfjsDom.isHTMLElement)(container)) {
        return;
      }

      var containerBoundingRect = null;

      var containerCoords = function containerCoords(pageX, pageY) {
        if (!containerBoundingRect) {
          containerBoundingRect = container.getBoundingClientRect();
        }

        return {
          x: pageX - containerBoundingRect.left + container.scrollLeft,
          y: pageY - containerBoundingRect.top + container.scrollTop
        };
      };

      container.addEventListener("mousemove", function (event) {
        var _this2$state = _this2.state,
            start = _this2$state.start,
            locked = _this2$state.locked;

        if (!start || locked) {
          return;
        }

        that.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
          end: containerCoords(event.pageX, event.pageY)
        }));
      });
      container.addEventListener("mousedown", function (event) {
        if (!shouldStart(event)) {
          _this2.reset();

          return;
        }

        var startTarget = (0, _pdfjsDom.asElement)(event.target);

        if (!(0, _pdfjsDom.isHTMLElement)(startTarget)) {
          return;
        }

        onDragStart();

        _this2.setState({
          start: containerCoords(event.pageX, event.pageY),
          end: null,
          locked: false
        });

        var onMouseUp = function onMouseUp(event) {
          // emulate listen once
          event.currentTarget.removeEventListener("mouseup", onMouseUp);
          var start = _this2.state.start;

          if (!start) {
            return;
          }

          var end = containerCoords(event.pageX, event.pageY);
          var boundingRect = that.getBoundingRect(start, end);

          if (!(0, _pdfjsDom.isHTMLElement)(event.target) || !container.contains((0, _pdfjsDom.asElement)(event.target)) || !that.shouldRender(boundingRect)) {
            that.reset();
            return;
          }

          that.setState({
            end: end,
            locked: true
          }, function () {
            var _that$state = that.state,
                start = _that$state.start,
                end = _that$state.end;

            if (!start || !end) {
              return;
            }

            if ((0, _pdfjsDom.isHTMLElement)(event.target)) {
              onSelection(startTarget, boundingRect, that.reset);
              onDragEnd();
            }
          });
        };

        var doc = container.ownerDocument;

        if (doc.body) {
          doc.body.addEventListener("mouseup", onMouseUp);
        }
      });
    }
  }, {
    key: "shouldRender",
    value: function shouldRender(boundingRect) {
      return boundingRect.width >= 1 && boundingRect.height >= 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          start = _this$state2.start,
          end = _this$state2.end;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "MouseSelection-container",
        ref: function ref(node) {
          return _this3.root = node;
        }
      }, start && end ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "MouseSelection",
        style: this.getBoundingRect(start, end)
      }) : null);
    }
  }]);

  return MouseSelection;
}(_react.Component);

var _default = MouseSelection;
exports["default"] = _default;