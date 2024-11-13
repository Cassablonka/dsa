class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
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
        return arr
    }

    insert(index, value){
        const newNode = new Node(value)
        let leadNode = this.traverseNode(index - 1)
        let followerNode = leadNode.next
        leadNode.next = newNode
        newNode.next = followerNode
        this.length++
        return this
    }

    remove(index){
        let leadNode = this.traverseNode(index - 1)
        let removalNode = leadNode.next
        leadNode.next = removalNode.next
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

    reverse(){
        let first = this.head
        this.tail = this.head
        let second = first.next
        while (second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this
    }
}

const linkedList = new LinkedList(20)
linkedList.append(6)
linkedList.append('Cassa')
linkedList.append('First')
console.log(linkedList.printList());
console.log(linkedList.reverse());