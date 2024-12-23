let arr = [1,0,0,1,1,1,0,1,0,0,1];
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function rearrangeArray(arr){
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        if(arr[i]==1){
            swap(arr,i,j);
            j--;
        }
        else if(arr[i]==0){
            i++;
        }
    }
    console.log(arr);
}
rearrangeArray(arr);