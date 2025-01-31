//console.log(2 > 1);
//console.log(2 >=1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);


console.log(null > 0); //false
console.log(null == 0); //false

console.log(null >= 0); //true

//the equality check == and comparisons > < ,>=,<= work differently
//Comparisons convert null to a number, treating it as 0.
//That's why(3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0); //false

// === its check datatype and values both


console.log("2" === 2); //false
console.log("2" === "2"); //true bcaz same data type and value
console.log("2" === "3"); //false bcaz different values but same data types (string)