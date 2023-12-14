//Number
let myCash = 20 * 5 / 2 + 30
console.log(myCash)

//Boolean
let myMoney = 10000 == "1000"
console.log(myMoney)

//Strings
let myName = "Best"
myWife = "Mira"

console.log(myName)

//if else

let isEven = (number) =>{
    if (number < 0) return "Number is Negative";
    else if (number == 0) return "Number is Even";
    else if (number == 1) return "Number is Odd";
    else return isEven (number - 2);
}
console.log(isEven(-50));
console.log(isEven (75));
console.log(isEven(88))

//for loop

for (let y = 0; y <= 10; y++){
    console.log(y)
}

//function

function familyAge (mira, Ufee){
console.log(mira + Ufee)
}
familyAge (29, 1)

//function with different argument

function add() {
    console.log(arguments);
    var sum = 0;
    for (var a = 0; a < arguments.length; a++){
        sum += arguments[a];
    }
    return sum;
}
console.log(add (21,41,70));
console.log(add(22,42, 70, 100, 200));


//Arrays

let fruits = ['cashew', 'Pineapple', 'Pawpaw', 'Apple'];
console.log(fruits)

//Object

let myInfo = {
    FirstName:  'Atayi',
    Surname: 'Musa',
    Age: '30',
    Profession: 'Flight Officer'
    
}
console.log(myInfo)
console.log(myInfo.Age)

//Higher Order Function

function modifyArray(){
    console.log('modifyArray')
}
setInterval(modifyArray, 5000)
