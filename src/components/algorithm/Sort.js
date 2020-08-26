export const bubbleSort = (array) => {
  const swap = (array, a, b) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  };
  let i = 0;
  let j = 0;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      let a = array[j];
      let b = array[j + 1];
      if (a > b) {
        swap(array, j, j + 1);
      }
    }
  }
};
