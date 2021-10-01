function* upDown(arg) {
  const newNum = yield arg;
  yield 5 + newNum;
}



const iterator = upDown(2);

// If you pass a value to next() here, it gets thrown away,
// but it does not get thrown away on subsequent calls to next().
const head = iterator.next();
console.log(`\n### head: \n${JSON.stringify(head, null, 2)}`);
console.log(`\n### iterator.next(): \n${JSON.stringify(iterator.next(1000), null, 2)}`);
console.log(`\n### iterator.next(): \n${JSON.stringify(iterator.next(), null, 2)}`);
