console.log("Oi, soy un JS!");

var name = "Diogo";
console.log(name);
name = 2;
console.log(name);

var student = {
  name: "José",
  age: 32,
  human: true,
  hey: function() {
    //alert(this.name + " - " + this.age);
  }
};
student.hey();

var json = [
  { content: "teste1", id: 1 },
  { content: "teste2", id: 2 },
  { content: "teste3", id: 3 },
  { content: "teste4", id: 4 }
];

console.log(json[2].id);

var x = "10";
var y = 5;
var result = parseInt(x) + y;

console.log(result);

function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(5, 4));
console.log(sum("Diogo ", "Cezar"));

console.log("1" == 1);
console.log("1" === 1);

var genre = "M";
if (genre === "M") {
  console.log("OK");
} else {
  console.log("NOT OK!");
}
// Ou...
console.log(genre === "M" ? "OK" : "NOT OK!");

for (var i = 0; i <= 10; i++) {
  console.log("Passou em " + i);
}

// var i = 0;
// function show() {
//   console.log(`Hello World ${i++}`);
// }
// setInterval(show, 1000);

function show() {
  console.log("Hello World");
}
setTimeout(show, 5000);

function showAlert() {
  alert("Botão foi clicado!");
}

var $name = document.querySelector("#name");
var $age = document.querySelector("#age");
var $all = document.querySelectorAll("input");
var $button = document.querySelector(".btn");
$button.addEventListener("click", function() {
  alert(`Nome: ${$name.value}, Idade: ${$age.value}`);
});

var $app = document.querySelector("#app3");

for (var i = 0; i < 10; i++) {
  var linkElement = document.createElement("a");
  var textElement = document.createTextNode("Acessar o google TESTE" + i);
  linkElement.setAttribute("href", "http://www.google.com");
  linkElement.appendChild(textElement);
  $app.appendChild(linkElement);
}

var boxElement = document.querySelector(".box");
boxElement.style.backgroundColor = "red";
boxElement.style.position = "relative";
boxElement.style.float = "left";
boxElement.style.width = "100px";
boxElement.style.height = "100px";
