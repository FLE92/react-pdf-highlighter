"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _optimizeClientRects = _interopRequireDefault(require("./optimize-client-rects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getClientRects = function getClientRects(range, containerEl) {
  var shouldOptimize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var clientRects = Array.from(range.getClientRects());
  var offset = containerEl.getBoundingClientRect();
  var rects = clientRects.map(function (rect) {
    return {
      top: rect.top + containerEl.scrollTop - offset.top,
      left: rect.left + containerEl.scrollLeft - offset.left,
      width: rect.width,
      height: rect.height
    };
  });
  return shouldOptimize ? (0, _optimizeClientRects["default"])(rects) : rects;
};

var _default = getClientRects;
exports["default"] = _default;