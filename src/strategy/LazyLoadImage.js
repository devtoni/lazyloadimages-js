export class LazyLoadImage {
  constructor({ interSectionObserverStrategy, scrollHandlerStrategy }) {
    this._interSectionObserverStrategy = interSectionObserverStrategy;
    this._scrollHandlerStrategy = scrollHandlerStrategy;
  }

  static existsIntersectionObserver() {
    return !!window.IntersectionObserver;
  }

  executeStrategy({ images = [], options = {} } = {}) {
    const { existsIntersectionObserver } = LazyLoadImage;

    if (existsIntersectionObserver() && options.interSectionObserverStrategy) {
      new this._interSectionObserverStrategy({ images, options }).initialize();
    } else {
      new this._scrollHandlerStrategy({ images, options }).initialize();
    }
  }
}
