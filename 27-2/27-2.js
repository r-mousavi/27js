let Height = prompt("please insert your Height , only meter ");

if (Height > 2.5) {
    alert("not valid");
    throw new Error();
}

const Weight = prompt("please insert your Weight , only kilogram ");

if (Weight > 300) {
    alert("not valid");
    throw new Error();
}

const BMI = Weight / Math.pow(Height, 2);

if (BMI < 16) {
    alert("Severe Thinness : " + BMI)
    throw new Error();
}

if (16 <= BMI && BMI <= 17) {
    alert("Moderate Thinness : " + BMI)
    throw new Error();
}

if (17.1 <= BMI && BMI <= 18.5) {
    alert("Mild Thinness : " + BMI)
    throw new Error();
}

if (18.6 <= BMI && BMI <= 25) {
    alert("Normal : " + BMI)
    throw new Error();
}

if (25.1 <= BMI && BMI <= 30) {
    alert("Overweight : " + BMI)
    throw new Error();
}

if (30.1 <= BMI && BMI <= 35) {
    alert("Obese Class I : " + BMI)
    throw new Error();
}

if (35.1 <= BMI && BMI <= 40) {
    alert("Obese Class II : " + BMI)
    throw new Error();
}

if (BMI > 40) {
    alert("Obese Class III : " + BMI)
}