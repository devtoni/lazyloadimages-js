import puppeteer from 'puppeteer'

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser
let page
let logs = []
let errors = []
beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging())
  page = await browser.newPage()

  page.on('console', c => {
    logs.push(c.text())
  })
  page.on('pageerror', e => errors.push(e.text))

  await page.goto('http://localhost:8080/scroll')
  page.setViewport({ width: 500, height: 900 })
})

describe('on page load', () => {
  test('h1 loads correctly', async () => {
    const html = await page.$eval('h1', h1 => h1.innerHTML)
    expect(html).toBe('Hola!')
  })
})

describe('images on scroll strategy..', () => {
  test('images with data-src will be setted in its src with the data-src value', async () => {
    const imagesDataSrc = await page.$$eval('img', images => {
      return images.map(image => image.dataset['src'])
    })

    await page.evaluate(() => {
      var body = document.body,
        html = document.documentElement

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      window.scrollTo(0, height)
    })

    await page.waitFor(2000)

    const imagesSrc = await page.$$eval('img', images => {
      return images.map(image => image.src)
    })
    expect(imagesSrc[4]).toEqual(imagesDataSrc[4])
  })

  test('images loaded will have a class loaded', async () => {
    await page.evaluate(() => {
      var body = document.body,
        html = document.documentElement

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      window.scrollTo(0, height)
    })

    await page.waitFor(2000)

    const imagesFilter = await page.$$eval('img', images => {
      return images.some(image => image.classList.contains('loaded'))
    })

    expect(imagesFilter).toBe(true)
  })
})

afterAll(() => {
  if (isDebugging()) {
    browser.close()
  }
})
