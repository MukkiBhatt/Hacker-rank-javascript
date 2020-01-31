// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var c1=[0,0,0,0,0];
    let max = 0;    
    let index=4;
    let num = 0;
    let i;
    for( i=0;i<arr.length;i++){
        num = arr[i]-1;
        c1[num]+=1;
        if(c1[num]>max){
            max=c1[num];
        }
    }

    for(i=0;i<c1.length;i++){
        if(c1[i]===max){
            index=i;
            break;
        }
    }

    return index+1;

}
