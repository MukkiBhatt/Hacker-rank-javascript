function compareTriplets(a, b) {
    var ap=[0,0]
    

    for(var i in a){
        if(a[i]>b[i]){
            ap[0] +=1;

        }
        else if (b[i]>a[i]){
            ap[1] +=1;
        }
    }
    return (ap )


}
