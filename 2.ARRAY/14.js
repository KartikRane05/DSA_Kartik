// filter function
let arr = [1,2,3,4,5,6,7,8,9,10];
function checkEven(el){
    return el%2==0
}
const result = arr.filter(checkEven)
console.log(result);