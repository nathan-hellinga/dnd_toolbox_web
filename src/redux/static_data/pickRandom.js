export function pickRandomElements(arr, n) {
  let result = [];
  while (result.length < n) {
    // Duplicate array if number of requested elements exceeds array length
    if (arr.length < n) {
      arr = [...arr, ...arr];
    }

    // Shuffle the array
    let shuffled = [...arr].sort(() => 0.5 - Math.random());

    // Slice the first n elements
    result = [...result, ...shuffled.slice(0, n - result.length)];
  }

  return result;
}

export function getRandomFromArray(x) {
  return x[Math.floor(Math.random() * x.length)];
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
