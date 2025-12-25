const myTable = [];
let rows;
let columns;

rows = prompt("Enter the number of rows you want in your table");
rows = Number(rows);

columns = prompt("Enter the number of columns you want in your table");
columns = Number(columns);

incrementvalue = prompt("How much do you want each value to increase by in the table?");
incrementvalue = Number(incrementvalue);

counter = 0;

for (let i = 0; i < rows; i++) {
    let tempTable = [];
    for (let j = 0; j < columns; j++) {
        counter = counter + incrementvalue;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}

console.table(myTable);

/*table generator exercise. I think .log
looks cleaner in this case since it doesn't
show you the index values and just shows you
the numbers, but the instructions said .table */