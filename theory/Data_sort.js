
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log( monday, tue, wed, thu, fri);


/*
 Camel case
- always a start with lowercase and if there is a space you start with uppercase on the next word.
*/

/* This is Array

const something = "Something"

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something, 5351, true];

console.log(daysOfWeek[2]); -> output Wed
because Array first = 0

console.log(daysOfWeek);
*/

// This is Object
const Sanggyuinfo = {
    name : "Sanggyu",
    age : 26,
    gender : "Male",
    isHandsome : true,
    favMovie : ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        { 
            name:"Kimchi",
            fatty:"false"
        },
        {
            name:"Cheese burger",
            fatty: true
        }
    ]
}

/*
console.log(Sanggyuinfo.gender);

Sanggyuinfo.gender = "Female";

console.log(Sanggyuinfo.gender);
*/

console.log(Sanggyuinfo.favFood[0].name);