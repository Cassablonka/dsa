// Required Problems - Given a Array, Find pairs of element that add up to a certain Target

// A function that will take a Array and a Target

// Brute Force Method
// Time Complexity - O(n^2)
function pairsOfSum(arr, sum) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]]
            }
        }
    }
    return false
}

// Optimal Solution
// Time Complexity - O(n)
function pairsOfSumAlternate(arr,sum){
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const compliment = sum - arr[i]
        if (map.get(arr[i]) !== undefined) {
            return [map.get(arr[i]), i]
        }else{
            map.set(compliment, i)
        }
    }
}

const array1 = [2,5,7,8,10]
const target = 9

const result = pairsOfSumAlternate(array1, target)
console.log(result);


// Trick to solve these type of questions is to save its Compliment in a Map or an Object
// then search if the element from the array exists as a property in the saved map/object