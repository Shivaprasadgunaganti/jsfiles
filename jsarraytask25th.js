//1)push
let a=[1,2,3,4,5]
let a1=a.push()
console.log(a1)

//3)push
let b=[1,2,3]
b.push(4)
console.log(b)

//4)pop
let c=[1,2,3,4,5,6,7]
c.pop()
console.log(c)
 
//5)shift
let d= [1,2,3,4,5]
d.shift()
console.log(d)

// function demo(){
//   let d1=[1,2,3,4,5]
//   d1.shift()
//    return d1;
//  }
//    console.log(demo()) 

//6) unshift
let e=[2,3,4,5]
e.push()+e.unshift();
console.log(e)

//7)concat
let f=[1,2,3,,]
let f1=[4,5,6]
let f2=f+f1
console.log(f2)

//8)flat
let g= [1,2,3,[4,5],[6,7]]
let g1=g.flat();
console.log(g1)

//9)join
let h=["apple","banana","orange"]
let h1=h.join()
console.log(h1)

//10)delete
let i=["a","b","c","d","e"]
delete i[2]
console.log(i)

// 11)tostring
let j=[1,2,3,4,5]
let j1=j.toString()
console.log(j1)

// 12)
let k=[1,2,3,4,5,6]
let k1=Array.isArray(k)
console.log(k1)   // true

// let k=(1,2,3,4,5,6)
// let k1=Array.isArray(k)
// console.log(k1)  // false
