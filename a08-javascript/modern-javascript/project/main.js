/**
 * CLASSES
 */

class TodoList {
  constructor() {
    this.todos = [];
  }
  addTodo() {
    this.todos.push("Novo todo");
    console.log(this.todos);
  }
}

const myList = new TodoList();

const $button = document.querySelector("#newTodo");
$button.addEventListener("click", () => {
  myList.addTodo();
});

/**
 * CONST
 */

const a = 10;
// a = 20; Gera um erro!

// Isso é multar um objeto em JS
const user = { name: "Diogo" };
user.name = "João";
console.log(user);

/**
 * VARIÁVEIS DE ESCOPO
 */

function teste(x) {
  // esta variável let só existe dentro deste escopo!
  let y = 2;
  y = 3; // posso reatribuiar normalmente
  if (x > 5) {
    let y = 4; // posso reatribuir pois faz parte de outro escopo
    console.log(x, y);
  }
}

// console.log(y); -> não definido

teste(10);

// E por que não usar o var?
// O var não possui os mesmos comportamentos, VAZA O ESCOPO! http://bit.ly/2IzP8ab

/**
 * OPERAÇÕES EM ARRAYS
 */

const arr = [1, 3, 4, 5, 8, 9];

// MAP -> percorrer o vetor e retornar uma nova informação
const newArr = arr.map(function(item, index) {
  return item * 2 + index;
});

console.log(newArr);

// REDUCE -> reduzir todo o vetor em um único valor
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

// FILTER -> filtra os valores e retorna apenas estes
const arr = arr.filter(item) => {
  return item % 2 === 0;
};

console.log(filter);

// FIND -> verifica se existe alguma informação no array
const find = arr.find(function(item) {
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

var soma = (n1, n2) => {
  return n1 + n2;
};
console.log(soma(1, 1));

var soma = (n1, n2) => n1 + n2;
console.log(soma(1, 1));

var say = function(word) {
  return word;
};
console.log(say("Hey"));

var say = word => {
  return word;
};
console.log(say("How"));

var say = word => word;
console.log(say("Let's Go"));

/**
 * VALORES PADRÕES
 */

function mySum(a, b) {
  return a + b;
}

console.log(mySum(1));
console.log(mySum());

// Retorna NaN

// function mySum(a = 3, b = 6) {
//   return a + b;
// }

// OU

// const mySum = (a = 3, b = 6) => a + b;

/**
 * DESESTRUTURAÇÃO
 */

const newUser = {
  name: "Diogo",
  age: 33,
  address: {
    city: "Cornélio Procópio",
    state: "PR"
  }
};

const name = newUser.name;
const age = newUser.age;
const city = newUser.address.city;

console.log(name, age, city);

// Muitas linhas para buscar as informações...

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
}

// function showName({ name, age }) {
//   console.log(name, age);
// }

// Operadores Rest e Spread

/**
 * REST OPERATOR
 */

const restUser = {
  restName: "Diogo",
  restAge: 33,
  restCompany: "UTFPR"
};

// Pegar name e o resto colocar em outra variavel!

const { restName, ...others } = restUser;

console.log(restName, others);

// Também funciona para vetores

const restArray = [1, 2, 3, 4, 5];
const [aRest, bRest, ...cRest] = restArray;

console.log(aRest, bRest, cRest);

// E também para funções

// const sumRest = (a, b) => a + b;
// sumRest(10, 20);

const sumRest = (...params) => params.reduce((total, next) => total + next);
sumRest(10, 20, 30, 50, 80);

// const sumRest = (a, b, ...params) => return params;

/**
 * SPREAD OPERATOR
 */

// Repassa as informações de uma estrutura de dados para outra

const arr1Spread = [1, 2, 3];
const arr2Spread = [4, 5, 6];

// como juntar os 2 arrays?

const arr3Spread = [...arr1Spread, ...arr2Spread];

// Trocar apenas uma propriedade

const spreadUser = {
  spreadName: "Diogo",
  spreadAge: 33,
  spreadCompany: "UTFPR"
};

const spreadNewUser = { ...spreadUser, spreadName: "José" };

console.log(spreadNewUser);

/**
 * TEMPLATE LITERALS
 */

// Forma de incluir variávies em strings

const sample = "Hello World";
const type = "string";

// Forma tradicional

console.log(sample + " is " + type);

// Template literals

console.log(`${sample} is ${type}`);

/**
 * OBJECT SHORT SYNTAX
 */

// Quando o nome da variavel for o mesmo do seu valor não é necessário repetir

const nameShort = "Diogo";
const ageShort = 33;

const objShort = {
  nameShort,
  ageShort,
  companyShort: "UTFPR"
};

// É equivalente a:

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

const myPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve -> quando resultado foi sucesso
    // reject -> quando não for sucesso
    const allow = true;
    setTimeout(() => {
      if (allow) resolve("allowed");
      else reject("not allowed");
    }, 3000);
  });
};

console.log(myPromise());
myPromise()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

/**
 * AJAX - XHR - COM PROMISE
 */

const myRequest = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/diogocezar");
    xhr.send(null);
    xhr.onreadystatechange = function() {
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

myRequest()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

/**
 * AJAX - FETCH
 */

const myRequestFetch = () => {
  fetch("https://api.github.com/users/diogocezar", {
    method: "get"
  })
    .then(function(response) {
      response.text().then(function(result) {
        console.log(result);
      });
    })
    .catch(function(err) {
      console.error(err);
    });
};

/**
 * AJAX - AXIOS
 */

axios
  .get("https://api.github.com/users/diogocezar")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
