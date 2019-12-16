console.log(10 + 10)
console.log(10 / 3)
console.log(10 % 3)
console.log(10 * 42)


//1.letを使う方法 新しい  ES6
let greeting = "Hello"
console.log(greeting)

const greeting_c = "Hello"
console.log(greeting_c)

greeting = "Good morning"
console.log(greeting)

//2.varを使う方法　古い　ES5
var test = "テスト"
console.log(test)

//3.let,varを使わない方法
tmp = "hello"
console.log(tmp);

//定数
const teisuu = "hello"
console.log(teisuu);


const testScore = 100
if (testScore < 60) {
    console.log("落単");
}

if (testScore === 100) {
    console.log("100点満点！！")
}else if (testScore < 10) {
    console.log("退学")
    
} 


if (testScore === 100) {
    console.log("00点満点！!");    
}　else if (testScore >= 90) {
    console.log();
    
}