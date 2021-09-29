// let book = {
//     id: 1,
//     text: 'Hola soy Pirulo un muchacho unico inventado na por Martina'
//     //     0123456789111111111122222222223333333333444444444455555
//     //               012345678901234567890123456789012345678901234
// };

// // let indexWord = function(book, word){
// //     let wordM = word.toLowerCase();
// //     let textM = book.text.toLowerCase();
    
// //     let textF = textM.split(wordM);
// //     let cont = 0
// //     let arrIndex = [];
// //     let arrAux = textF.forEach(e => {
// //         if(textF[textF.length-1] === e) return
// //         cont += e.length
// //         arrIndex.push(cont);
// //         cont += wordM.length
// //         return
// //     });
// //     return arrIndex
// // }

// const findWordsStartingWithNaive = (book, query) => {
//     const separators = {
//         ' ': true,
//         '.': true,
//         ',': true,
//     }
//     const text = book.text.toLowerCase();
//     const finds = [];
//     for (let i = 0; i < text.length; i += 1) {
//         if (i !== 0 && !separators[text[i-1]]) continue;
//         for (let j = 0; j < query.length; j += 1) {
//             if (query[j] !== text[i + j]) {
//                 i += j;
//                 break;
//         }   
//         if (j === query.length - 1){
//             finds.push(i);
//             i += j;
//         }
//     }
// }
// return finds;
// }

// console.log(findWordsStartingWithNaive(book, 'na'))

// var deciToBin = function(num){
//     let arrBin= [10];
//     if(num < 2) return num;
//     while(num !== 1){
//         arrBin.unshift(num%2)
//         num = Math.floor(num/2)
//     }
//     arrBin.unshift(num)
//     return arrBin.join('')
// }

// const decimalToBinary = (num) => {
//     let binary = '';
//     while(num) {
//         binary = num % 2 + binary;
//         num = Math.floor(num / 2);
//     }
//     return binary
// }
// console.log(decimalToBinary(42))

const sameNumber = function(arr1, arr2){
    let aux = [];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            aux.push(arr1[i]);
        }
    }
    return aux;
}