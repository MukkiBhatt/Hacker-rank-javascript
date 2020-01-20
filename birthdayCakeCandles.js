// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    var max=Math.max(...ar);
    var count =0;
    for(let i = 0; i < ar.length; i++) {
        if(ar[i] === max) {
            count +=1;
        }
    }
    return count;
  
}
