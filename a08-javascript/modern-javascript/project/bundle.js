"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes
var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push("Novo todo");
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var myList = new TodoList();
var $button = document.querySelector("#newTodo");
$button.addEventListener("click", function () {
  myList.addTodo();
}); // Const

var a = 10; // a = 20; Gera um erro!
// Isso é multar um objeto em JS

var user = {
  name: "Diogo"
};
user.name = "João";
console.log(user); // Variáveis de Escopo

function teste(x) {
  // esta variável let só existe dentro deste escopo!
  var y = 2;
  y = 3; // posso reatribuiar normalmente

  if (x > 5) {
    var _y = 4; // posso reatribuir pois faz parte de outro escopo

    console.log(x, _y);
  }
} // console.log(y); -> não definido


teste(10); // E por que não usar o var?
// O var não possui os mesmos comportamentos, VAZA O ESCOPO! http://bit.ly/2IzP8ab
// Operaçòes em Arrays

var arr = [1, 3, 4, 5, 8, 9]; // MAP -> percorrer o vetor e retornar uma nova informação

var newArr = arr.map(function (item, index) {
  return item * 2 + index;
});
console.log(newArr); // REDUCE -> reduzir todo o vetor em um único valor

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // FILTER -> filtra os valores e retorna apenas estes

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // FIND -> verifica se existe alguma informação no array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); // Arrow Functions

var soma = function soma(n1, n2) {
  return n1 + n2;
};

console.log(soma(1, 1));

var soma = function soma(n1, n2) {
  return n1 + n2;
};

console.log(soma(1, 1));

var soma = function soma(n1, n2) {
  return n1 + n2;
};

console.log(soma(1, 1));

var say = function say(word) {
  return word;
};

console.log(say("Hey"));

var say = function say(word) {
  return word;
};

console.log(say("How"));

var say = function say(word) {
  return word;
};

console.log(say("Let's Go")); // Valores Padrões

function mySum(a, b) {
  return a + b;
}

console.log(mySum(1));
console.log(mySum()); // Retorna NaN
// function mySum(a = 3, b = 6) {
//   return a + b;
// }
// OU
// const mySum = (a = 3, b = 6) => a + b;
// Desestruturação

var newUser = {
  name: "Diogo",
  age: 33,
  address: {
    city: "Cornélio Procópio",
    state: "PR"
  }
};
var name = newUser.name;
var age = newUser.age;
var city = newUser.address.city;
console.log(name, age, city); // Muitas linhas para buscar as informações...
// const { name, age } = newUser;
// console.log(name, age);
// const {
//   name,
//   age,
//   address: { city }
// } = newUser;
// console.log(name, age, city);
// Também na função!

function showName(newUser) {
  console.log(user.name);
} // function showName({ name, age }) {
//   console.log(name, age);
// }
// Operadores Rest e Spread
// REST


var restUser = {
  restName: "Diogo",
  restAge: 33,
  restCompany: "UTFPR"
}; // Pegar name e o resto colocar em outra variavel!

var restName = restUser.restName,
    others = _objectWithoutProperties(restUser, ["restName"]);

console.log(restName, others); // Também funciona para vetores

var restArray = [1, 2, 3, 4, 5];
var aRest = restArray[0],
    bRest = restArray[1],
    cRest = restArray.slice(2);
console.log(aRest, bRest, cRest); // E também para funções
// const sumRest = (a, b) => a + b;
// sumRest(10, 20);

var sumRest = function sumRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

sumRest(10, 20, 30, 50, 80); // const sumRest = (a, b, ...params) => return params;
// SPREAD
// Repassa as informaçòes de uma estrutura de dados para outra

var arr1Spread = [1, 2, 3];
var arr2Spread = [4, 5, 6]; // como juntar os 2 arrays?

var arr3Spread = [].concat(arr1Spread, arr2Spread); // Trocar apenas uma propriedade

var spreadUser = {
  spreadName: "Diogo",
  spreadAge: 33,
  spreadCompany: "UTFPR"
};

var spreadNewUser = _objectSpread({}, spreadUser, {
  spreadName: "José"
});

console.log(spreadNewUser);
