"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * CLASSES
 */
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
});
/**
 * CONST
 */

var a = 10; // a = 20; Gera um erro!
// Isso é multar um objeto em JS

var user = {
  name: "Diogo"
};
user.name = "João";
console.log(user);
/**
 * VARIÁVEIS DE ESCOPO
 */

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

/**
 * OPERAÇÕES EM ARRAYS
 */

var arr = [1, 3, 4, 5, 8, 9]; // MAP -> percorrer o vetor e retornar uma nova informação

var arr = arr.map((item, index) => {
  return item * 2 + index;
});

console.log(arr); // REDUCE -> reduzir todo o vetor em um único valor

var sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum); // FILTER -> filtra os valores e retorna apenas estes

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // FIND -> verifica se existe alguma informação no array

var find = arr.find(function (item) {
  return item === 8;
});
console.log(find);

/**
 * ARROW FUNCTIONS
 */

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

console.log(say("Let's Go"));
/**
 * VALORES PADRÕES
 */

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

/**
 * DESESTRUTURAÇÃO
 */

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

/**
 * REST OPERATOR
 */


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

/**
 * SPREAD OPERATOR
 */
// Repassa as informações de uma estrutura de dados para outra

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
/**
 * TEMPLATE LITERALS
 */
// Forma de incluir variávies em strings

var sample = "Hello World";
var type = "string"; // Forma tradicional

console.log(sample + " is " + type); // Template literals

console.log("".concat(sample, " is ").concat(type));
/**
 * OBJECT SHORT SYNTAX
 */
// Quando o nome da variavel for o mesmo do seu valor não é necessário repetir

var nameShort = "Diogo";
var ageShort = 33;
var objShort = {
  nameShort: nameShort,
  ageShort: ageShort,
  companyShort: "UTFPR"
}; // É equivalente a:
// const objShort = {
//   nameShort: nameShort,
//   ageShort: ageShort,
//   companyShort: "UTFPR"
// };

/**
 * PROMISSES
 */
// São promessas que não vão influenciar na linha do tempo do JS
// Devolvem o valor depois de um tempo
// O fluxo continua, e quando algo for executado... algo acontece.

var myPromise = function myPromise() {
  return new Promise(function (resolve, reject) {
    // resolve -> quando resultado foi sucesso
    // reject -> quando não for sucesso
    var allow = true;
    setTimeout(function () {
      if (allow) resolve("allowed");else reject("not allowed");
    }, 3000);
  });
};

console.log(myPromise());
myPromise().then(function (result) {
  console.log(result);
})["catch"](function (error) {
  console.log(error);
});
/**
 * AJAX - XHR - COM PROMISE
 */

var myRequest = function myRequest() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/diogocezar");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

myRequest().then(function (result) {
  console.log(result);
})["catch"](function (error) {
  console.log(error);
});
/**
 * AJAX - FETCH
 */

var myRequestFetch = function myRequestFetch() {
  fetch("https://api.github.com/users/diogocezar", {
    method: "get"
  }).then(function (response) {
    response.text().then(function (result) {
      console.log(result);
    });
  })["catch"](function (err) {
    console.error(err);
  });
};
/**
 * AJAX - AXIOS
 */


axios.get("https://api.github.com/users/diogocezar").then(function (result) {
  console.log(result);
})["catch"](function (error) {
  console.log(error);
});
