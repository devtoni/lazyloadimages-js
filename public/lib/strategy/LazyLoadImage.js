"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyLoadImage = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoadImage = exports.LazyLoadImage = function () {
  function LazyLoadImage(_ref) {
    var interSectionObserverStrategy = _ref.interSectionObserverStrategy,
        scrollHandlerStrategy = _ref.scrollHandlerStrategy;
    (0, _classCallCheck3.default)(this, LazyLoadImage);

    this._interSectionObserverStrategy = interSectionObserverStrategy;
    this._scrollHandlerStrategy = scrollHandlerStrategy;
  }

  (0, _createClass3.default)(LazyLoadImage, [{
    key: "executeStrategy",
    value: function executeStrategy() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$images = _ref2.images,
          images = _ref2$images === undefined ? [] : _ref2$images,
          _ref2$options = _ref2.options,
          options = _ref2$options === undefined ? {} : _ref2$options;

      var existsIntersectionObserver = LazyLoadImage.existsIntersectionObserver;


      if (existsIntersectionObserver()) {
        new this._interSectionObserverStrategy({ images: images, options: options }).initialize();
      } else {
        new this._scrollHandlerStrategy({ images: images, options: options }).initialize();
      }
    }
  }], [{
    key: "existsIntersectionObserver",
    value: function existsIntersectionObserver() {
      return !!window.IntersectionObserver;
    }
  }]);
  return LazyLoadImage;
}();