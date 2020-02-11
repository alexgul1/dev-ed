let test = false;
let num = 11;
if (num <=0)
{
    console.log("Только натуральные числа!")
}
else
{
    for(let i = 2; i <= num; i++)
    {
        if(num % i == 0 & i != num)
        {
            test = false;
            break;
        }
        else
        {
            test = true;
        }
    }
    if (test)
    {
        console.log("Число простое");
    }
    else
    {
        console.log("Число не простое")
    }
}