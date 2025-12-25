const texasStore = {
    location: "Texas",
    revenue: 720000,
    customerCount: 1000,
}

for (let prop in texasStore) {
    console.log(prop);
    console.log(texasStore[prop]);
}

const texasStoreArray = ["location", "revenue", "customerCount" ]

for (let properties in texasStoreArray) {
    console.log(properties, texasStoreArray[properties]);
}

/* Exercise is to practice using for in loops */