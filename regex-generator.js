function* regexGenerator(src, regex) {
  let match = null;

  while (match = regex.exec(src)) if (match) yield match
}

const nameAfterAtSign = /@(\w+)/g;
const x = 'this is a test with @tre and @rashmi, and @dima';

const iterator = regexGenerator(x, nameAfterAtSign);

const head = iterator.next();
console.log(`\n### head: \n${JSON.stringify(head, null, 2)}`);
console.log(`\n### iterator.next(): \n${JSON.stringify(iterator.next(), null, 2)}`);
console.log(`\n### iterator.next(): \n${JSON.stringify(iterator.next(), null, 2)}`);
console.log(`\n### iterator.next(): \n${JSON.stringify(iterator.next(), null, 2)}`); // done: true
