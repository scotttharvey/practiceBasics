//Create a car object. There should be a speed property with a numerical value and an increaseSpeed method.
//The increaseSpeed method will increase the speed by 5.
var car = {
  speed: 60,
  increaseSpeed: function(){
    return this.speed + 5
  }
}

//Invoke the method to increase the speed of the car.

car.increaseSpeed()

//Write a function that will increase the speed by any amount on any object.
var anySpeed = function(speed){
  return car.speed + speed
}


//Add that function as a method on the car object. Then invoke it with any number as the argument.
car.moreSpeed = function(num){
  anySpeed(num);
}

console.log(car.moreSpeed(20));


//Create 10 cars, where each car has a color and number. The cars should be numbered in order from 0 to 9. The cars from 0 to 4 should be colored "green" and
//the cars from 5 to 9 should be colored "blue". Place the cars in order in an array called carGarage.
//HINT: Use a constructor function and the keyword this. Don't just write out 10 car objects!

function Car(color, number) {
  this.color = color,
  this.number = number
}
var carGarage = [
 car1 = new Car("green", 0),
 car2 = new Car("green", 1),
 car3 = new Car("green", 2),
 car4 = new Car("green", 3),
 car5 = new Car("green", 4),
 car6 = new Car("blue", 5),
 car7 = new Car("blue", 6),
 car8 = new Car("blue", 7),
 car9 = new Car("blue", 8),
 car10 = new Car("blue", 9)
];
