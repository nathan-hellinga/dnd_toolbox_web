export function pickRandomElements<T>(arr: Array<T>, n: number): T[] {
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

export function shuffleArray<T>(array: Array<T>): Array<T> {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function getRandomFromArray<T>(x: Array<T>): T {
  return x[Math.floor(Math.random() * x.length)];
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateNormallyDistributedRandom(positiveOnly?: boolean): number {
  const mean = 0
  const stdev = 1

  const u = 1 - Math.random(); // Converting [0,1) to (0,1]
  const v = Math.random();
  const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  // Transform to the desired mean and standard deviation:
  const value = z * stdev + mean;
  return positiveOnly ? Math.abs(value) : value;
}

export function getNormallyDistributedRandomInt(min: number, max: number): number {
  const mean = (min + max) / 2;
  const stdDev = (max - min) / 6; // Approximation to cover 99.7% of the range
  let randomNumber;


  do {
    // round here in case rounding brings us outside our range
    const rnd = generateNormallyDistributedRandom();
    randomNumber = Math.round(mean + generateNormallyDistributedRandom() * stdDev);
  } while (randomNumber < min || randomNumber > max);

  return randomNumber;
}
