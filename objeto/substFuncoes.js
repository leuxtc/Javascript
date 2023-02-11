String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Eu leonardo'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([0, 1, 2, 3].first())
console.log(['a', 'b', 'c'].first())
