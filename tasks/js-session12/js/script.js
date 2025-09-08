function looping(startNum,endNum,breakNum,continueNum){
    if(startNum == null || endNum == null || breakNum == null || continueNum == null){
        console.log("Please enter all values");
    }
else{
    for(var i=startNum;i<=endNum;i++){
         if(i==breakNum)break;
         if(i==continueNum) continue;
            console.log(i)
    }
}
}
looping(1,10,7,4);
looping(1,9,5)
looping(7)
looping(6,3)



for(var i=1;i<=5;i++){
    var fName=prompt("please enter your name")
    if(fName=="malk") break
    console.log(fName)
}


var arr1=["html","javascript","css","boatstrap"]
var x=prompt("please enter your course")
if(arr1.includes(x))
    console.log("found")
else{
    arr1.push(x);
    console.log(arr1)
}