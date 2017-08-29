let vehicle = function(e,f,g, mpg,d){
  let engine = e;
  let fuel = f;
  let gastank = g;
  let averageMPG = mpg;
  let milesDriven = d;
}

function totalMiles(){
  return milesDriven;
}

function fuelLeft(){
  return fuel;
}

function fill(percent){
  fuel += percent;
  if(fuel > 1){
    fuel = 1;
  }
}

function drive(hours){
  milesDriven += (hours*averageMPG);
  fuel -= hours*engineEfficiency();
  if(fuel <= 0){
    
  }
}

function engineEffiiency(){
  if(engine = 4){
    return 1;
  }
  else if(engine = 6){
    return 1.2;
  }
  else if(engine = 8){
    return 1.36;
  }
  else{
    return null;
    console.log("number of cylinders nonexistent")
  }
}
