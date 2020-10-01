const swap = (a, b, array) => {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
export function getBubbleSortAnimations(array = []) {
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

export function getQuickSortAnimations(array = []) {
  let start, end;
  const animations = [];
  const partition = (array, start, end) => {
    let pivotIndex = start;
    let pivotValue = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        swap(i, pivotIndex, array);
        animations.push([i, pivotIndex, array[i], array[pivotIndex]]);
        animations.push([i, pivotIndex, array[i], array[pivotIndex]]);
        animations.push([i, pivotIndex, array[i], array[pivotIndex]]);

        pivotIndex++;
      }
    }
    swap(pivotIndex, end, array);
    animations.push([pivotIndex, end, array[pivotIndex], array[end]]);
    animations.push([pivotIndex, end, array[pivotIndex], array[end]]);
    animations.push([pivotIndex, end, array[pivotIndex], array[end]]);

    return pivotIndex;
  };
  const quickSort = (array, start, end) => {
    if (start >= end) {
      return;
    }
    let index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
  };
  quickSort(array, 0, array.length - 1);
  console.log(array);
  return animations;
}

export function getInsertionSortAnimations(array = []) {
  const animations = [];
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      animations.push([j, j - 1, array[j], array[j - 1]]);
      animations.push([j, j - 1, array[j], array[j - 1]]);
      animations.push([j, j - 1, array[j], array[j - 1]]);

      j -= 1;
    }
  }
  return animations;
}

export function getSelectionSortAnimations(array = []) {
  const animations = [];
  let current = 0;
  while (current < array.length - 1) {
    let min = current;
    for (let i = current + 1; i < array.length; i++) {
      if (array[min] > array[i]) min = i;
    }
    if (current < min) {
      swap(current, min, array);
      animations.push([current, min, array[current], array[min]]);
      animations.push([current, min, array[current], array[min]]);
      animations.push([current, min, array[current], array[min]]);
    }
    current++;
  }
  return animations;
}
