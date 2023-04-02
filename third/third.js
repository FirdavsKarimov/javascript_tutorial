// console.log(true !== false)
// console.log(true != false)
// console.log(1 == '0' || false)

// if else

// let temp = 1;
// //false == 0, null , underfined
// if(temp){
// console.log('havo issiq')
// } // ishlaydi 



// let age = prompt();
// if(age >= 18){
//     console.log('you can open gmail')
// } else {
//     console.log('you can`t open gmail')
// }

temp = 0 // temp>0 && temp<10 , temp>10 && temp<15 , temp>15 && temp<25

// if(temp<=0){
//     console.log('havo juda sovuq')
// } else if(temp<=10){
//     console.log('havo sovuq')
// } else if(temp<=15){
//     console.log('havo iliq')
// } else if(temp<=25){
//     console.log('havo issiq');
// } else {
//     console.log('not found')
// } 
// agar if elsedagi ma`lumotlar bitta qatorga sig`sa figurali qavs kk emas
 
// =====================
//TERNARY OPERATOR |?| QUESTION MARK OPERATOR |CONDITIONAL OPERATOR
 // ikkita holatni soddaroq tarzda tekshirish uchun kerak  bu faqat true yoki falsni tekshirish uchun foydalanish maslahat beriladi 
  // ? -- if.  : -- else

//   temp<0? === if (temp < 0)
// temp < 0 ? console.log('yaxshi ajoyib'): console.log('birnima'); 


// ============ NULLISH OPERATOR. ?? --> null underfined ; or bilan bir xil ishlaydi
// OR && --> null  , underfined ,0 , false, NaN

// console.log(false || 1) // 1
// console.log(false ?? 1); // false

// console.log(2**50); // ikkining 50 darajasi 


//HOMEWORK

let home = 'ECMASCRIPT'
if(home ==='ECMASCRIPT') console.log('Right ')
else console.log('you don`t know this is ECMASCRIPT')

let a;
let b;
if(a + b <4 ){
    console.log('below')
} else {
    console.log('over')
}


let message;
let login = 'Director'
// if(login == 'Employee') {
//     message ='Hello'
// } else if(login == 'Director'){
//     message ='Greetings'
// } else if(login = ''){
//     message ='No login'
// } else {
//     message =''
// }

login =='Employee' ? message = 'Hello'
: login == 'Director' ? message ='Greetings'
: login == '' ? message ='No login'
: message=''
