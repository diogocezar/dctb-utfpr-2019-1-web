import myDefault from "./functions";

console.log(myDefault());

// import myDefault, { sum, sub as mySub } from "./functions";
// import * as func from "./functions";

class Testing {
  constructor() {
    console.log(`Testing ${sum(10, 20)}`);
    console.log(`Sub ${mySub(10, 5)}`);
    console.log(`Testing ${func.sum(10, 20)}`);
    console.log(`Sub ${func.sub(10, 5)}`);
    myDefault();
  }
}

new Testing();
