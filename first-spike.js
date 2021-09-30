function* foo() {
  yield 'a';
  yield 'b';
  yield 'c';
}

const foogee = foo();

console.log('getting the first value');
console.log(foogee.next());
console.log('getting the next value');
console.log(foogee.next());
console.log('getting the next value');
console.log(foogee.next());
console.log('getting the next value');
console.log(foogee.next());
