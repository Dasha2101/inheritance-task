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
        this.value *= n
        return this
    }
    divide(n){
        this.value /= n
        this.value = parseInt(this.value)
        return this
    }
    get(){
        return this.value
    }
}

class IntBuilder extends Builder{
    mod(n){
        this.value %= n
        return this
    }

   static random(from, to){
    return Math.round(Math.random() * (to - from) + from)
    }

}

function StringBuilder(value){
   Object.assign(this, new Builder(value))
}

StringBuilder.prototype = Object.create(Builder.prototype)

StringBuilder.prototype.minus = function(n) {
   this.value = this.value.substring(0, this.value.length-n)
   return this
}

StringBuilder.prototype.multiply = function(n){
    this.value = this.value.repeat(n)
    return this
}

StringBuilder.prototype.divide = function(n){
    let k = Math.floor(this.value.length / n)
    this.value = this.value.substring(0, k)
    return this
}

StringBuilder.prototype.remove = function(n){
    this.value = this.value.split(n).join("")
    return this
}

StringBuilder.prototype.sub = function(from, n){
    this.value = this.value.substring(from, from+n)
    return this
}

const build = new IntBuilder()

console.log(IntBuilder.random(10, 100));          // 42;

// let intBuilder = new IntBuilder(10); // 10;
// console.log(intBuilder
//   .plus(2, 3, 2)                     // 17;
//   .minus(1, 2)                       // 14;
//   .multiply(2)                       // 28;
//   .divide(4)                         // 7;
//   .mod(3)                            // 1;
//   .get());

// let strBuilder = new StringBuilder('Hello'); // 'Hello';
//   console.log(strBuilder
//     .plus(' all', '!')                         // 'Hello all!'
//     .minus(4)                                  // 'Hello '
//     .multiply(3)                               // 'Hello Hello Hello '
//     .divide(4)                                 // 'Hell';
//     .remove('l')                               // 'He';
//     .sub(1,1)                                  // 'e';
//     .get());