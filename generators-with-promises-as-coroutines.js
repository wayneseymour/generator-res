// From https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
const url = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`

import fetch from 'node-fetch'

function* generateQuoteFetcher() {
  const response = yield fetch(url) // Fetch returns a promise (normally using async/await nowadays
  const quote = yield response.json(); // Response extends, BodyMixin.json(), another promise.
  return `${quote.quoteText} -${quote.quoteAuthor}`
}

const coroutine = generator => {
  const iterator = generator()

  const handle = result => {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then(function handleNotDone(res) {
      return handle(iterator.next(res))
    })
  }

  return handle(iterator.next());
}

const quoteFetcher = generateQuoteFetcher();
quoteFetcher.next().value
  .then(res => quoteFetcher.next(res).value)
  .then(res => quoteFetcher.next(res).value)
  .then(quote => console.log(`\n### quote: \n\t${quote}`))
  .catch(err => console.error(err))

const handledQuoteFetcher = coroutine(generateQuoteFetcher)
handledQuoteFetcher.then(quote => console.log(`\n### quote: \n\t${quote}`))
