let _arr = [5,10,654,11,-45,3,98,-568,12,-56];
Swap(_arr)

function Swap(_arr)
{
    for(let i = 0; i< _arr.length/2; i++)
    {
        let _temp = _arr[i];
        _arr[i] = _arr[_arr.length/2+i]
        _arr[_arr.length/2+i]= _temp;
    }
    console.log(_arr)
}