class ArrayStack {
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length - 1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        this.array.pop()
        return this
    }
}

const newArrayStack = new ArrayStack()
newArrayStack.push('facebook')
newArrayStack.push('amazon')
newArrayStack.push('apple')
newArrayStack.push('netflix')
newArrayStack.pop()
newArrayStack.pop()
newArrayStack.pop()
console.log(newArrayStack);
