let s1 = new Set([1, 2, 3, 5, 5, 6, 7])
console.log(s1)
s1.add(4)
console.log(s1)
s1.delete(7)
console.log(s1)
s1.clear()
console.log(s1.size)
console.log(s1)
s1 = new Set([1, 2, 3, 5, 5, 6, 7])
let s2 = new Set([1, 2, 9, 10, 24, 5])
let s3 = new Set([99, 100, 124])
let s4 = new Set([1, 2, 3])
console.log(s1.difference(s2))
console.log(s1.intersection(s2))
console.log(s1.isSupersetOf(s4))
console.log(s1.isSubsetOf(s3))
console.log(s1.isDisjointFrom(s3))