var arr1 = ["html", "css", "js", "bootstrap"];

var p = prompt("enter your course");

var ind = arr1.findIndex((ele) => ele == p);
if (ind == -1) {
    arr1.push(p);
    console.log(arr1)
} else {
    console.log("found");
}


var arr2=[
{
name:"malk",
job:"developer",
age:20,
address:"october"

},
{
name:"yara",
job:"developer",
age:23,
address:"october"

},
{
name:"mariam",
job:"teacher",
age:22,
address:"october"

},
{
name:"malk",
job:"doctor",
age:25,
address:"october"

},
]
var obj = arr2.findIndex(ele => ele.age == 25);

console.log(obj);

