class Builder {
    constructor(value){
        this.value = value

    }
    plus(...n){
        for(let value of n){
            this.value += value
        }
        return this
    }
    minus(...n){
        for(let value of n){
            this.value -= value
        }
        return this
    }
    multiply(n){
        this.value *= value
        return this
    }
    divide(n){
        this.value /= value
        this.value = parseInt(this.value)
        return this
    }
    get(){
        return this.value
    }
}


class IntBuilder extends Builder{
    mod(n){
        this.value %= value
        return this
    }

   static random(from, to){
    return Math.round(Math.random() * (to - from) + from)
    }

}



const build = new IntBuilder()