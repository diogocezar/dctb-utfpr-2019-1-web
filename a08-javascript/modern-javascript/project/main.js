// Classes

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

// Const

const a = 10;
// a = 20; Gera um erro!

// Isso é multar um objeto em JS

const user = { name: "Diogo" };
user.name = "João";
console.log(user);

// Variáveis de Escopo

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

// Operaçòes em Arrays

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
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

// FIND -> verifica se existe alguma informação no array
const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);

// Arrow Functions

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

// Valores Padrões

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

// Desestruturação

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

// REST

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

// SPREAD
// Repassa as informaçòes de uma estrutura de dados para outra

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
