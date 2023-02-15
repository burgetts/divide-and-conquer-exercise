function sortedFrequency(arr, val, i=0, count=0) {
    if (i === arr.length) return count || -1
    if (arr[i] === val) count++
    return sortedFrequency(arr, val, i+1, count)
}  

module.exports = sortedFrequency