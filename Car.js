nvar car = {make:"Nissan", model:"Sentra", color:"Black", year:"2007",
    carInfo: function(){
        return this.make + " " + this.model + " " + this.color + " " + this.year
    }
     }

var currentSpeed = 0; // moved currents speed outside the function
function peformance() {

  return {
    getSpeed: function() { return currentSpeed; },
    accelerate: function() { currentSpeed += 10;
                return currentSpeed},
    break: function() {
        if (currentSpeed < 7) {
            currentSpeed--;
        } else {
            currentSpeed -= 7;
        }
        if (currentSpeed < 0 ) { // added an if statements
            currentSpeed = 0     //!currentspeed = !0
        }
        return currentSpeed;
    }
  }
}

var speed = peformance()





while (speed.getSpeed() < 80) {
    {console.log
        (speed.accelerate());
    }
}

while (speed.getSpeed() > 0) {
    {console.log
        (speed.break());
    }
}
//
//

function createCar(model_year, make ,color){
  var speed = 0
  return{
    model_year: model_year,
    make: make,
    color: color,
    carInfo: function(){ console.log("This care is a " + color + make + model_year)
  },

  getSpeed: function() {console.log(speed)},
  accelerate: function() {speed += 10},
  break: function() {speed =-7},
  }
}
function giddyUp(car){
  while (car.getspeed() < 70){
    car.accelerate()
  }
}

var car = createCar("82", "Deleroian", "Green")
var car2 = createCar("98", "Geo", "Pink")
