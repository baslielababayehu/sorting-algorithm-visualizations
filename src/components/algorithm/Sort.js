export function getBubbleSortAnimations(array = []) {
  const swap = (a, b, array) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  };
  const animations = [];
  let isSorted = false;
  let counter = 0;
  console.log(array);
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
        animations.push([i + 1, i, array[i + 1], array[i]]);
        animations.push([i + 1, i, array[i + 1], array[i]]);
        // animations.push([i, i, array[i], array[i]]);

        // animations.push([i + 1, i, array[i + 1], array[i]]);

        animations.push([i + 1, i, array[i + 1], array[i]]);
      } else {
        animations.push([i, i + 1, array[i], array[i + 1]]);
        animations.push([i, i + 1, array[i], array[i + 1]]);
        animations.push([i, i + 1, array[i], array[i + 1]]);
        console.log("do nothing");
      }
    }
    counter++;
  }
  console.log(array);
  return animations;
}
