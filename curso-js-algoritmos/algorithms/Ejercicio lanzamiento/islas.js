const array = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0],
];

function dfs(i, j) {
  debugger;
  if (
    i < 0 ||
    i >= array.length ||
    j < 0 ||
    j >= array[i].length ||
    array[i][j] === 0
  ) {
    return;
  }
  array[i][j] = 0;
  dfs(i + 1, j);
  dfs(i - 1, j);
  dfs(i, j + 1);
  dfs(i, j - 1);
}

function islands() {
  debugger;
  let islands = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        dfs(i, j);
        islands++;
      }
    }
  }
  return islands;
}
console.log(array);
console.log(islands());
