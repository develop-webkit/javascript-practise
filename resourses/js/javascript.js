"use strict";


function midpoint(){
    return (
        (Math.min.apply(null ,arguments) + Math.max.apply(null ,arguments)) / 2
    );
}


console.log(midpoint(1,23,4,5,6));