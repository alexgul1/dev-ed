let _arr = [5,10,654,11,-45,3,98,-568,12,-56];
Count(_arr);

function Count(_arr)
{
    let _count = 0;
    for(let i of _arr)
    {
        if (Math.abs(i) % 2 == 1 )
        {_count++;}
    }
    console.log(_count)
}