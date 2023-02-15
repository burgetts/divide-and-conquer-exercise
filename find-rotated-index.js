function findRotatedIndex(arr, val, i=0) {
    // base case
    if (i === arr.length) return -1
    // normal case
    if (arr[i] === val) return i
    return findRotatedIndex(arr, val, i+1)
}

module.exports = findRotatedIndex