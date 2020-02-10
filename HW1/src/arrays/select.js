let _arr = [5,10,654,11,-45,3,98,-568,12,-56];
SelectSort(_arr);

function SelectSort(_arr)
{
    for(let i = 0; i<_arr.length;i++)
    {
        let _min = i;
        for (let j = i+1; j<_arr.length;j++)
        {
            if(_arr[j]<_arr[_min])
            {_min = j;}
        }
        let _temp = _arr[_min];
        _arr[_min] = _arr[i];
        _arr[i]= _temp;
    }
    console.log(_arr)
}