const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{"a": 1.5, "b": [{"a": 2}], "c": {}, "d": "D"}'))