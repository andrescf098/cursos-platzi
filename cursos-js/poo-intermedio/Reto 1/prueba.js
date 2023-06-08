const nRomanos = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function cNumeros(num) {
  let total = 0;
  let nAlmacenado = 0;
  const array = num.split("");
  for (let i = 0; i < array.length; i++) {
    const element = nRomanos[array[i]];
    if (array[i] === "I") {
      nAlmacenado = array[i];
      if (array[i] === "V" || array[i] === "X") {
        let numero = nRomanos[array[i]] - nRomanos[nAlmacenado];
        total += numero;
        nAlmacenado = 0;
      } else {
        total += element;
      }
    } else {
      total += element;
    }
  }
  return total;
}

console.log(cNumeros("MMDLXIII"));
