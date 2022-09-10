//1 => a
let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
console.log([a, b, c, d, e]);

//1 => b
[a, b, c, d, e] = [e, d, c, b, a];
console.log([a, b, c, d, e]);

//2
// function removeArr() {
//   return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// }
// let [x,y,z,...v] = removeArr()
// console.log(v);
// let ary = [1,2,3,4,5,6,7,8,9,10] 
function removeArr(arr) {
    let [x,y,z,...v] = arr
    return [...v]
}

//3
let ditepati = true;
let promise1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve([
      {
        id: 1,
        merk: "Asus",
        jenis: "Gaming",
        spek: "i7 rtx 3060 TI",
      },
    ]);
  } else {
    reject("ERROR:500");
  }
});

promise1.then((response) => console.log(response)).catch((err) => console.log(err));

