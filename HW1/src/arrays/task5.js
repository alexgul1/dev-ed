let _arr = [5,10,654,-45,3,98,-568,12,-56];
SumOfUnpair(_arr);

function SumOfUnpair(_arr)
{
    let _sum = 0;
    for (let i = 0; i<_arr.length; i++)
    {
        if(i % 2 == 1)
        {
            _sum+= _arr[i]
        }
    }
    console.log(_sum)
}