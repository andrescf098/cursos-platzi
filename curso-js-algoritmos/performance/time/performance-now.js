const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};
let timeStart = performance.now();
contar(5);
let timeEnd = performance.now();
console.log(`Tiempo: ${timeEnd - timeStart} ms`);
