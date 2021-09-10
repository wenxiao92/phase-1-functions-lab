// Code your solution in this file!
let someValue;

function distanceFromHqInBlocks(someValue) {
    if(someValue > 42) {
        return someValue - 42;
    }
        else {return 42 - someValue;
        }
}

function distanceFromHqInFeet(someValueFt) {
    if(someValueFt > 42) {
        return (someValueFt - 42) * 264;
    }
        else {return (42 - someValueFt) * 264;
        }
}

function distanceTravelledInFeet(begin, end) {
    if(begin > end) {
        return (begin - end) * 264;
    } 
        else {return (end - begin) * 264; 
        }
}

function calculatesFarePrice(start, destination) {
    if(Math.abs(start-destination) * 264 < 400) {
        return 0;
    }
    
    else if(Math.abs(start-destination) * 264 > 400 && Math.abs(start-destination) * 264 < 2000) {
        return ((Math.abs(start-destination) * 264) - 400) * .02;
    }
    else if(Math.abs(start-destination)* 264 > 2000 && Math.abs(start-destination) * 264 < 2500) {
        return 25;
        }
    else if(Math.abs(start-destination) * 264 > 2500)
        {return 'cannot travel that far';
    }

}