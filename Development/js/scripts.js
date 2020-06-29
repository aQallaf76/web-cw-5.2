
let menu = ["مرقوق", "بيتزا", "باستا"
];

alert(
    "  اختار الرقم عشوائيا وانظر الى وجبتك )(من 0 الى 2"

);
let code = prompt(
    "اختار الرقم من 0 الى 2"
)

// if (code == 0) { alert(menu[0]) }

// if (code == 1) { alert(menu[1]) }

// if (code == 2) { alert(menu[2]) }


switch (code) {
    case "0":
        alert(menu[0]);
        break;
    case "1":
        alert(menu[1]);
        break;
    case "2":
        alert(menu[2]);
        break;

}

let num1 = prompt("enter a number");
let num2 = prompt("enter second number");
let exp = prompt(" enter an expression")

switch (exp) {
    case "*":
        alert(num1 * num2)
        break;
    case "+":
        alert(parseInt(num1) + parseInt(num2))
        break;
    case "-":
        alert(parseInt(num1) - parseInt(num2))
        break;
    case "/":
        alert(parseInt(num1) / parseInt(num2))
        break;
    default:
        alert("wrong number")
}


let age = prompt("enter age");


if (age == 6) { alert("elementary") }
if (age == 7) { alert("elementary") }
if (age == 8) { alert("elementary") }
if (age == 9) { alert("elementary") }
if (age == 10) { alert("elementary") }
if (age == 11) { alert("you are in middle school") }
if (age == 12) { alert("you are in middle school") }
if (age == 13) { alert("you are in middle school") }
if (age == 14) { alert("you are in middle school") }
if (age == 15) { alert("you are in high school") }
if (age == 16) { alert("you are in high school") }
if (age == 17) { alert("you are in high school") }
if (age >= 18) { alert("you are in college") }