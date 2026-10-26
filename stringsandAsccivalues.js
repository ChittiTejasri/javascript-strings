// ASCII values:
// let str = "A";
// // charcodeAt(index)
// console.log(str," = ",str.charCodeAt(0));

// let num = 8;
// console.log(num," = ",num.charCodeAt(0));

// let sstr = "b";
// console.log(sstr," = ",sstr.charCodeAt(0));
// ----------------------------------------------------
// display ASCII values for every character in a given string:
// let s = "Hero";
// for(let i = 0;i<=s.length-1;i++){
//     let ch = s.charAt(i);
//     console.log(ch,"=",ch.charCodeAt(0));

// }
// -----------------------------------------------------
// convert upper case to lower case .
// let cap = "A";
// let n = cap.charCodeAt(0);
// let n1 = n + 32;
// let res = String.fromCharCode(n1);
// console.log(cap, "=", res);

// ------------------------------------------------
// convert lower case to upper case.
// let small = "a";
// let n = small.charCodeAt(0);
// let n1 = n - 32;
// let res = String.fromCharCode(n1);
// console.log(small, "=", res);
// ----------------------------------------------
// Convert upper case string into Lower case string.
// let s = "HERO";
// let res1 = "";
// for (let i = 0; i < s.length; i++) {
//     let ch = s.charAt(i);
//     let n = ch.charCodeAt(0);
//     let n1 = n + 32;
//     let res2 = String.fromCharCode(n1);
//     res1 = res1 + res2;
// }
// console.log("Original String =", s);
// console.log("Lowercase String =", res1);

// ------------------------------------------------------
// convert lower case string into Upper case string:
// let s = "python";
// let res = "";
// for (let i = 0; i < s.length; i++) {
//     let ch = s.charAt(i);
//     let n = ch.charCodeAt(0);
//     let n1 = n - 32;
//     let res1 = String.fromCharCode(n1);
//     res = res + res1;
// }
// console.log("Original String =", s);
// console.log("Uppercase String =", res);
// --------------------------------------------------------
// write the code to display sum of digits in given string:
// let str = "Hero@123";
// let sum = 0;
// for(let i=0;i<=str.length-1;i++){
//     let ch = str.charAt(i);
//     if(ch>="0" && ch<="9"){
//         sum = sum + (ch.charCodeAt(0)-48);
        
    
//     }
    
// }
// console.log(sum)

