let score = "33aba"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN


//"33" =>33
//"33aba" => NaN
// true => 1; false => 0


// conversion of 1 
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true;
//0 => false;
//"" => false
//"piyush" =>true

let number= 33
let stingNumber = String(number)
console.log(stingNumber);
console.log(typeof stingNumber);

// ********** Operations ******************

let value = 3
let negValue = -value
console.log(negValue);  //negative value

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//power
console.log(2/2);
console.log(2%3);


let str1="hello"
let str2=" Piyush"

let str3= str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 +"2");//12

console.log("1" + 2 +2); //122

console.log(1 + 2 + "2"); //32
