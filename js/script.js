 var sayMyName = function(name){
  alert('my name is: '+name)
 }



 var car ={
        make:'Honda',
        type: 'C-RV',
        color: 'green',
        isTurnedOn: false,
        numberOfWheels: 4,
        seats: [
                'seat 1',
                'seat 2', 
                'seat 3', 
                'seat 4'],
        turnOn: function (){
          this.isTurnedOn = true;
        },
        fly: function (){
          alert('fly');
        },
        switchCar: function (isOn){
          console.log('turn car '+isOn);
          if (isOn == true){
            this.isTurnedOn = true;
          } else{
            this.isTurnedOn = false;
          }
        },
      };
    console.log('hello there friends!');

