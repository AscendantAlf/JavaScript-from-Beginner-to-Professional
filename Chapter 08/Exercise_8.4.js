const sentence = "thIs will be capiTalized for each word";

function Captialize (string) {
    string = string.toLowerCase();
    const tempArray = [];
    let words = string.split(" ");
    words.forEach(word => {
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
        tempArray.push (temp); 
    });
    return tempArray.join(" ");
}

console.log(Captialize(sentence));

/* using a series of string methods to take a sentence and capitalize each word
in the sentence */