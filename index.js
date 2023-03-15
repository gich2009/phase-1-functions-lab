// Code your solution in this file!
function distanceFromHqInBlocks(start, destination = 42){ 
  let distanceInBlocks = Math.abs(start - destination);
  return distanceInBlocks;
}

function distanceFromHqInFeet(start, destination = 42){
  const scalingFactor = 264;
  let distanceInBlocks = distanceFromHqInBlocks(start, destination);
  return distanceInBlocks * scalingFactor;
}

function distanceTravelledInFeet(start, destination){
  return distanceFromHqInFeet(start, destination);
}

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  let farePrice;


  if (distanceInFeet <= 400){
    farePrice = 0;
    return farePrice;
  }

  
  if (distanceInFeet > 400 && distanceInFeet <= 2000){
    distanceInFeet -= 400;
    const costPerFootInCents = 2;
    const centsToDollarsFactor = 0.01;
    farePrice = (costPerFootInCents * distanceInFeet) * centsToDollarsFactor;
    return farePrice;
  }

  
  if (distanceInFeet > 2000 && distanceInFeet <= 2500){
    farePrice = 25;
    return farePrice;
  }

  return "cannot travel that far";
}