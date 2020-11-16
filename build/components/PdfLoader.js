"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPdfWorker = setPdfWorker;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pdf = require("pdfjs-dist/lib/pdf");

var _pdf2 = _interopRequireDefault(require("pdfjs-dist/lib/pdf.worker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

setPdfWorker(_pdf2["default"]);

function setPdfWorker(workerSrcOrClass) {
  if (typeof window !== "undefined") delete window.pdfjsWorker;
  delete _pdf.GlobalWorkerOptions.workerSrc;
  delete _pdf.GlobalWorkerOptions.workerPort;

  if (typeof workerSrcOrClass === "string") {
    _pdf.GlobalWorkerOptions.workerSrc = workerSrcOrClass;
  } else if (typeof workerSrcOrClass === "function") {
    _pdf.GlobalWorkerOptions.workerPort = workerSrcOrClass();
  } else if (workerSrcOrClass instanceof Worker) {
    _pdf.GlobalWorkerOptions.workerPort = workerSrcOrClass;
  } else if (typeof window !== "undefined" && workerSrcOrClass) {
    window.pdfjsWorker = workerSrcOrClass;
  }
}

var PdfLoader = /*#__PURE__*/function (_Component) {
  _inherits(PdfLoader, _Component);

  var _super = _createSuper(PdfLoader);

  function PdfLoader() {
    var _this;

    _classCallCheck(this, PdfLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pdfDocument: null,
      error: null
    });

    _defineProperty(_assertThisInitialized(_this), "documentRef", /*#__PURE__*/_react["default"].createRef());

    return _this;
  }

  _createClass(PdfLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var discardedDocument = this.state.pdfDocument;

      if (discardedDocument) {
        discardedDocument.destroy();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var url = _ref.url;

      if (this.props.url !== url) {
        this.load();
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError;

      if (onError) {
        onError(error);
      }

      this.setState({
        pdfDocument: null,
        error: error
      });
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;

      var _ref2 = this.documentRef.current || {},
          _ref2$ownerDocument = _ref2.ownerDocument,
          ownerDocument = _ref2$ownerDocument === void 0 ? document : _ref2$ownerDocument;

      var url = this.props.url;
      var discardedDocument = this.state.pdfDocument;
      this.setState({
        pdfDocument: null,
        error: null
      });
      Promise.resolve().then(function () {
        return discardedDocument && discardedDocument.destroy();
      }).then(function () {
        return url && (0, _pdf.getDocument)({
          url: url,
          ownerDocument: ownerDocument
        }).promise.then(function (pdfDocument) {
          _this2.setState({
            pdfDocument: pdfDocument
          });
        });
      })["catch"](function (e) {
        return _this2.componentDidCatch(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          beforeLoad = _this$props.beforeLoad;
      var _this$state = this.state,
          pdfDocument = _this$state.pdfDocument,
          error = _this$state.error;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        ref: this.documentRef
      }), error ? this.renderError() : !pdfDocument || !children ? beforeLoad : children(pdfDocument));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var errorMessage = this.props.errorMessage;

      if (errorMessage) {
        return /*#__PURE__*/_react["default"].cloneElement(errorMessage, {
          error: this.state.error
        });
      }

      return null;
    }
  }]);

  return PdfLoader;
}(_react.Component);

var _default = PdfLoader;
exports["default"] = _default;