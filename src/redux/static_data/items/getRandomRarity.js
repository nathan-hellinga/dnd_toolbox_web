/**
 * generate a random weighted value in the range [1, 3] inclusive
 * @returns {int}
 */
export default function getRandomRarity() {
  const rarity_weights = [0.7, 0.26, 0.04];
  let sum = 0,
    r = Math.random();
  for (let i = 0; i < rarity_weights.length; i++) {
    sum += rarity_weights[i];
    if (r <= sum) return i + 1;
  }
}
