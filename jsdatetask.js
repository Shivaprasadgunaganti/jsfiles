// 1)
dt=new Date()

let a=(dt.getYear(),dt.getMonth())
// console.log(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds())

//2)
birthdate="1990-05-15"
present=new Date()
k= new Date(birthdate)
age=present-k
// console.log(age/(86400000*365))

// 3)
pre="1990-05-15"
dt=new Date()
dt1= new Date(pre)

birth=dt1.getDate(pre)-dt.getDate()
// console.log(birth)

//4)
dt="2024-04-20"                                                    //   dt=prompt("first value:")
dt1="2024-04-30"                                                    //  dt1=prompt("second value:")

dt2=new Date(dt)
dt3=new Date(dt1)

diff=dt3.getDate(dt1)-dt2.getDate(dt)
// console.log("Days between two dates:"+diff)

// 5)
  dt="2024"                                                                  //    dt=+prompt("enter:")
if(dt%4 === 0 && (dt%100 !==0 || dt%400 ===0)){
    console.log("True")
}
else{
    console.log("False")
}

