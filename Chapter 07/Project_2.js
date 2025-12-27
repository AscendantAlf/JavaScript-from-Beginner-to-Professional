class Menu {
    #price1 = 6;
    #price2 = 4;
    constructor(quantity1, quantity2) {
        this.quantity1 = quantity1;
        this.quantity2 = quantity2;
    }
    totalcost () {
        return (this.quantity1 * this.#price1) + (this.quantity2 * this.#price2);
    }
    
    get total() {
        return this.totalcost();
    };
}


let Tom = new Menu (5, 7);
let Jerry = new Menu (10, 12);
let Frank = new Menu (7, 31);


console.log(Tom, Tom.totalcost());
console.log(Jerry, Jerry.totalcost());
console.log(Frank, Frank.totalcost());

/* mostly straightforward. I had to make a class that not only took two inputs
into the constructor, but that was also be able to use those in inputs in 
calculations ("menu items price calculator"). to do that, I made two private (instructions)
"field"/"property" declarations and made a function to get the total cost. I had to use
get (getter) to be able to grab private values. */