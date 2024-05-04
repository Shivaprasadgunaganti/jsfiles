//1)substring
let str ="hello"
let res1=str.substring(2,5);   
console.log(res1)   // (starting index, to value)

//2)padStart
let str2 ="hello"
let res2=str2.padStart(8,"123");
console.log(res2)  // it adds new elements as pre

//3)repeat
let str3 ="hello"
let res3=str3.repeat(2);
console.log(res3) //  2 is the count it prints  2 times

//4)replaceAll
let str4 ="hii"
 let res4=str4.replaceAll("i","a");
 console.log(res4)  // (existing value, giving value to existing vale)

//  5)split
 let str5 ="hello"
  let res5=str5.split(""); // it split like array 
  console.log(res5)   //

// 6) indexOf
let str6 ="hello"
 let res6=str6.indexOf("l",2);  // it prints the index value, 2nd value is starting value
 console.log(res6)

 //palindrome
let strp= "mom"
let nstr=""
for(i=0;i<=strp.length-1;i++){
    nstr=strp[i]
    if(strp=nstr)
    {
        console.log("palindrome")
    }
}

// let strx= "mom"
// let nstr=""
// for(i=strx.length-1;i>=0;i--){
//     nstr+=strx[i]

//     if(strx==nstr){
//         console.log("palindrome")
//     }
// }

// let str1="hello world"
// for(i=0;i<=str1.length-1;i++){
    
// }