'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntersectionObserverStrategy = undefined;

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

var IntersectionObserverStrategy = exports.IntersectionObserverStrategy = function (_LazyLoadImageStrateg) {
  (0, _inherits3.default)(IntersectionObserverStrategy, _LazyLoadImageStrateg);

  function IntersectionObserverStrategy(_ref) {
    var images = _ref.images,
        options = _ref.options;
    (0, _classCallCheck3.default)(this, IntersectionObserverStrategy);

    var _this = (0, _possibleConstructorReturn3.default)(this, (IntersectionObserverStrategy.__proto__ || (0, _getPrototypeOf2.default)(IntersectionObserverStrategy)).call(this));

    _this._images = _this._elementToArray(images);
    _this._options = options;
    _this._observerOptions = _this._options.observerOptions !== undefined ? _this._options.observerOptions : {};
    return _this;
  }

  (0, _createClass3.default)(IntersectionObserverStrategy, [{
    key: '_attachEvent',
    value: function _attachEvent() {
      var observer = new IntersectionObserver(this._onIntersection.bind(this), this._observerOptions);

      this._images.forEach(function (image) {
        observer.observe(image);
      });
    }
  }, {
    key: '_dettachEvent',
    value: function _dettachEvent(_ref2) {
      var observer = _ref2.observer,
          target = _ref2.entry.target;

      observer.unobserve(target);
    }
  }, {
    key: '_onIntersection',
    value: function _onIntersection(entries, observer) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          console.log('paso por aqui');
          _this2._dettachEvent({ observer: observer, entry: entry });
          _this2._loadImage(entry.target, { options: _this2._options });
        }
      });
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      console.log('initialize');
      this._attachEvent();
    }
  }]);
  return IntersectionObserverStrategy;
}(_LazyLoadImageStrategy.LazyLoadImageStrategy);