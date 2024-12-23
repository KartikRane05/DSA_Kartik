let n =3;
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
for(let i=n-1;i>0;i--){
    let str = "";
    //for space
    for(let k=1;k<=(n-i);k++){
        str+="  ";
    }
    //for star
    for(let j=1;j<=(2*i-1);j++){
        str+="* "; 
    }
    console.log(str);
}