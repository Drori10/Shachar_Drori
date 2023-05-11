var x =5;
const y=4;
let z =2;

console.log(x+y);

var t = new Date();
console.log(t);
var year = t.getFullYear();
console.log(year);

document.getElementById("h1").innerHTML = year;

var Alon = {
    age: 21,
    Family : "Levy", 
    Time: new Date()
};

console.log(Alon.Time);

var H = t.getHours();
console.log(H);

if (H < 6){
    document.getElementById("greeting2").innerHTML = "ZZZZ";
} 
else if (H<12){
    document.getElementById("greeting2").innerHTML = "Good Morning";
}
else if (H<16){
    document.getElementById("greeting2").innerHTML = "Good Afternoon";
}
else if (H<20){
    document.getElementById("greeting2").innerHTML = "Good Evening";
    document.getElementById("body").classList.add("NightMode");
}
else{
    document.getElementById("greeting2").innerHTML ="Good Night";
}

