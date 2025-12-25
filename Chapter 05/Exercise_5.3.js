const myWork = [];

for (let i = 1; i <= 10; i++) {
    let status = i % 2 ? true: false;
    let lessonclass = {
        name: `Lesson ${i}`, Returning: status
    };
    myWork.push(lessonclass);
}

console.log(myWork);

/* exercise was to use a for loop to push
objects into an empty array */