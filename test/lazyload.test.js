import puppeteer from 'puppeteer'

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

describe('on page load', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch(isDebugging)
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    })
    await page.goto('http://localhost:8080/')
    const html = await page.$eval('h1', h1 => h1.innerHTML)
    expect(html).toBe('Hola!')
    browser.close()
  })
})
