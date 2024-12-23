let n = 5;
for(let i=n-1;i>0;i--){
    let str ="";
    // for space
    for(let j=1;j<=(n-i);j++){
        str+="  ";
    }
    // for star
    for(let k=1;k<=(2*i-1);k++){
        str+="* ";
    }
    console.log(str);
}
