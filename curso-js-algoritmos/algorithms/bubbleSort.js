/*
 Complejidad Temporal --> O(n^2)
 Complejidad Espacial --> O(n)
 Espacio Auxiliar --> O(1)
*/
function bubbleSort(array) {
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
      if (array[j] > array[j + 1]) {
        let temporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporal;
      }
    }
  }
  return array;
}
