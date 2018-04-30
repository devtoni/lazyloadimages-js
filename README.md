Allows you to lazily load your images according to navigator compatibilities using API intersection observer or scroll event.

## Usage

```javascript
npm install --save lazyloading-images
```

## Example

```javascript

import lazyLoadHandler from 'lazyloading-images'

const images = document.querySelectorAll('img')
const options = {
  lazySrcAttribute: 'src',
  lazyLoadedClassName: 'loaded',
  intersectionObserverStrategy: true, //
  observerOptions: {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
}

lazyLoadHandler().executeStrategy({ images, options })

```

## API

```javascript

lazySrcAttribute: String // The name of the data attribute, for example --> lazySrcAttribute: 'lazy' will be data-lazy,
lazyLoadedClassName: String // The className applied when your image is loaded,
intersectionObserverStrategy: Boolean, //enable or disable intersection observer strategy
observerOptions: {   // intersection observer options
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

```
