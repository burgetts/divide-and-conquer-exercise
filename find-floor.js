function findFloor(arr, val, i=0) {
    // if greater than val, return last
    if (i === arr.length){
        if (arr[i-1] < val){
            return arr[i-1] 
        } 
    } 
    // normal case
    if (arr[i] > val) return arr[i-1] || -1
    if (arr[i] === val) return arr[i]
    return findFloor(arr, val, i+1)
}

module.exports = findFloor