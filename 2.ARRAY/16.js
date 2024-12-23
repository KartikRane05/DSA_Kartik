let arr = [5,9,1,8,2,3];
function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function reverseArr(arr){
    let i =0;
    let j= arr.length-1;
    while(i<j){
        swap(arr,i,j);
        i++;
        j--;
    }
    console.log(arr);
}
reverseArr(arr);