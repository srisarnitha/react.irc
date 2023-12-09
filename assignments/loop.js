let newMap = new Map()

newMap.set("BasketBall", "sport");
newMap.set("Ria", "girl");

for (let [key, value] of newMap) {
	console.log(key + " is " + value);
}
//2 foreach loop

let nMap = new Map();
nMap.set("Monday", 1);
nMap.set("Tuesday", 2);
nMap.set("Wednesday", 3);
nMap.forEach((values, keys) => {
	console.log(values, keys);
});
//3 map keys
var arr = [12, 22, 32, 42, 52];
var newarr = arr.map(myfun)

function myfun(num)
{
    return num*5;
}

newarr.forEach(myprint)

function myprint(num)
{
    console.log(num+" ");
}