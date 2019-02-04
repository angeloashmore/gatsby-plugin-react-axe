"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClientEntry = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const onClientEntry =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (_, pluginOptions = {}) {
    const _showInProduction$axe = _objectSpread({
      showInProduction: false,
      axeOptions: {}
    }, pluginOptions),
          showInProduction = _showInProduction$axe.showInProduction,
          axeOptions = _showInProduction$axe.axeOptions;

    if (process.env.NODE_ENV === 'development' || showInProduction) {
      const _ref2 = yield import('react-axe'),
            axe = _ref2.default;

      axe(_react.default, _reactDom.default, 1000, axeOptions);
    }
  });

  return function onClientEntry(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.onClientEntry = onClientEntry;