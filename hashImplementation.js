// HashMap Implementation
class HashMap{
    constructor(size){
        this.data = new Array(size)
    }

    // hashing function to create unique hashes for each new key
    _hash(key){
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    // set up input based key value pair in a HashMap
    set(key,value){
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
    }

    // access the value of a given key in a HashMap
    get(key){
        let address = this._hash(key)
        let currentBlock = this.data[address]
        if (currentBlock) {
            for (let i = 0; i < currentBlock.length; i++) {
                if (currentBlock[i][0] === key) {
                    return currentBlock[i][1]
                }                
            }
        }
        return undefined
    }

    // to view the HashMap
    viewMap(){
        console.log(this.data)
    }
}

const newHashMap = new HashMap(20)
newHashMap.set('Cassa', 28)
newHashMap.set('Steve', 58)
newHashMap.set('Elon', 52)
newHashMap.viewMap()

newHashMap.get('Steve')