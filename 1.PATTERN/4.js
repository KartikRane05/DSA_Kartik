let n=4;
for(let i=1;i<=n;i++){
    let str ="";
    //for space
    for(let j=1;j<=(n-i);j++){
        str+="  ";
    }
    // for star
    for(let k=1;k<=(2*i-1);k++){
        str+="* ";
    }
    console.log(str);
}