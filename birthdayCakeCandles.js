// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    var max=0;
    for(var i  in ar){
        if(ar[i]>max){
            max=ar[i];
        }
        else 
        max=ar[i];

    }
    var count=0;
    for(var j  in ar){
        if(ar[j]===max){
            count +=1;
        }

    }
    console.log(count);


}
