let n =4;
for (let i=1;i<=n;i++){
    let str = "";
    let value =1;
    // for spaces
    for (let k=1;k<=(n-i);k++){
        str+="  "
    }
    for(let l=1;l<=i;l++){
        str+=value+" ";
        value++;
    }
    value =i-1;
    for(let m=1;m<=(i-1);m++){
        str+=value+" ";
        value--
    }
    console.log(str);
}