const recursiveFunction = function toTenCounter (start) {
    console.log(start);
        if (start < 10) {
            return toTenCounter(start + 1);
        }
        return;
    }

recursiveFunction(3);

/*this project was pretty straightforward. The task was to create a number
counter that goes to ten starting from a start value (argument value) passed into
it. it was to be done using a recursive function */