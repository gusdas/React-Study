let i = 0;
function decryptData(callback, wait, age) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + wait); 
  callback(`${age}세 은행원`);
}

decryptData(console.log, 1000, 20);
decryptData(console.log, 1000, 37);
decryptData(console.log, 1000, 59);