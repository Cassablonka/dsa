// Array Implementation

class Array{
    constructor(){
        this.data = {}
        this.length = 0
    }

    // to look for the element at the given index
    get(index){
        return this.data[index]
    }

    // to push a new element at the end of an array
    push(item){
        this.data[this.length] = item
        this.length++
    }

    // to remove an element at the end of an array
    pop(){
        delete this.data[this.length - 1]
        this.length--
    }

    // to insert a new element at the start of an array
    unshift(item){
        this.unshiftFromStart()
        this.data[0] = item
        this.length++
    }

    // function to shift array elements away from the start
    unshiftFromStart() {
        for (let i = this.length; i > 0 ; i--) {
            this.data[i] = this.data[i-1] 
        }
    }

    // to remove an element from the start of an array
    shift(){
        delete this.data[0]
        this.shiftFromStart()
    }

    // function to shift element towards the start
    shiftFromStart() {
        for (let i = 0; i < this.length - 1 ; i++) {
            this.data[i] = this.data[i+1]
        }
        this.pop()
    }
}


const newArr = new Array()
newArr.push('Python')
newArr.push('C++')
newArr.push('Golang')
newArr.push('Javascript')
newArr.shift()
newArr.unshift('Java')