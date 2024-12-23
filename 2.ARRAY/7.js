let string = "javascript";
let obj = {};
for(const char of string){
    if(obj[char]){
        obj[char]=obj[char]+1;
    }
    else{
        obj[char]=1
    }
}
console.log(obj);