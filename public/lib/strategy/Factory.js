'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Factory = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _LazyLoadImage = require('./LazyLoadImage');

var _IntersectionObserverStrategy = require('./strategies/IntersectionObserverStrategy');

var _ScrollHandlerStrategy = require('./strategies/ScrollHandlerStrategy');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Factory = exports.Factory = function () {
  function Factory() {
    (0, _classCallCheck3.default)(this, Factory);
  }

  (0, _createClass3.default)(Factory, null, [{
    key: 'lazyLoadImage',
    value: function lazyLoadImage() {
      return new _LazyLoadImage.LazyLoadImage({
        interSectionObserverStrategy: _IntersectionObserverStrategy.IntersectionObserverStrategy,
        scrollHandlerStrategy: _ScrollHandlerStrategy.ScrollHandlerStrategy
      });
    }
  }]);
  return Factory;
}();