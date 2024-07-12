//#1
let a = 0;
// if (a == "" || a == 0 || a == false || a == null || typeof a == undefined) {
//   console.log("a khong co gia tri");
// }
if(!a) {
  console.log("a khong co gia tri");
}

//#2
let b;
// if (b == "" || b == false || b == null || typeof b == undefined) {
//   console.log("b khong co gia tri");
// }
if(!b && b!==0) {
  console.log("b khong co gia tri");
}

//#3
let c;
if (c == null || typeof c == undefined) {
  console.log("c khong co gia tri");
}

// #4
let d = 9;
console.log(d > 10 ? "lon hon" : "nho hon");

//#5
let key;
switch (key) {
  case 2: console.log('Thu 2');
    break;
  case 3: console.log('Thu 3');
    break;
  case 4: console.log('Thu 4');
    break;
  case 5: console.log('Thu 5');
    break;
  case 6: console.log('Thu 6');
    break;
  case 7: console.log('Thu 7');
    break;

  default:
    break;
}


// #6
let myStr = 'kfks35ka  2k7n5'; 
function getNumber(data) {
    let result ='';
    for (let i of data) {
        if (!isNaN(i) && i !== ' '){
            result += i;
        }
    }
    return result;
};

function getNum(data) {
    let numbers2 = data.match(/\d/g);
    let result = numbers2.join('');
    return result
}

console.log(getNumber(myStr));
console.log(getNum(myStr));