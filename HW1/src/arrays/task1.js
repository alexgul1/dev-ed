let _arr = [5,10,654,-45,3,98,-568,12,-56];
FindMin(_arr)

function FindMin(_arr)
{
    let _min = _arr[0];
    for(let i = 0; i<_arr.length;i++)
    {
        if(_min> _arr[i])
        {_min= _arr[i]}
    }
    console.log(_min)
}