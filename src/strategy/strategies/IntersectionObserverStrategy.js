import { LazyLoadImageStrategy } from './LazyLoadImageStrategy';

export class IntersectionObserverStrategy extends LazyLoadImageStrategy {
  constructor({ images, options }) {
    super();
    this._images = this._elementToArray(images);
    this._options = options;
    this._observerOptions = this._options.observerOptions !== undefined ? this._options.observerOptions : {};
  }

  _attachEvent() {
    const observer = new IntersectionObserver(this._onIntersection.bind(this), this._observerOptions);

    this._images.forEach(image => {
      observer.observe(image);
    });
  }

  _dettachEvent({ observer, entry: { target } }) {
    observer.unobserve(target);
  }

  _onIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this._dettachEvent({ observer, entry });
        this._loadImage(entry.target, { options: this._options });
      }
    });
  }

  initialize() {
    this._attachEvent();
  }
}
