
//1) Finding big number   
let number1=+prompt()
let number2=+prompt()
let number3=+prompt()

if(number1>number2 && number1>number3){
       console.log(number1)
}
else if(number2>number3 && number2>number1){
       console.log(number2)
}
else if(number3>number1 && number3>number2){
       console.log(number3)
}

//2) vowel
//  let alpha =prompt()
if(alpha=="a" || alpha=="e" || alpha=="i" || alpha=="i" || alpha=="u")
console.log("vowel")
else{
     console.log("consonants")
}

// 3) clock
//    let time=+prompt()
if(time>=5 && time<=11){
    console.log("Good morning")
}
else if(time>11 && time<=17){
    console.log("Good afternoon")
}
else if(time>18 && time<=22){
    console.log("Good evening")
}
else if(time>23 || time<=4){
    console.log("Good night")
} 

// 4)admin&& password
let user="admin"
let password="password1"

if(user=="admin" && password =="password1"){
//      console.log("successful")
}
else if(user !=="admin" && password =="password1"){
//     console.log("userid incorrect")
}
else if(user =="admin" && password !=="password1"){
//     console.log("password incorrect")
}
else{
//     console.log("invalid")
}

//4)using +prompt
// let user=prompt()
// let password= prompt()

if(user=="shiva" && password =="gsp11"){
      console.log("successful")
 }
 else if(user !=="shiva" && password =="gsp11"){
     console.log("userid failed")
 }
 else if(user =="shiva" && password !=="gsp11"){
     console.log("password failed")
 }
 else{
     console.log("invalid")
 }

// switch statement
let a =+prompt()

switch(a)
{
    case 1: console.log("true1");break;
    case 2: console.log("true2");break;
    default:console.log("inavlid");
}
//fizzbuzz
for(i=1;i<=15;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
    }
    else if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0){
        console.log("buzz");
    }
    else{
        console.log(i);
    } 
}


//prime numbers
for(i=100;i<=200;i++){
       if(i%2==1){
              // console.log(i)
              var x =i;
              // console.log(a)
               count=0;
                    
             for(j=1;j<=x;j++){
                    if(x%j==0)
                    count++;
              }
              if(count==2)
              console.log(x)
       }
       
}


