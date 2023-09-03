// // //document.write(5+6);
// // //var a=10
// // //var b=23
// // //var a="string"
// // //console.log(a)
// // //document.write(a)
// // //var let=10;
// // //document.write("Sum of a+b &nbsp;",a+b); //&nbsp is for spacing 
// // // var b=20;
// // // var b=30;
// // // document.write(a)
// // // {
// // //     let c=30;
// // //     document.write(c)
// // // }
// // //     document.write(c)

// // //     var v=10;
// // //     var b=20;
// // //     var u=20;
// // //     var _state="delhi";
// // //     var shiv="del";
// // //     var $gi="request";
// // //     var max=9;
// // // document.write(v+"<br>")
// // // document.write(b+"<br>")
// // // document.write(u+"<br>")

// // // let a="name"
// // // let b="10";
// // // let c=true
// // // let d=2000
// // // document.write(a+"<br>")
// // // document.write(b+"<br>")
// // // document.write(c+"<br>")
// // // document.write(d+"<br>")
// // //Operators (adddition)
// // let a=21;
// // let b=19;
// // document.write(a/b+"<br>")
// // document.write(a%b+"<br>")
// // document.write(a=+b+"<br>")
// var x=6;
// let y=8;
// let s;
// const z=10
// // console.log(x)
// const a = prompt("Enter value ")
// if(a%2==0)
// document.write("even");
// else
// document.write("odd");
// var a = "runing"
// document.write(typeof a);

//typecasting
// let x=6;
// // x=String(x)
// document.write(typeof x);

// let x=932;
// document.write(typeof String(x));

// loops
// for(i=1;i<5;i++)
// document.write(i + "<br>")
// var i=1;
// while(i<=5){
//     document.write(i+"<br>")
//     i++;
// }

// to print a pattern 
// * 
// * *
// * * *
// * * * *
// for(i=0;i<4;i++)
// {
//     for(j=0;j<i+1;j++)
//     {
//         document.write("*&nbsp");
//     }
//     document.write("<br>")
// document.write(" ")
// }

// for(i=0;i<4;i++)
// {
//     for(j=0;j<=i;j++)
//     {
//         document.write("*&nbsp");
//     }
//     document.write("<br>")
// document.write(" ")
// }

// for(i=0;i<3;i++)
// {
//     for(j=0;j<3;j++)
//     {
//        if(i==1 && j==1)
//        document.write("&nbsp&nbsp&nbsp")
//        else 
//        document.write("*&nbsp")
//     }
//     document.write("<br>")
// }
// document.write(" ")

// let arr=[1,2,3,4]
// document.write(arr)

// let a=new Array(1,2,3,4)
// a=a.reverse()

// document.write(a)
//  const college={
//     name:"k",
//     roll:14,
//     age:15,
//  }

// document.write(college.age+"<br>")
// document.write(college.name)

// let btn=document.getElementById('btn')
// btn.addEventListener('click',()=>{
//  let h1=document.createElement('h1')
//  h1.innerHTML="yayy!!"
//  document.body.append(h1)
// })

// function print(){
//     document.write("hello")   
// }

// print()

// const print=function(){
//     document.write("hello1")
// }
// print()

// const print=()=>{
//     document.write("hello3")
// }
// print()

// const print4=()=>document.write("hello4")
// print4()

// function fac(n){
//     var i=1;
//     let f=1;
//       for(i=1;i<=n;i++){
//      f=f*i;
//     }    
// document.write(f);
// }
// fac(5)

// console.log(document.body)
// console.lkog(document.getElementsByClassName('h'))
// // console.log(document.getElementsByClassName('h1'))

// console.log(document.querySelectorAll('h1'))

let btn = document.getElementById('btn')
// // const colors=()=>{
// //     alert('hello')

// btn.addEventListener('click',()=>{
//     alert("hello")
// })

// btn.addEventListener('click',()=>{
//     let body = document.body
//     body.style.backgroundColor = "blue"
// })
//     btn.addEventListener('mouseover',()=>{
//         let body=document.body
//         body.style.backgroundColor ="yellow"
//     })

// btn.addEventListener('click',()=>{
//     let h2 = document.createElement('h2')
//     h2.innerHTML="Hello"
//    document.body.prepend(h2)
// })

btn.addEventListener('click'),

const fetchData=async()=>{
    const url =https://data.covid19india.org/v4/min/timeseries.min.json;
    const res>=await

}
