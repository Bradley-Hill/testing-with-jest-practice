interface Analysis {
  average: number;
  min: number;
  max: number;
  length: number;
}

function createAnalysisObject(array: number[]) {
  let length = array.length;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average / length;
  let min = array[0];
  for (let i = 1; i < length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  let max = array[0];
  for (let i = 1; i < length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return { length: length, average: average, min: min, max: max };
}

module.exports = createAnalysisObject;
