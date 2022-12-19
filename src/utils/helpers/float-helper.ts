export function floatTrunc(x : number | string, posiciones = 0) {
  const s = typeof x === 'number' ? x.toString() : x;
  //   const l = s.length;
  const decimalLength = s.indexOf('.') + 1;
  const numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}
