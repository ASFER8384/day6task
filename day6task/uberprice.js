class uberprice{
    constructor(kilometer,driverdelay,coustomerdelay,name){
        this.kilometer=kilometer,
        this.driverdelay=driverdelay,
        this.coustomerdelay=coustomerdelay,
        this.name = name
    }
    getPrice(){
       let result = (this.kilometer *10) + (this.driverdelay * 5) - (this.coustomerdelay*10)
       return (`Mr. ${this.name} The price of your ride is ${result}`)
    }
}
let asfer = new uberprice(10,5,1,"Asfer")
let mohammed = new uberprice(100,20,20,"Mohammed")
let virat = new uberprice(500,10,18,"Virat")
let ronaldo = new uberprice(1000,15,14,"Ronaldo")
let messi = new uberprice(380,25,10,"Messi")


console.log(asfer.getPrice())
console.log(mohammed.getPrice())
console.log(virat.getPrice())
console.log(ronaldo.getPrice())
console.log(messi.getPrice())