// import the module (just a function) exported in multi.js
const mult = require('./multi');

const a = 15;
const b = 26;
test(`${a} times ${b} should equal ${a * b}`, () => expect(mult(a, b)).toBe(a * b));