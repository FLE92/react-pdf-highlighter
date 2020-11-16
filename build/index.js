"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PdfHighlighter", {
  enumerable: true,
  get: function get() {
    return _PdfHighlighter["default"];
  }
});
Object.defineProperty(exports, "Tip", {
  enumerable: true,
  get: function get() {
    return _Tip["default"];
  }
});
Object.defineProperty(exports, "Highlight", {
  enumerable: true,
  get: function get() {
    return _Highlight["default"];
  }
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _Popup["default"];
  }
});
Object.defineProperty(exports, "AreaHighlight", {
  enumerable: true,
  get: function get() {
    return _AreaHighlight["default"];
  }
});
Object.defineProperty(exports, "PdfLoader", {
  enumerable: true,
  get: function get() {
    return _PdfLoader["default"];
  }
});
Object.defineProperty(exports, "setPdfWorker", {
  enumerable: true,
  get: function get() {
    return _PdfLoader.setPdfWorker;
  }
});

var _PdfHighlighter = _interopRequireDefault(require("./components/PdfHighlighter"));

var _Tip = _interopRequireDefault(require("./components/Tip"));

var _Highlight = _interopRequireDefault(require("./components/Highlight"));

var _Popup = _interopRequireDefault(require("./components/Popup"));

var _AreaHighlight = _interopRequireDefault(require("./components/AreaHighlight"));

var _PdfLoader = _interopRequireWildcard(require("./components/PdfLoader"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }