let sym = Symbol()
let sym1 = Symbol('Red')
let sym2 = Symbol('Red')

console.log(sym);
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2)

let sym3 = Symbol.for('Blue')
let sym4 = Symbol.for('Blue')
console.log(sym3 === sym4)