let start = 10;

function firstCountdown(value) {
    console.log(value);
    if (value < 1) {
        return;
        }
    firstCountdown(value - 1);
    }

firstCountdown(start);

function secondCountdown (value) {
    if (value > 0) {
    value--;
    return secondCountdown(value);
}
    return;
}

secondCountdown(start);