let n =5;
//upper portion
for(let i=1;i<=(Math.floor(n/2));i++){
    let str = "";
    //first star
    for(let j=1;j<=i;j++){
        str+="* ";
    }
    //space
    for(let k=1;k<=(n-2*i);k++){
        str+="  ";
    }
    for(let l=1;l<=i;l++){
        str+="* ";
    }
    console.log(str);
}
// middle portion
for(let i=Math.ceil(n/2);i<=Math.ceil(n/2);i++){
    let str = "";
    for(let k=1;k<=i;k++){
        str+="* ";
    }
    for(let l=1;l<=(i-1);l++){
        str+="* ";
    }
    console.log(str);
}
// lower portion
for(let i=(Math.floor(n/2));i>0;i--){
    let str = "";
    //first star
    for(let j=1;j<=i;j++){
        str+="* ";
    }
    //space
    for(let k=1;k<=(n-2*i);k++){
        str+="  ";
    }
    for(let l=1;l<=i;l++){
        str+="* ";
    }
    console.log(str);
}