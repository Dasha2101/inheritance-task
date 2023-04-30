class Builder {
    constructor(value){
        this.value = value

    }
    plus(...n){
        for(let value of n){
            this.value += value
        }
    }
    minus(...n)
    multiply(n)
    divide(n)
    get()
}


class IntBuilder extends Builder{


}



const build = new IntBuilder()