// console.log("1 번")
// console.log("2 번")
// console.log("3 번")

// console.log("1 번")
// setTimeout(()=>{console.log("2 번")},3000)
// console.log("3 번")
// let pay=0
// console.log("짜장면 주문")
// console.log("8000원")
// pay+=8000

// console.log("먹는중")

// const order=()=>{
//     setTimeout(()=>{
//         console.log("콜라주문")
//         pay+=2000
// },2000)
    
// }

// const payment=()=>{console.log(`계산할 금액은 ${pay}`)}
//  order()
//  payment()

let pay=0
console.log("짜장면(8000원)주문이요")
pay+=8000

const order=(calback)=>{
    setTimeout(()=>{
        console.log("콜라2000원 주문")
        pay+=2000
        calback()
    },3000)
}
const payment=()=>{console.log(`계산할 금액은 ${pay}`)}
 order(payment)