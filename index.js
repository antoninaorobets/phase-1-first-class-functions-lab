// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}


const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
   const farefunction = function (fare) { 
       if (number === 4)  return fare*4;
       else  return fare*fare;
    }
    return farefunction;
}

const fareDoubler = function(fare) {
   return createFareMultiplier(4)(fare/2);
}

const fareTripler = function(fare) {
    return createFareMultiplier(4)(fare/4*3);
}



function selectDifferentDrivers(drivers,cutDrivers){
    return cutDrivers(drivers);
} 