
var degree=prompt("please enter your degree")
 if(degree==null ||degree=="")
    console.log('please enter the grade')
else{
if(degree>100)
    console.log('please enter degree(0-100)') 
else if(degree>=90&&degree<=100)
    console.log('A')
else if(degree>=80)
    console.log('B')
else if(degree>=70)
    console.log('C')
else if(degree>=60)
    console.log('D')


else
    console.log('F')
}

