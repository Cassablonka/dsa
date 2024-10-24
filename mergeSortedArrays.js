const array1 = [0,7,9]
const array2 = [3,5]

function mergeSortedArrays(arr1, arr2) {
    let i = 0
    let j = 0
    let sortedArr = []
    while (i < arr1.length || j < arr2.length) {
        if (!arr2[j] || arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i])
            i++
        }else{
            sortedArr.push(arr2[j])
            j++
        }
    }
    return sortedArr
}


const result = mergeSortedArrays(array1, array2)
console.log(result);