const flattenArray = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];

const flattenedArray = flattenArray(nestedArray);

console.log({ flattenedArray });
