class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        return this.first
    }

    enqueue(value){
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
            this.length++
            return this
        }
        this.last.next = newNode
        this.last = newNode
        this.length++
        return this
    }

    dequeue(){
        this.first = this.first.next
        this.length--
    }
}


const newQueue = new Queue()
newQueue.enqueue('Cassa')
newQueue.enqueue('Blonka')
newQueue.enqueue('Steve')
newQueue.enqueue('Jobs')
newQueue.dequeue()
newQueue.dequeue()
newQueue.dequeue()

console.log(newQueue);