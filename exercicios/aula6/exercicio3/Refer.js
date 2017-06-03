
var a = 2;
{
    let a = 3;
    console.log(a);
}

console.log(a);

{
    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR);
    ARR = 10;
    ARR[0] = 3;
    console.log(ARR);
}
