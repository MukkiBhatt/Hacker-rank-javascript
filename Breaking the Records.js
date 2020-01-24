
// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var min =scores[0];
    var max=scores[0];
    var cmin=0;
    var cmax=0;
    for(var i=0;i<scores.length;i++){
        if(scores[i]<min){
            min=scores[i];
            cmin +=1;
        }
        else if(scores[i]>max){
            max=scores[i];
            cmax +=1;
        }
    }

   // console.log(cmax +" "+ cmin);
    var result=[cmax,cmin];
    return result;


}
