class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedListStack{
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
            this.length++
            return this
        }else{
            let topNode = this.top
            this.top = newNode
            this.top.next = topNode
            this.length++
            return this
        }
    }

    pop(){
        this.top = this.top.next
        this.length--
        return this
    }
}

const newStack = new LinkedListStack()
newStack.push('Cassa')
newStack.push('20')
newStack.push('06')

console.log(newStack.peek());