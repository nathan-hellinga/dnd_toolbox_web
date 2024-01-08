export function roundToDecimal(num: number, decimals: number = 2): number {
  const multi = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * multi) / multi;
}