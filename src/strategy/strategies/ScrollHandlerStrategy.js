import { LazyLoadImageStrategy } from './LazyLoadImageStrategy';

export class ScrollHandlerStrategy extends LazyLoadImageStrategy {
  constructor({ images, options }) {
    super();
    this._images = this._elementToArray(images);
    this._options = options;
    this._scrollHandlerEvent = null;
  }

  static debounce(fn, time) {
    let timeout;

    return function () {
      const functionCall = () => {
        return fn.apply(this, arguments);
      };

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }

  static shouldLoadImage(image) {
    return image.getBoundingClientRect().top < document.documentElement.clientHeight;
  }

  _attachEvent() {
    const { debounce } = ScrollHandlerStrategy;

    this._scrollHandlerEvent = debounce(this._loadImageHandler.bind(this), 100);
    window.addEventListener('load', this._loadImageHandler.bind(this), {
      once: true
    });
    window.addEventListener('scroll', this._scrollHandlerEvent, {
      passive: true
    });
  }

  _dettachEvent({ listener, method }) {
    window.removeEventListener(listener, method);
  }

  _loadImageHandler() {
    const { shouldLoadImage } = ScrollHandlerStrategy;

    this._images.length ?
      this._images.forEach((image, index, images) => {
        if (shouldLoadImage(image)) {
          this._loadImage(image, { options: this._options });
          images.splice(index, 1);
        }
      }) :
      this._dettachEvent({
        listener: 'scroll',
        method: this._scrollHandlerEvent
      });
  }

  initialize() {
    this._attachEvent();
  }
}
