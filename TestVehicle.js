const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
let flemcar = new Vehicle(8,20,20,25,0);

let hoogadiboogadie = new Vehicle (8,10,10,100,0);
console.log(flemcar.totalMiles());
flemcar.drive(3);
console.log(flemcar.totalMiles());
console.log(flemcar.fuelLeft());




}
//run the main method
main();
