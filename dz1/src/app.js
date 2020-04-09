import ts1 from './tsFile.ts';
import sum from './sum.ts';

console.log('app.js!!');
const APP_NAME = 'dz1';
console.log('app.js APP_NAME=', APP_NAME);
console.log('app.js ts1=', ts1);
console.log('app.js sum=', sum);
console.log('app.js sum(1,2)=', sum(1, 2));

const p = new Promise(function (resolve, reject) {
    resolve();
});
