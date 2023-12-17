export function buildCanvasSalt() {
  const random = (list) => {
    const min = 0;
    const max = list.length;
    return list[Math.floor(Math.random() * (max - min)) + min];
  };

  const canvasSalt = [];
  for (let n = 0; n < 100; ++n) {
    const r = random([0, 1, 2, 3, 4, 5, 6].map((a) => a - 3));

    canvasSalt.push(r);
  }
  return canvasSalt;
}
