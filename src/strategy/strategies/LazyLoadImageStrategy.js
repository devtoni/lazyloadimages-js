export class LazyLoadImageStrategy {
  _attachEvent() {
    throw new Error('_attachEvent must be implemented!');
  }
  _dettachEvent() {
    throw new Error('_dettachEvent must be implemented!');
  }
  _loadImage(
    image,
    {
      options: { lazySrcAttribute, lazyLoadedClassName }
    }
  ) {
    image.setAttribute('src', image.dataset[lazySrcAttribute]);
    image.onload = () => {
      image.classList.add(lazyLoadedClassName);
    };
  }
  _elementToArray(element) {
    return [].slice.call(element);
  }
  initialize() {
    throw new Error('initialize must be implemented!');
  }
}
