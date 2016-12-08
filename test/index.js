import test from 'ava'
import Nightmare from 'nightmare'
import express from 'express'

const app = express()
app.use('/', express.static(process.cwd()))

let server

test.cb.before(t => server = app.listen(9000, t.end))

test.after(() => server.close())

async function calculateSize (text, options) {
  const nightmare = Nightmare()

  const url = 'http://localhost:9000/test/resources/index.html'

  return nightmare
    .goto(url)
    .wait('#ready')
    .evaluate((text, options) => calculateSize(text, options), text, options)
    .end()
}

test('one word', async t => {
  const { width, height } = await calculateSize('Hello')

  t.is(width, 36)
  t.is(height, 18)
})

test('two words', async t => {
  const { width, height } = await calculateSize('Hello world!')

  t.is(width, 82)
  t.is(height, 18)
})

test('different font family', async t => {
  const { width, height } = await calculateSize('Hello world!', {
    font: 'Verdana'
  })

  t.is(width, 96)
  t.is(height, 19)
})

test('different font size', async t => {
  const { width, height } = await calculateSize('Hello world!', {
      fontSize: '40px'
  })

  t.is(width, 206)
  t.is(height, 46)
})

test('bold text', async t => {
  const { width, height } = await calculateSize('Hello world!', {
    fontWeight: 'bold'
  })

  t.is(width, 86)
  t.is(height, 18)
})

test('with fixed width', async t => {
  const { width, height } = await calculateSize('This is a very long text with a constraint width', {
    width: '100px',
  })

  t.is(width, 100)
  t.is(height, 72)
})
