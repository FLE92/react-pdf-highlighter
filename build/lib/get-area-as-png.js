"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pdfjsDom = require("../lib/pdfjs-dom");

var getAreaAsPNG = function getAreaAsPNG(canvas, position) {
  var left = position.left,
      top = position.top,
      width = position.width,
      height = position.height;
  var doc = canvas ? canvas.ownerDocument : null; // @TODO: cache this?

  var newCanvas = doc && doc.createElement("canvas");

  if (!newCanvas || !(0, _pdfjsDom.isHTMLCanvasElement)(newCanvas)) {
    return "";
  }

  newCanvas.width = width;
  newCanvas.height = height;
  var newCanvasContext = newCanvas.getContext("2d");

  if (!newCanvasContext || !canvas) {
    return "";
  }

  var dpr = window.devicePixelRatio;
  newCanvasContext.drawImage(canvas, left * dpr, top * dpr, width * dpr, height * dpr, 0, 0, width, height);
  return newCanvas.toDataURL("image/png");
};

var _default = getAreaAsPNG;
exports["default"] = _default;