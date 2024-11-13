class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoubleLinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value){
        let newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
    }

    printList(){
        let arr = []
        let currentNode = this.head
        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(arr);
    }

    insert(index, value){
        const newNode = new Node(value)
        if (index >= this.length) {
            this.append(value)
            this.length++
            return this
        }
        if (index === 0) {
            this.prepend(value)
            this.length++
            return this
        }
        let leadNode = this.traverseNode(index-1)
        let followerNode = leadNode.next
        newNode.prev = leadNode
        newNode.next = followerNode
        leadNode.next = newNode
        followerNode.prev = newNode
        this.length++
    }


    remove(index){
        let leadNode = this.traverseNode(index-1)
        if (index === this.length - 1) {
            leadNode.next = null
            this.length--
            return this
        }
        let removalNode = leadNode.next
        let followerNode = removalNode.next
        leadNode.next = followerNode
        followerNode.prev = leadNode
        this.length--
        return this
    }

    traverseNode(index){
        let count = 0
        let currentNode = this.head
        while (count < index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }
}


const newDoublyList = new DoubleLinkedList(20)

newDoublyList.append(6)
newDoublyList.append(1996)
newDoublyList.prepend('June')
newDoublyList.prepend('in')
newDoublyList.prepend('born')
newDoublyList.prepend('was')
newDoublyList.prepend('Cassablonka')
newDoublyList.append('Year')
newDoublyList.insert(1, 'Pimpalapure')
newDoublyList.insert(20, 'I am')

newDoublyList.printList()

