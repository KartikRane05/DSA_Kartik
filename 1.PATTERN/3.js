let n =4;
for(let i=1;i<=n;i++){
    let str = "";
    //for space
    for(let j=1;j<=(n-i);j++){
        str+="  ";
    }
    //print star
    for(let k=1;k<=i;k++){
        str+="* ";
    }
    console.log(str);
}