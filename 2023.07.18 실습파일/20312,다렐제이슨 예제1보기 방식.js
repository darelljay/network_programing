// Syncronouns(동기)
//  요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식 

console.log(1);
setTimeout(()=>{console.log("3")},3000)
console.log(2);
console.log(3);
console.log(4);

