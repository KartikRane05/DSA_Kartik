let n =5;
for(let i=n;i>0;i--){
    let str = "";
    //for space 
    for(let j=n;j<=(j-i);j--){
        str+=" ";
    }
    // for number
    for(let k=n;k>0;k--){
        str+=k+" ";
    }
    console.log(str);
}
