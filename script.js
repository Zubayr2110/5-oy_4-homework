// // // 1 - masala

// function saralash(string) {
//     if (string === "") {
//         return "";
//     }

//     let varible = string.split(" ");
//     varible.sort(function(a, b) {
//         let raqamA = parseInt(a.match(/\d/));
//         let raqamB = parseInt(b.match(/\d/));
//         return raqamA - raqamB;
//     });

//     let natija = varible.join(" ");
//     return natija;
// }

// console.log(saralash('is2 Thi1s T4est 3a'));




// // // 2 - masala

// function likeSystem(names) {
//     if (names.length === 0) {
//         return "no one likes this";
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// }

// console.log(likeSystem(['ali', 'vali', 'qani']));



// 3 - masala

// function harf(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i].charCodeAt() + 1 !== arr[i + 1].charCodeAt()) {
//             return String.fromCharCode(arr[i].charCodeAt() + 1);
//         }
//     }
//     return null;
// }

// console.log(harf(['a','b','c','d','f']));




// 4 - masala

// let n = prompt('1-sonni kiriting')
// let p = prompt('2-sonni kiriting')
// alert(n * p);




// 5 - masala

// let n = prompt('sonni kiriting');
// let k = prompt('sonni kiriting')

// for(let i = 0; i < n; i ++){
//     prompt(a[i])
// }

// for(let i = 0; i < n; i ++){
//     for(let j = 1; j < n - i; j ++)
//     if(a[j - 1] < a[j]) swap(a[j-1], a[j]);
// }

// let cnt = 0;

// for(let i = 0; i <n; i ++){
//     if(a[i] >= a[k-1] && a[i] > 0)cnt ++;
// }

// alert(cnt);





// 6 - masala

// function filterFriends(names) {
//     return names.filter(name => name.length === 4);
// }

// console.log(filterFriends(['ryan', 'salom', 'mena', 'ali', 'snnv', 'enwvwnoe']));





// 7 - masala

// function tartiblash(numbers) {
//     let toq = numbers.filter(num => num % 2 !== 0).sort((a, b) => b - a);
//     let juft = numbers.filter(num => num % 2 === 0);
    
//     return numbers.map(num => (num % 2 !== 0 ? toq.pop() : juft.shift()));
// }

// console.log(tartiblash([5, 8, 6, 3, 4]));






// 8 - masala


// function tartiblanganMassiv(massiv) {
//     return massiv.slice().sort((a, b) => a.length - b.length);
// }
// console.log(tartiblanganMassiv(["Telescopes", "Glasses", "Eyes", "Monocles"]));






// 9 - masala

// function raqamlash(str) {
//     return str.map((element, index) => `${index + 1}: ${element}`);
// }
// console.log(raqamlash(["a", "b", "c", 'd', 'f']));






// 10 - masala


// function teskari(str) {
//     let reversed = str.split('').reverse().join('');
//     let result = '';
    
//     for (let i = 0; i < reversed.length; i++) {
//       if (/[a-zA-Z]/.test(reversed[i])) {
//         result += reversed[i];
//       }
//     }
  
//     return result;
// }
// console.log(teskari('salom'));