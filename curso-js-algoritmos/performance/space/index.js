const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

const repetir = (array) => {
  let arreglo_repetido = arreglo;
  return arreglo_repetido;
};

const convertirAString = (arreglo) => {
  let resultado = arreglo.map((elemento) => elemento.toString());
  return resultado;
};

function dosDimensiones(valor) {
  let x = new Array(valor);
  for (let i = 0; i < valor; ++i) {
    x[i] = new Array(5).fill(0);
  }
  return x;
}

console.log(dosDimensiones(5));
