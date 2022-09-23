let x = Number(prompt("enter x value"));
let y = Number(prompt("enter y value"));
let z = Number(prompt("enter z value"));
//شرط مثلث بودن 
if (x + y > z && x + z > y && z + y > x) {
    //شرط مثلث متساوی الاضلاع
    if (x == y && y == z) {
        console.log("Equilateral triangle , مثلث متساوی الاضلاع")
        //شرط مثلث متساوی الاساقین
    } else if ((x == y) || (x == z) || (y == z)) {
        console.log("Isosceles triangle , مثلث متساوی الساقین")
        //شرط مثلث قائم الزاویه
    } else if ((x * x == y * y + z * z) || (y * y == x * x + z * z)
        || (z * z == x * x + y * y)) {
        console.log("right angled triangle , مثلث قائم الزاویه")
        //مثلث مختلف الاضلاع
    }else {
        console.log("Scale-sided triangle , مثلث مختلف الاضلاع ")
    }
} else{
    console.log("No Triangle!")
}