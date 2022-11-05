class man {
    constructor(name,age,work){
    this.name=name,
    this.age=age,
    this.work=work
}
getDetails (){
    return (`The name is ${this.name} and age ${this.age} Work is ${this.work}`)
}
}
let man1 =new man("asfer","21","fsd")
let man2 =new man("mohammed","29","self employed")
let man3 =new man("virat","28","cricket")
let man4 =new man("ronaldo","40","football")
console.log(man1.getDetails())
console.log(man2.getDetails())
console.log(man3.getDetails())
console.log(man4.getDetails())