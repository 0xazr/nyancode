// const CryptoJS = require('crypto-js');

// let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// // console.log(ciphertext);

// // Decrypt
// let bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// let originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText);

// let currentTime = Number(new Date().getTime() / 1000);
// let formattedTime = "";

// console.log(Number(new Date().getTime() / 1000));

// function padZero(value) {
//   return value.toString().padStart(2, '0');
// }

// function formatTime() {
//   const date = new Date(currentTime * 1000);
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   const miliseconds = date.getMilliseconds();
//   formattedTime = `${padZero(minutes)}:${padZero(seconds)}:${padZero(miliseconds)}`;
// }

// formatTime();
// console.log(`format: ${formattedTime}`)

// function getTimeDifference(startTime, endTime) {
//   const timeDiff = Math.abs(endTime - startTime) * 1000;
//   const minutes = Math.floor(timeDiff / 60000);
//   const seconds = Math.floor((timeDiff % 60000) / 1000);
//   const milliseconds = Math.floor(timeDiff % 1000);

//   return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds, 3)}`;
// }

// const startTime = currentTime - 1200000000; // Start time 2 menit sebelum waktu saat ini

// const result = getTimeDifference(1685344593.402, 1685344601.895);
// console.log(result);

function subtractTime(time1, time2) {
  const [min1, sec1, msec1] = time1.split(":").map(Number);
  const [min2, sec2, msec2] = time2.split(":").map(Number);

  let totalMin = min1 - min2;
  let totalSec = sec1 - sec2;
  let totalMsec = msec1 - msec2;

  if (totalMsec < 0) {
    totalSec--;
    totalMsec += 1000;
  }
  if (totalSec < 0) {
    totalMin--;
    totalSec += 60;
  }

  const result = `${padZero(totalMin)}:${padZero(totalSec)}:${padZero(
    totalMsec,
    3
  )}`;
  return result;
}

function padZero(value, length = 2) {
  return value.toString().padStart(length, "0");
}

// Contoh penggunaan
const time1 = "00:36:89";
const time2 = "00:16:74";

const difference = subtractTime(time1, time2);
console.log(difference);
