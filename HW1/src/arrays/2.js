let _arr = [5,10,654,-45,3,98,-568,12,-56];
FindMax(_arr)

function FindMax(_arr)
{
    let _max = _arr[0];
    for(let i = 0; i<_arr.length;i++)
    {
        if(_max < _arr[i])
        {_max= _arr[i]}
    }
    console.log(_max)
}