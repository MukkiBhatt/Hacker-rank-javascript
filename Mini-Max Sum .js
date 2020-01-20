function miniMaxSum(arr) {
    
    var smallest=Math.min(...arr);
    var largest=Math.max(...arr);
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum +=arr[i];

    }
    var a=sum-largest;
    var b=sum-smallest;
    console.log(a,b); 
    }
