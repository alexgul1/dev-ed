let _arr = [5,10,654,-45,3,98,-568,12,-56];
FindMaxIndex(_arr)

function FindMaxIndex(_arr)
{
    let _max = _arr[0];
    for(let i = 0; i<_arr.length;i++)
    {
        if(_max < _arr[i])
        {_max= _arr[i]}
    }
    console.log(_arr.indexOf(_max));
}