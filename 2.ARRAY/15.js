// reduce function
let arr = [1,2,3,4,5,6,7,8,9,10];
function getsum(a,b){
    return a+b;
}
const result = arr.reduce(getsum);
console.log(result);
