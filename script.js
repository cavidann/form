var main = document.getElementById("main");
var p = document.getElementById("p");
var x = Math.floor(Math.random() * 10 + 1);
var y = Math.floor(Math.random() * 10 + 1);
var items = ["+", "-", "/", "*"];
var item = items[Math.floor(Math.random() * items.length)];
var netice;
var number = document.getElementById("number");
var error = document.getElementById("error")

p.innerHTML = x + item + y + "=";

if (item == "+") {
    netice = x + y;
} else if (item == "-") {
    netice = x - y;
} else if (item == "*") {
    netice = x * y;
} else {
    netice = x / y;
}


var i = 30;
var input = document.getElementById("input");
var input1 = document.getElementById("input1");
var time = document.getElementById("time");

var count = setInterval(function say() {
    i--;
    if (i == 0) {
        main.innerHTML = "Zamaniniz bitdi";

        clearInterval(count);
    }
    time.innerHTML = "Vaxtiniza " + i + " saniye qalib";
}, 1000);


document.getElementById("submit").addEventListener("click", function () {
    if (input.value != "" && input1.value != "" && number.value == netice) {
        clearInterval(count);
        document.write("Tesekkurler");
    }
    else if (input.value == "" || input1.value == "" || number.value == "") {
        error.innerText = "Butun xanalari doldurun";
    } else if (number.value != netice) {
        error.innerText = "hesablamani duzgun edin";
    }
})