// var x = 1;
// console.log(x);
// function a(){
    // x=10;
    // console.log(x);
// }

// a();   //1 10
//....................

// let x = 10;
// console.log(x);
// function a(){
    // x=100;
    // console.log(x);
// }
// a();
// x=1000; //10 100

//...................

// const x = 100;
// console.log(x);
// function a(){
    // x=10;
    // console.log(x);
// }
// a();//100 typeoferror:assignment to constant variable
//............................

// function a(){
    // console.log(x);
// }
// a();
// var x=2  //undefined
//......................

// let x;
// function b(){
    // console.log(x);
// }
// b();
// x=2;  //undefined
//..........................

// function a(){
    // console.log(x);
// }
// a();
// let x=2 //error
//...................

// var a=1;
// let b=2;
// {
    // var a = 10;
    // let b = 20;
    // const c = 30;
    // console.log(a);
    // console.log(b);
    // console.log(c);
// }

// console.log(b); //10 20 30 2
//...........................

// function x(){
     // var a =7;
     // function y(){
         // console.log(a);
     // }
     // return y;
 // }
 // var z =  x();
 // console.log(z);
 // z();   //function y() 7
 //................................
 
 // function x(){
    // for(var i=0;i<6;i++){
        // setTimeout(()=>{
            // console.log(i);
        // },1000*i)
    // }
// }
// x();//6
//...................................

// function x(){
    // for(var i=0;i<6;i++){
        // function close(i){
                // setTimeout(function(){
                    // console.log(i);
                // },1000*i)
        // }   
        // close(i);
        // console.log("interview");
    // }
// }
// x();  //interview 0 1 2 3 4 5
//.......................................

const person = {
    name:"nagarro ",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}