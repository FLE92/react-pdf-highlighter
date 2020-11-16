"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaledToViewport = exports.viewportToScaled = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// "viewport" rectangle is { top, left, width, height }
// "scaled" means that data structure stores (0, 1) coordinates.
// for clarity reasons I decided not to store actual (0, 1) coordinates, but
// provide width and height, so user can compute ratio himself if needed
var viewportToScaled = function viewportToScaled(rect, _ref) {
  var width = _ref.width,
      height = _ref.height;
  return {
    x1: rect.left,
    y1: rect.top,
    x2: rect.left + rect.width,
    y2: rect.top + rect.height,
    width: width,
    height: height
  };
};

exports.viewportToScaled = viewportToScaled;

var pdfToViewport = function pdfToViewport(pdf, viewport) {
  var _viewport$convertToVi = viewport.convertToViewportRectangle([pdf.x1, pdf.y1, pdf.x2, pdf.y2]),
      _viewport$convertToVi2 = _slicedToArray(_viewport$convertToVi, 4),
      x1 = _viewport$convertToVi2[0],
      y1 = _viewport$convertToVi2[1],
      x2 = _viewport$convertToVi2[2],
      y2 = _viewport$convertToVi2[3];

  return {
    left: x1,
    top: y1,
    width: x2 - x1,
    height: y1 - y2
  };
};

var scaledToViewport = function scaledToViewport(scaled, viewport) {
  var usePdfCoordinates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var width = viewport.width,
      height = viewport.height;

  if (usePdfCoordinates) {
    return pdfToViewport(scaled, viewport);
  }

  if (scaled.x1 === undefined) {
    throw new Error("You are using old position format, please update");
  }

  var x1 = width * scaled.x1 / scaled.width;
  var y1 = height * scaled.y1 / scaled.height;
  var x2 = width * scaled.x2 / scaled.width;
  var y2 = height * scaled.y2 / scaled.height;
  return {
    left: x1,
    top: y1,
    width: x2 - x1,
    height: y2 - y1
  };
};

exports.scaledToViewport = scaledToViewport;