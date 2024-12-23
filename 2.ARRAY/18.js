let prices = [7,1,5,3,6,4];
let profit = 0;
    let i = 1;
    let cur_min = prices[0];
    while(i<prices.length){
        if(prices[i]<cur_min){
            cur_min = prices[i]
            i++;
        }else{
            profit = Math.max(profit,prices[i]-cur_min);
            i++;
        }
    }
console.log(profit);