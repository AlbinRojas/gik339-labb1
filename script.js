
// --Uppgift 2--

// var a = 5
// const b = 10
// let c = 15

// console.log(a)
// console.log(b)
// console.log(c)

// {
// a = 10
// const b = 20
// let c = 30

// console.log(a)
// console.log(b)
// console.log(c)

// c = 40
// console.log(c)

// }

// console.log(a)
// console.log(b)
// console.log(c)


/* 
var = Är en variabel som kan ändras och är globalt scoped.
const = Är en variabel som inte kan ändras och är block scoped.
let = Är en variabel som kan ändras och är block scoped.

Ifall man declarerar const eller let utanför så blir alla console.log utanför blocket det man deklarerat
Vilket visar att de är block scoped. Då de inte är tillgängliga utanför blocket.

medans var ändras globalt och kan ändras även utanför blocket. vilket visar att den är globalt scoped.
*/

// Upggift 3

const num1 = 5
const num2 = 10

const add = (num1, num2) => 
    {
        return num1 + num2
}

console.log(add(num1, num2))



/*
Ifall man hade använd let till add så hade man kunnat ändra värdet på add senare i koden. Men eftersom man använder const så kan man inte ändra värdet på add senare i koden.

function add(num1, num2) 
{
    return num1 + num2
}
console.log(add(num1, num2))

När en funktion returnerar ett värde så kan man använda det värdet i andra delar av koden. I detta fallet så returnerar add funktionen summan av num1 och num2. Och vi använder det returnerade värdet i console.log för att skriva ut summan av num1 och num2.
*/