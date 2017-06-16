"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.poundsToKilograms = poundsToKilograms;
exports.kilogramsToPounds = kilogramsToPounds;
function poundsToKilograms() {
  for (var _len = arguments.length, pound = Array(_len), _key = 0; _key < _len; _key++) {
    pound[_key] = arguments[_key];
  }

  var kilograms = void 0;
  return kilograms = pound.map(function (pound) {
    return (pound * 0.453592);
  });
}

function kilogramsToPounds() {
  for (var _len2 = arguments.length, kilo = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    kilo[_key2] = arguments[_key2];
  }

  var pounds = void 0;
  return pounds = kilo.map(function (kilo) {
    return (kilo * 2.20462);
  });
}
