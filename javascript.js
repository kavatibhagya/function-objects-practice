let position = {
    x : 10,
    y : 20,
    print: function(){
        console.log(`X: ${this.x}, Y: ${this.y}`);
    
    },
    myObject: {sweetproperty: "hello friends"}


    


}
 let myPosition = position;
console.log(position);
console.log(myPosition);

myPosition.x = 25;

console.log(myPosition)
position.print();
console.log(position.myObject.sweetproperty)