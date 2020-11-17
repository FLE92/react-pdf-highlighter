"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactPointable = _interopRequireDefault(require("react-pointable"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _pdf_viewer = require("pdfjs-dist/web/pdf_viewer");

var _getBoundingRect = _interopRequireDefault(require("../lib/get-bounding-rect"));

var _getClientRects = _interopRequireDefault(require("../lib/get-client-rects"));

var _getAreaAsPng = _interopRequireDefault(require("../lib/get-area-as-png"));

var _pdfjsDom = require("../lib/pdfjs-dom");

var _TipContainer = _interopRequireDefault(require("./TipContainer"));

var _MouseSelection = _interopRequireDefault(require("./MouseSelection"));

var _coordinates = require("../lib/coordinates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var EMPTY_ID = "empty-id";

var PdfHighlighter = /*#__PURE__*/function (_PureComponent) {
  _inherits(PdfHighlighter, _PureComponent);

  var _super = _createSuper(PdfHighlighter);

  function PdfHighlighter(props) {
    var _this;

    _classCallCheck(this, PdfHighlighter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      ghostHighlight: null,
      isCollapsed: true,
      range: null,
      scrolledToHighlightId: EMPTY_ID,
      isAreaSelectionInProgress: false,
      tip: null
    });

    _defineProperty(_assertThisInitialized(_this), "eventBus", new _pdf_viewer.EventBus());

    _defineProperty(_assertThisInitialized(_this), "linkService", new _pdf_viewer.PDFLinkService({
      eventBus: _this.eventBus
    }));

    _defineProperty(_assertThisInitialized(_this), "viewer", void 0);

    _defineProperty(_assertThisInitialized(_this), "resizeObserver", null);

    _defineProperty(_assertThisInitialized(_this), "containerNode", null);

    _defineProperty(_assertThisInitialized(_this), "unsubscribe", function () {});

    _defineProperty(_assertThisInitialized(_this), "attachRef", function (ref) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          eventBus = _assertThisInitialize.eventBus,
          observer = _assertThisInitialize.resizeObserver;

      _this.containerNode = ref;

      _this.unsubscribe();

      if (ref) {
        var doc = ref.ownerDocument;
        eventBus.on("textlayerrendered", _this.onTextLayerRendered);
        eventBus.on("pagesinit", _this.onDocumentReady);
        doc.addEventListener("selectionchange", _this.onSelectionChange);
        doc.addEventListener("keydown", _this.handleKeyDown);
        doc.defaultView.addEventListener("resize", _this.debouncedScaleValue);
        if (observer) observer.observe(ref);

        _this.unsubscribe = function () {
          eventBus.off("pagesinit", _this.onDocumentReady);
          eventBus.off("textlayerrendered", _this.onTextLayerRendered);
          doc.removeEventListener("selectionchange", _this.onSelectionChange);
          doc.removeEventListener("keydown", _this.handleKeyDown);
          doc.defaultView.removeEventListener("resize", _this.debouncedScaleValue);
          if (observer) observer.disconnect();
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hideTipAndSelection", function () {
      var tipNode = (0, _pdfjsDom.findOrCreateContainerLayer)(_this.viewer.viewer, "PdfHighlighter__tip-layer");

      _reactDom["default"].unmountComponentAtNode(tipNode);

      _this.setState({
        ghostHighlight: null,
        tip: null
      }, function () {
        return _this.renderHighlights();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTextLayerRendered", function () {
      _this.renderHighlights();
    });

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (highlight) {
      var _highlight$position = highlight.position,
          pageNumber = _highlight$position.pageNumber,
          boundingRect = _highlight$position.boundingRect,
          usePdfCoordinates = _highlight$position.usePdfCoordinates;

      _this.viewer.container.removeEventListener("scroll", _this.onScroll);

      var pageViewport = _this.viewer.getPageView(pageNumber - 1).viewport;

      var scrollMargin = 10;

      _this.viewer.scrollPageIntoView({
        pageNumber: pageNumber,
        destArray: [null, {
          name: "XYZ"
        }].concat(_toConsumableArray(pageViewport.convertToPdfPoint(0, (0, _coordinates.scaledToViewport)(boundingRect, pageViewport, usePdfCoordinates).top - scrollMargin)), [0])
      });

      _this.setState({
        scrolledToHighlightId: highlight.id
      }, function () {
        return _this.renderHighlights();
      }); // wait for scrolling to finish


      setTimeout(function () {
        _this.viewer.container.addEventListener("scroll", _this.onScroll);
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentReady", function () {
      var scrollRef = _this.props.scrollRef;

      _this.handleScaleValue();

      scrollRef(_this.scrollTo);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectionChange", function () {
      var container = _this.containerNode;
      var selection = (0, _pdfjsDom.getWindow)(container).getSelection();
      var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

      if (selection.isCollapsed) {
        _this.setState({
          isCollapsed: true
        });

        return;
      }

      if (!range || !container || !container.contains(range.commonAncestorContainer)) {
        return;
      }

      _this.setState({
        isCollapsed: false,
        range: range
      });

      _this.debouncedAfterSelection();
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      var onScrollChange = _this.props.onScrollChange;
      onScrollChange();

      _this.setState({
        scrolledToHighlightId: EMPTY_ID
      }, function () {
        return _this.renderHighlights();
      });

      _this.viewer.container.removeEventListener("scroll", _this.onScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      if (!(0, _pdfjsDom.isHTMLElement)(event.target)) {
        return;
      }

      if ((0, _pdfjsDom.asElement)(event.target).closest(".PdfHighlighter__tip-container")) {
        return;
      }

      _this.hideTipAndSelection();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.code === "Escape") {
        _this.hideTipAndSelection();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "afterSelection", function () {
      var onSelectionFinished = _this.props.onSelectionFinished;
      var _this$state = _this.state,
          isCollapsed = _this$state.isCollapsed,
          range = _this$state.range;

      if (!range || isCollapsed) {
        return;
      }

      var page = (0, _pdfjsDom.getPageFromRange)(range);

      if (!page) {
        return;
      }

      var rects = (0, _getClientRects["default"])(range, page.node);

      if (rects.length === 0) {
        return;
      }

      var boundingRect = (0, _getBoundingRect["default"])(rects);
      var viewportPosition = {
        boundingRect: boundingRect,
        rects: rects,
        pageNumber: page.number
      };
      var content = {
        text: range.toString()
      };

      var scaledPosition = _this.viewportPositionToScaled(viewportPosition);

      _this.renderTipAtPosition(viewportPosition, onSelectionFinished(scaledPosition, content, function () {
        return _this.hideTipAndSelection();
      }, function () {
        return _this.setState({
          ghostHighlight: {
            position: scaledPosition
          }
        }, function () {
          return _this.renderHighlights();
        });
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedAfterSelection", (0, _lodash["default"])(_this.afterSelection, 500));

    _defineProperty(_assertThisInitialized(_this), "handleScaleValue", function () {
      if (_this.viewer) {
        _this.viewer.currentScaleValue = _this.props.pdfScaleValue; //"page-width";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedScaleValue", (0, _lodash["default"])(_this.handleScaleValue, 500));

    if (typeof ResizeObserver !== "undefined") {
      _this.resizeObserver = new ResizeObserver(_this.debouncedScaleValue);
    }

    return _this;
  }

  _createClass(PdfHighlighter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.pdfDocument !== this.props.pdfDocument) {
        this.init();
        return;
      }

      if (prevProps.highlights !== this.props.highlights) {
        this.renderHighlights(this.props);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var pdfDocument = this.props.pdfDocument;
      this.viewer = this.viewer || new _pdf_viewer.PDFViewer({
        container: this.containerNode,
        eventBus: this.eventBus,
        enhanceTextSelection: true,
        removePageBorders: true,
        linkService: this.linkService
      });
      this.linkService.setDocument(pdfDocument);
      this.linkService.setViewer(this.viewer);
      this.viewer.setDocument(pdfDocument); // debug

      window.PdfViewer = this;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "findOrCreateHighlightLayer",
    value: function findOrCreateHighlightLayer(page) {
      var _ref = this.viewer.getPageView(page - 1) || {},
          textLayer = _ref.textLayer;

      if (!textLayer) {
        return null;
      }

      return (0, _pdfjsDom.findOrCreateContainerLayer)(textLayer.textLayerDiv, "PdfHighlighter__highlight-layer");
    }
  }, {
    key: "groupHighlightsByPage",
    value: function groupHighlightsByPage(highlights) {
      var ghostHighlight = this.state.ghostHighlight;
      return [].concat(_toConsumableArray(highlights), [ghostHighlight]).filter(Boolean).reduce(function (res, highlight) {
        var pageNumber = highlight.position.pageNumber;
        res[pageNumber] = res[pageNumber] || [];
        res[pageNumber].push(highlight);
        return res;
      }, {});
    }
  }, {
    key: "showTip",
    value: function showTip(highlight, content) {
      var _this$state2 = this.state,
          isCollapsed = _this$state2.isCollapsed,
          ghostHighlight = _this$state2.ghostHighlight,
          isAreaSelectionInProgress = _this$state2.isAreaSelectionInProgress;
      var highlightInProgress = !isCollapsed || ghostHighlight;

      if (highlightInProgress || isAreaSelectionInProgress) {
        return;
      }

      this.renderTipAtPosition(highlight.position, content);
    }
  }, {
    key: "scaledPositionToViewport",
    value: function scaledPositionToViewport(_ref2) {
      var pageNumber = _ref2.pageNumber,
          boundingRect = _ref2.boundingRect,
          rects = _ref2.rects,
          usePdfCoordinates = _ref2.usePdfCoordinates;
      var viewport = this.viewer.getPageView(pageNumber - 1).viewport;
      return {
        boundingRect: (0, _coordinates.scaledToViewport)(boundingRect, viewport, usePdfCoordinates),
        rects: (rects || []).map(function (rect) {
          return (0, _coordinates.scaledToViewport)(rect, viewport, usePdfCoordinates);
        }),
        pageNumber: pageNumber
      };
    }
  }, {
    key: "viewportPositionToScaled",
    value: function viewportPositionToScaled(_ref3) {
      var pageNumber = _ref3.pageNumber,
          boundingRect = _ref3.boundingRect,
          rects = _ref3.rects;
      var viewport = this.viewer.getPageView(pageNumber - 1).viewport;
      return {
        boundingRect: (0, _coordinates.viewportToScaled)(boundingRect, viewport),
        rects: (rects || []).map(function (rect) {
          return (0, _coordinates.viewportToScaled)(rect, viewport);
        }),
        pageNumber: pageNumber
      };
    }
  }, {
    key: "screenshot",
    value: function screenshot(position, pageNumber) {
      var canvas = this.viewer.getPageView(pageNumber - 1).canvas;
      return (0, _getAreaAsPng["default"])(canvas, position);
    }
  }, {
    key: "renderHighlights",
    value: function renderHighlights(nextProps) {
      var _this2 = this;

      var _ref4 = nextProps || this.props,
          highlightTransform = _ref4.highlightTransform,
          highlights = _ref4.highlights;

      var pdfDocument = this.props.pdfDocument;
      var _this$state3 = this.state,
          tip = _this$state3.tip,
          scrolledToHighlightId = _this$state3.scrolledToHighlightId;
      var highlightsByPage = this.groupHighlightsByPage(highlights);

      var _loop = function _loop(_pageNumber) {
        var highlightLayer = _this2.findOrCreateHighlightLayer(_pageNumber);

        if (highlightLayer) {
          _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("div", null, (highlightsByPage[String(_pageNumber)] || []).map(function (_ref5, index) {
            var position = _ref5.position,
                id = _ref5.id,
                highlight = _objectWithoutProperties(_ref5, ["position", "id"]);

            var viewportHighlight = _objectSpread({
              id: id,
              position: _this2.scaledPositionToViewport(position)
            }, highlight);

            if (tip && tip.highlight.id === String(id)) {
              _this2.showTip(tip.highlight, tip.callback(viewportHighlight));
            }

            var isScrolledTo = Boolean(scrolledToHighlightId === id);
            return highlightTransform(viewportHighlight, index, function (highlight, callback) {
              _this2.setState({
                tip: {
                  highlight: highlight,
                  callback: callback
                }
              });

              _this2.showTip(highlight, callback(highlight));
            }, _this2.hideTipAndSelection, function (rect) {
              var viewport = _this2.viewer.getPageView(_pageNumber - 1).viewport;

              return (0, _coordinates.viewportToScaled)(rect, viewport);
            }, function (boundingRect) {
              return _this2.screenshot(boundingRect, _pageNumber);
            }, isScrolledTo);
          })), highlightLayer);
        }
      };

      for (var _pageNumber = 1; _pageNumber <= pdfDocument.numPages; _pageNumber++) {
        _loop(_pageNumber);
      }
    }
  }, {
    key: "renderTipAtPosition",
    value: function renderTipAtPosition(position, inner) {
      var boundingRect = position.boundingRect,
          pageNumber = position.pageNumber;
      var page = {
        node: this.viewer.getPageView(pageNumber - 1).div
      };
      var pageBoundingRect = page.node.getBoundingClientRect();
      var tipNode = (0, _pdfjsDom.findOrCreateContainerLayer)(this.viewer.viewer, "PdfHighlighter__tip-layer");

      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_TipContainer["default"], {
        scrollTop: this.viewer.container.scrollTop,
        pageBoundingRect: pageBoundingRect,
        style: {
          left: page.node.offsetLeft + boundingRect.left + boundingRect.width / 2,
          top: boundingRect.top + page.node.offsetTop,
          bottom: boundingRect.top + page.node.offsetTop + boundingRect.height
        },
        children: inner
      }), tipNode);
    }
  }, {
    key: "toggleTextSelection",
    value: function toggleTextSelection(flag) {
      this.viewer.viewer.classList.toggle("PdfHighlighter--disable-selection", flag);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          onSelectionFinished = _this$props.onSelectionFinished,
          enableAreaSelection = _this$props.enableAreaSelection;
      return /*#__PURE__*/_react["default"].createElement(_reactPointable["default"], {
        onPointerDown: this.onMouseDown
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.attachRef,
        className: "PdfHighlighter",
        onContextMenu: function onContextMenu(e) {
          return e.preventDefault();
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "pdfViewer"
      }), typeof enableAreaSelection === "function" ? /*#__PURE__*/_react["default"].createElement(_MouseSelection["default"], {
        onDragStart: function onDragStart() {
          return _this3.toggleTextSelection(true);
        },
        onDragEnd: function onDragEnd() {
          return _this3.toggleTextSelection(false);
        },
        onChange: function onChange(isVisible) {
          return _this3.setState({
            isAreaSelectionInProgress: isVisible
          });
        },
        shouldStart: function shouldStart(event) {
          return enableAreaSelection(event) && (0, _pdfjsDom.isHTMLElement)(event.target) && Boolean((0, _pdfjsDom.asElement)(event.target).closest(".page"));
        },
        onSelection: function onSelection(startTarget, boundingRect, resetSelection) {
          var page = (0, _pdfjsDom.getPageFromElement)(startTarget);

          if (!page) {
            return;
          }

          var pageBoundingRect = _objectSpread(_objectSpread({}, boundingRect), {}, {
            top: boundingRect.top - page.node.offsetTop,
            left: boundingRect.left - page.node.offsetLeft
          });

          var viewportPosition = {
            boundingRect: pageBoundingRect,
            rects: [],
            pageNumber: page.number
          };

          var scaledPosition = _this3.viewportPositionToScaled(viewportPosition);

          var image = _this3.screenshot(pageBoundingRect, page.number);

          _this3.renderTipAtPosition(viewportPosition, onSelectionFinished(scaledPosition, {
            image: image
          }, function () {
            return _this3.hideTipAndSelection();
          }, function () {
            return _this3.setState({
              ghostHighlight: {
                position: scaledPosition,
                content: {
                  image: image
                }
              }
            }, function () {
              resetSelection();

              _this3.renderHighlights();
            });
          }));
        }
      }) : null));
    }
  }]);

  return PdfHighlighter;
}(_react.PureComponent);

_defineProperty(PdfHighlighter, "defaultProps", {
  pdfScaleValue: "auto"
});

var _default = PdfHighlighter;
exports["default"] = _default;