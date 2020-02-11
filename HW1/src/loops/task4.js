let n =6;
Factorial(n);
function Factorial(n)
{
    let _factor=1;
    for (let i = 1; i<=n; i++)
    {
        _factor *=i; 
    } 
    console.log (_factor);
}