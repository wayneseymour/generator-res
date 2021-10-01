// From https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
const url = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`

import fetch from 'node-fetch'
import co from 'co';

function* generateQuoteFetcher() {
  const response = yield fetch(url) // Fetch returns a promise (normally using async/await nowadays
  const quote = yield response.json(); // Response extends, BodyMixin.json(), another promise.
  return `${quote.quoteText} -${quote.quoteAuthor}`
}

const handledQuoteFetcher = co(generateQuoteFetcher)
handledQuoteFetcher.then(quote => console.log(`\n### quote: \n\t${quote}`))
