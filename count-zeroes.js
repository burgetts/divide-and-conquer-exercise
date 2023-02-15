// completed this exercise using recursion
function countZeroes(arr, i=0) {
    // base case
    if (i === arr.length) return 0
    // normal case
    if (arr[i] === 0) return (arr.length -  i)
    return countZeroes(arr, i+1)
}

module.exports = countZeroes