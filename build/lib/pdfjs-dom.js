"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOrCreateContainerLayer = exports.getPageFromRange = exports.getPageFromElement = exports.asElement = exports.isHTMLCanvasElement = exports.isHTMLElement = exports.getWindow = exports.getDocument = void 0;

var getDocument = function getDocument(elm) {
  return (elm || {}).ownerDocument || document;
};

exports.getDocument = getDocument;

var getWindow = function getWindow(elm) {
  return (getDocument(elm) || {}).defaultView || window;
};

exports.getWindow = getWindow;

var isHTMLElement = function isHTMLElement(elm) {
  return elm instanceof HTMLElement || elm instanceof getWindow(elm).HTMLElement;
};

exports.isHTMLElement = isHTMLElement;

var isHTMLCanvasElement = function isHTMLCanvasElement(elm) {
  return elm instanceof HTMLCanvasElement || elm instanceof getWindow(elm).HTMLCanvasElement;
};

exports.isHTMLCanvasElement = isHTMLCanvasElement;

var asElement = function asElement(x) {
  return x;
};

exports.asElement = asElement;

var getPageFromElement = function getPageFromElement(target) {
  var node = asElement(target.closest(".page"));

  if (!node || !isHTMLElement(node)) {
    return null;
  }

  var number = Number(asElement(node).dataset.pageNumber);
  return {
    node: node,
    number: number
  };
};

exports.getPageFromElement = getPageFromElement;

var getPageFromRange = function getPageFromRange(range) {
  var parentElement = range.startContainer.parentElement;

  if (!isHTMLElement(parentElement)) {
    return;
  }

  return getPageFromElement(asElement(parentElement));
};

exports.getPageFromRange = getPageFromRange;

var findOrCreateContainerLayer = function findOrCreateContainerLayer(container, className) {
  var doc = getDocument(container);
  var layer = container.querySelector(".".concat(className));

  if (!layer) {
    layer = doc.createElement("div");
    layer.className = className;
    container.appendChild(layer);
  }

  return layer;
};

exports.findOrCreateContainerLayer = findOrCreateContainerLayer;