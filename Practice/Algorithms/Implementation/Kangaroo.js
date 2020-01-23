// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let pos1=x1;
    let pos2=x2;
    let diff=Math.abs(x1-x2);

    if ((v2>v1)) return 'NO';

    for(var i=0;i<=diff;i++){
        if (pos1==pos2) return "YES";
        pos1+=v1;
        pos2+=v2;
    }
    return 'NO';
}
