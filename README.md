Allows you to lazily load your images according to navigator compatibilities using API intersection observer or scroll event.

WiP!

### Usage

```javascript

npm install --save lazyloading-images
```


### Example
```javascript
import lazyLoadHandler from 'lazyloading-images'

const images = document.querySelectorAll('img')
const options = {
  lazySrcAttribute: 'lazy-load-src',
  lazyLoadedClassName: 'loaded',
  observerOptions: {}
}

lazyLoadHandler.executeStrategy({ images, options })

```



