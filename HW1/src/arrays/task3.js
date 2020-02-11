let _arr = [5,10,654,-45,3,98,-568,12,-56];
FindMinIndex(_arr)

function FindMinIndex(_arr)
{
    let _min = _arr[0];
    for(let i = 0; i<_arr.length;i++)
    {
        if(_min> _arr[i])
        {_min= _arr[i]}
    }
    console.log(_arr.indexOf(_min))
}