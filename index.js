// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
  const firstTwoDrivers = drivers.slice(0,2)
    return firstTwoDrivers;
}

function returnLastTwoDrivers(){
  const lastTwoDrivers = drivers.slice(2,4)
   return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(integer){
  return function (){
    return integer * integer;
  };
}

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;


function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers);
}

// console.log(returnFirstTwoDrivers(drivers))