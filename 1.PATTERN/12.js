let n =5;
let value;
for(let i=1;i<=n+1;i++){
    let str ="";
    value = n;
    for(let l=1;l<=i;l++){
        str+=value+" ";
        value--;
    }
    console.log(str);
}
for(let i=n;i>0;i--){
    let str ="";
    value =n;
    for(let j=1;j<=i;j++){
        str+=value+" ";
        value--;
    } 
    console.log(str);
}