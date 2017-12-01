var car = {make:"Nissan", model:"Sentra", color:"Black", year:"2007",
    carInfo: function(){
        return this.make + " " + this.model + " " + this.color + " " + this.year
    }
     }


function peformance() {
  var currentSpeed = 0;
  return {
    getSpeed: function() { return currentSpeed; },
    accelerate: function() { currentSpeed += 10; },
    break: function() {
        if (currentSpeed < 7) {
            currentSpeed--;
        } else {
            currentSpeed -= 7;
        }
    }
  }
}

var speed = peformance()

speed.getSpeed()
speed.accelerate()
speed.break()



while (speed.getSpeed() < 50) {
    {console.log
        (speed.accelerate());
    }
}

while (speed.getSpeed() > 0) {
    {console.log
        (speed.break());
    }
}
