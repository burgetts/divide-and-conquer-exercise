function findRotationCount(arr, i=arr.length-2, rotationCount=0) {
    // base case
    if (i < 0) return rotationCount
    // normal case
    if (arr[i] > arr[arr.length-1]) rotationCount++
    return findRotationCount(arr, i-1, rotationCount)
}

module.exports = findRotationCount
