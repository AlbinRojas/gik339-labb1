// ==========================================
// Uppgift 2 – Variabler och scope
// ==========================================

// console.log(a) // Undefined
// console.log(b) // ReferenceError
// console.log(c) // ReferenceError

{
    a = 10
    const b = 20
    let c = 30

    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 30

}

// console.log(a) // 5 (var läcker ut ur blocket)
// console.log(b) // ReferenceError
// console.log(c) // ReferenceError


/* 
Reflection Uppgift 2:
var = Är en variabel som kan ändras och är function scoped.
const = Är en variabel som inte kan ändras och är block scoped.
let = Är en variabel som kan ändras och är block scoped.

Ifall man declarerar const eller let utanför så blir alla console.log utanför blocket det man deklarerat
Vilket visar att de är block scoped. Då de inte är tillgängliga utanför blocket.

medans var ändras globalt och kan ändras även utanför blocket. vilket visar att den är function scoped.
*/

// ==========================================
// Uppgift 3 - Arrow functions
// ==========================================
const num1 = 5
const num2 = 10

const add = (num1, num2) => num1 + num2

console.log(add(num1, num2))



/*
Reflection Uppgift 3:
Ifall man hade använd let till add så hade man kunnat ändra värdet på add senare i koden. Men eftersom man använder const så kan man inte ändra värdet på add senare i koden.

function add(num1, num2) 
{
    return num1 + num2
}
console.log(add(num1, num2))

När en funktion returnerar ett värde så kan man använda det värdet i andra delar av koden. I detta fallet så returnerar add funktionen summan av num1 och num2. Och vi använder det returnerade värdet i console.log för att skriva ut summan av num1 och num2.
*/

// ==========================================
// Uppgift 4 - Jämförelseoperatorer
// ==========================================
const add =(num1, num2) =>{ 
    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);

    console.log(num1? 'truthy' : 'falsy');

    if (!(num1 === null || num2 === null) && !(num1 === undefined || num2 === undefined) && typeof num1 === 'number' && typeof num2 === 'number') 
        {
            return num1 + num2
        }
    else {
            return 'num1 and num2 are null, undefined or not a number'
        }

}
/*
Reflection Uppgift 4:
?: fungerar som en snabbare if else sats. Men till skillnad från if else så kan man inte ha flera satser i en ?: sats. Utan man kan bara ha en sats i varje del av ?: satsen. Så ?: används för simplare uppgifter.
== Gör en typkonvertering innan den jämför värderna medans ===jämför värderna utan att göra en typkonvertering. Vilket gör att === är mer strikt än ==.
För att kolla att värderna inte är null så kollade jag ifall num1 eller num2 är null eller undefined och vände på det med ! innan paratecen så det som är i parateccen ska inte vara sant.
*/

// ==========================================
// Uppgift 5 - Anropa funktionen
// ==========================================
const num1 = 0
let arg1;
let sum = false

console.log(add(sum, 1))
console.log(add("0", 3))
console.log(add(3, "num1"))
console.log(add(-5, num1))
console.log(add(arg1, 7))
console.log(add())
console.log(add(5, 10))

console.log(num1)
console.log(sum)

/* Reflection Uppgift 5:
Variabel = En namngiven behållare som kan innehålla ett värde. (Skapas med var, let eller const)
Parameter = Namnet på den varibel som definieras inne i en funktions deklaration.(Fungerar som en placeholder för värdet som skickas in i funktionen)
Argument = Det faktiska värdet eller datan du skickar in i en funktion när du ska använda den. (Det värde som skickas in i funktionen när den anropas)

Sista outputen är 0 i num1 för den sätts till 0 i början av koden och ändras inte under programmets gång.
add(sum, 1) = 'num1 and num2 are null, undefined or not a number' för att sum är false och inte är ett number.
console.log(add("0", 3)) = 'num1 and num2 are null, undefined or not a number' för att "0" är en string och inte ett number.
console.log(add(3, "num1")) = 'num1 and num2 are null, undefined or not a number' för att "num1" är en string och inte ett number.
console.log(add(-5, num1)) = -5 för att -5 + 0 = -5
console.log(add(arg1, 7)) = 'num1 and num2 are null, undefined or not a number' för att arg1 är undefined och inte ett number.
console.log(add()) = 'num1 and num2 are null, undefined or not a number' för att inga argument skickas in i funktionen och därför är num1 och num2 undefined.
console.log(add(5, 10)) = 15 för att 5 + 10 = 15
console.log(sum) = false för att sum är satt till false i början av koden och ändras inte under programmets gång.
*/