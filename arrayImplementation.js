class Array{
    constructor(){
        this.data = {}
        this.length = 0
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
    }

    pop(){
        delete this.data[this.length - 1]
        this.length--
    }

    unshift(item){
        this.unshiftFromStart()
        this.data[0] = item
        this.length++
    }

    unshiftFromStart() {
        for (let i = this.length; i > 0 ; i--) {
            this.data[i] = this.data[i-1] 
        }
    }

    shift(){
        delete this.data[0]
        this.shiftFromStart()
    }

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