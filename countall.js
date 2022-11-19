var str='Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain.';
var arr=str.split(' ');
//console.log(arr);
var strarr=[];
var keys=[];
var count=0;
for(i=0;i<arr.length;i++)
{
    if(keys.indexOf(arr[i])==-1)
    {
   //console.log(arr[i]);
   for(j=0;j<arr.length;j++)
   {
        if(arr[i]===arr[j])
        {
            count++;
        }
   }
  // console.log(arr[i],count);
  keys.push(arr[i]);
   strarr.push({'key':arr[i],'value':count});
   count=0;
    }
}
//console.log(arr.length);
console.log(Object.values(strarr));
