let arr = ['abc','hello','c','d','c','abc','d'];
let obj = {};
for(const key of arr){
    if(obj[key]){
        obj[key]+=1;
    }else{
        obj[key]=1;
    }
}
console.log(Object.keys(obj)); 