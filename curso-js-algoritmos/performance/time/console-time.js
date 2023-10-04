const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};
console.time("duración-contar: ");
contar(5);
console.timeEnd("duración-contar: ");
