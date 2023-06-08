const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};
let obj3 = [1, 2, 3, 4];
let obj4 = obj3;

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);

function recursiva(array) {
  if (array.length != 0) {
    const firstNum = array[0];
    array.shift();
    return recursiva(array);
  }
}
