'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyLoadImageStrategy = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoadImageStrategy = exports.LazyLoadImageStrategy = function () {
  function LazyLoadImageStrategy() {
    (0, _classCallCheck3.default)(this, LazyLoadImageStrategy);
  }

  (0, _createClass3.default)(LazyLoadImageStrategy, [{
    key: '_attachEvent',
    value: function _attachEvent() {
      throw new Error('_attachEvent must be implemented!');
    }
  }, {
    key: '_dettachEvent',
    value: function _dettachEvent() {
      throw new Error('_dettachEvent must be implemented!');
    }
  }, {
    key: '_loadImage',
    value: function _loadImage(image, _ref) {
      var _ref$options = _ref.options,
          lazySrcAttribute = _ref$options.lazySrcAttribute,
          lazyLoadedClassName = _ref$options.lazyLoadedClassName;

      image.setAttribute('src', image.dataset[lazySrcAttribute]);
      image.onload = function () {
        image.classList.add(lazyLoadedClassName);
      };
    }
  }, {
    key: '_elementToArray',
    value: function _elementToArray(element) {
      return [].slice.call(element);
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      throw new Error('initialize must be implemented!');
    }
  }]);
  return LazyLoadImageStrategy;
}();