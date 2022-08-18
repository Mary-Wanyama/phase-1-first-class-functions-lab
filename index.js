// Code your solution in this file!
let arr = ['Billy', 'Broddy', 'Jack', 'Nate', 'Dakota'];

const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}
const returnLastTwoDrivers = function(arr) {
    return arr.slice(arr.length-2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply){
    
    return num => multiply * num 
}

 function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
 }
 function fareTripler(createFareMultiplier) {

    return createFareMultiplier * 3
 }

const selectDifferentDrivers = function(arr, returnTwoDrivers) {
    return returnTwoDrivers(arr);
}
