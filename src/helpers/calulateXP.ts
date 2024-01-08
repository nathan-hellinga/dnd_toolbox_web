export const calculateXP = (cr: number): number => {
  if (cr < 0.15) return 100;
  return Math.ceil(339.75 * Math.exp(0.2219 * cr));
};