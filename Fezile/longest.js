
function longest(ln=[]){
   var arr=[];
    var str="";
   arr.push(ln[0]);

   for(var i=1; i<ln.length; i++){
    if (ln[i].length>arr[0].length){
        lngst=ln[i];
        arr=[];
        arr.push(ln[i]);
    }else{

       if (arr[0].length==ln[i].length){
           arr.push(ln[i]);
       }
    }
    
   }

 for (var a=0; a<=arr.length-1; a++){
        str+=(arr[a]+" ");
   }

   console.log(str);

}
longest([ "Once", "upon", "a", "time"]);