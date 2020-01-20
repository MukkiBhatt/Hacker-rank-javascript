// Complete the plusMinus function below.
function plusMinus(arr) {
    var l=arr.length;
    var p=0;
    var n=0;
    var z=0;
    for(var i=0;i<l;i++){
        if(arr[i]==0){
            z +=1;
        }
        else if(arr[i]<0){
            n +=1;
        }
        else {
            p +=1;
        }

    }
    
    console.log((p/l).toFixed(6) + "\n" + (n/l).toFixed(6) + "\n" + (z/l).toFixed(6));



}
