import { LazyLoadImage } from './LazyLoadImage';
import { IntersectionObserverStrategy } from './strategies/IntersectionObserverStrategy';
import { ScrollHandlerStrategy } from './strategies/ScrollHandlerStrategy';

export class Factory {
  static lazyLoadImage() {
    return new LazyLoadImage({
      interSectionObserverStrategy: IntersectionObserverStrategy,
      scrollHandlerStrategy: ScrollHandlerStrategy
    });
  }
}
