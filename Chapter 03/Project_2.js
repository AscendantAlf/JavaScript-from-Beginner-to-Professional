const productCatalog = [];

let amdGPU = {
    name: "Radeon",
    model: "9070 XT",
    cost: 700,
    quantity: 100,
};

let nvidiaGPU = {
    name: "RTX",
    model: "5080",
    cost: 1300,
    quantity: 75,
};

let intelGPU = {
    name: "ARC",
    model: "B580",
    cost: 350,
    quantity: 50,
};

productCatalog.splice(0, 0, amdGPU, nvidiaGPU, intelGPU);

console.log(productCatalog);

console.log(productCatalog[2].quantity);

/* pretty simple. the goal was to append objects
into an empty array and then pull a specific
property from the third object (index 2) */