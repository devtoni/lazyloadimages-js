'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollHandlerStrategy = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _LazyLoadImageStrategy = require('./LazyLoadImageStrategy');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollHandlerStrategy = exports.ScrollHandlerStrategy = function (_LazyLoadImageStrateg) {
  (0, _inherits3.default)(ScrollHandlerStrategy, _LazyLoadImageStrateg);

  function ScrollHandlerStrategy(_ref) {
    var images = _ref.images,
        options = _ref.options;
    (0, _classCallCheck3.default)(this, ScrollHandlerStrategy);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollHandlerStrategy.__proto__ || (0, _getPrototypeOf2.default)(ScrollHandlerStrategy)).call(this));

    _this._images = _this._elementToArray(images);
    _this._options = options;
    _this._scrollHandlerEvent = null;
    return _this;
  }

  (0, _createClass3.default)(ScrollHandlerStrategy, [{
    key: '_attachEvent',
    value: function _attachEvent() {
      var debounce = ScrollHandlerStrategy.debounce;

      console.log('attachEvent');
      this._scrollHandlerEvent = debounce(this._loadImageHandler.bind(this), 100);
      window.addEventListener('load', function () {
        console.log('heeeeelllooooo');
      }, {
        once: true
      });
      window.addEventListener('scroll', function () {
        console.log('heeeeelllooooo');
      }, {
        passive: true
      });
    }
  }, {
    key: '_dettachEvent',
    value: function _dettachEvent(_ref2) {
      var listener = _ref2.listener,
          method = _ref2.method;

      window.removeEventListener(listener, method);
    }
  }, {
    key: '_loadImageHandler',
    value: function _loadImageHandler() {
      var _this2 = this;

      console.log('scroll');
      var shouldLoadImage = ScrollHandlerStrategy.shouldLoadImage;

      this._images.length ? this._images.forEach(function (image, index, images) {
        if (shouldLoadImage(image)) {
          _this2._loadImage(image, { options: _this2._options });
          images.splice(index, 1);
        }
      }) : this._dettachEvent({
        listener: 'scroll',
        method: this._scrollHandlerEvent
      });
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      this._attachEvent();
    }
  }], [{
    key: 'debounce',
    value: function debounce(fn, time) {
      var timeout = void 0;

      return function () {
        var _this3 = this,
            _arguments = arguments;

        var functionCall = function functionCall() {
          return fn.apply(_this3, _arguments);
        };

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
      };
    }
  }, {
    key: 'shouldLoadImage',
    value: function shouldLoadImage(image) {
      return image.getBoundingClientRect().top < document.documentElement.clientHeight;
    }
  }]);
  return ScrollHandlerStrategy;
}(_LazyLoadImageStrategy.LazyLoadImageStrategy);