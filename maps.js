let map = new Map()

map.set('Name', 'Roxas')
map.set('Age', 18)
console.log(map.get('Name'))
console.log(map.size)

console.log('For OF')
for (let [key, val] of map) {

  console.log(key)
  console.log(val)
}

map.delete("Age")
console.log(map.size)
// Deletes entire Map
map.clear()
console.log(map.size);

map.set('bread', 2)
map.set('egg', 12)
map.set('fruits', 6)

function stockLogger(val, key, map, quantity) {
  console.log(`${key} : ${val}`)
}

map.forEach(stockLogger);

console.log(map.has('eggs'))
console.log(map.has('butter'))


for (const key of map.keys()) {
  console.log(key)
}