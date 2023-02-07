// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Temperature amplitude is the differenc ebetween hgihest and lowest temperature
// How to compute max and min temperature
// What to do about sensor error?

// Ignore temp
// Find min and max
// Subtract min from amx and return it

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp != "number") continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

function calcTempAmplitudeNew(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp != "number") continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
}

const amplitude = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);
