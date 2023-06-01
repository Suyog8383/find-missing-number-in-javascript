let arr=[3,7,1,2,8,4,5,6,10];
function findMissingNumber(arr){
   let sorted = [...new Set(arr)].sort((a, b) => a - b);
   let obj={}
    let a=sorted[0];
    let b=sorted[sorted.length-1];

    for(let i=0;i<sorted.length;i++){
      obj[sorted[i]]=true;
    }
    for(let i=a;i<b;i++){
      if(obj.hasOwnProperty(i)){
          
      }else{
          return i;
      }
    }
    
    return obj;
}
console.log(findMissingNumber(arr))
