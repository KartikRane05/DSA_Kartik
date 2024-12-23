let num1 = [1];
let num2 = [];
let i = 0;
let j = 0;
let k = 0;
let result = [];
while(i<num1.length && j<num2.length){
    if(num1[i]<num2[j]){
        result[k] = num1[i];
        i++;
        k++;
    }else{
        result[k] = num2[j];
        j++;
        k++;
    }
}
while(i<num1.length){
    result[k]=num1[i];
    k++;
    i++;
}
while(j<num2.length){
    result[k]=num2[j];
    k++;
    j++;
}
console.log(result);