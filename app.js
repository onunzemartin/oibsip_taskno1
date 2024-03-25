// fnc for sqrt
function calculateSqrt(number) {
  if (number < 0) {
    return 0;
  }
  return Math.sqrt(number);
}
// fnc for raise to power
function calculatePower(number) {
  let result = number * number;
  return result;
}
// fnc for 1 over num
function calculateOver(number) {
  let result = 1 / number;
  return result;
}
// to toggle negative values
function toggleNegative(number) {
  return -number;
}
