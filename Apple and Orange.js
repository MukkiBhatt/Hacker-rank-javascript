function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var ca=0;
    var co=0;
    for(var i=0;i<apples.length;i++){
        
        if(((apples[i]+a)>=s)&&((apples[i]+a)<=t)){
            ca=ca+1;
        }
        
        }
        
    for(var j=0;j<oranges.length;j++){
        
        if(((oranges[j]+b)>=s)&&((oranges[j]+b)<=t)){
            co=co+1;
        }
        
        }
    console.log(ca);
    console.log(co);


}
