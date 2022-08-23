/*let name={
  firstname:"sonu",
  lastname:"prajapati"

}

var printfullname=function(a,b){
  return(this.firstname+" "+this.lastname+" "+ "age is "+ a+ " hometown is "+b)
}

console.log(printfullname.call(name,26,"mumbai"))
var c=[26,"mumbai"]
console.log(printfullname.apply(name,c))

var d=printfullname.bind(name)
console.log(d(26,"mumbai"))

*/

/*
let multiply=function(x,y){
    return x*y
}

let multiplybytwo=multiply.bind(this,2)
console.log(multiplybytwo(3))


let multiplybythree=multiply.bind(this,3)
console.log(multiplybythree(5))  */


/* second way by closure */
let multiply=function(x){
    return function(y){
      return(x*y)
    }
}

let multiplybytwo2=multiply(2)
console.log(multiplybytwo2(3))

let multiplybythree=multiply(3)
console.log(multiplybythree(5))
