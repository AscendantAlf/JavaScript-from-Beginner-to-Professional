const grid = [];
const cells = 64;

counter = 0;

let rows;

for (let i = 0; i < cells + 1; i++) {
    if (counter % 8 === 0) {
        if (rows != undefined) {
            grid.push(rows);
        }
        rows = [];
    }
    counter++;
    let temp = counter;
    rows.push(temp);
}

console.table(grid);

/* exercise was to create a grid, in which we create
8 columns of 8 values each, for a total grid of
64 cells. (counter % 8 === 0) enables us to have the 9th value of i (
not 8th value since i starts at 0)) be the start of each new row, so
each column has 8 values because we are pushing the counter to the
rows array (temp variable). cells + 1 was needed in the for loop,
so we could include the 64th value in the grid. */