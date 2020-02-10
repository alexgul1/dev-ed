let _arr = [5,10,654,11,-45,3,98,-568,12,-56];
InsertSort(_arr);

function InsertSort(_arr)
{
    for(let i = 1; i<_arr.length;i++)
    {
        let _key = _arr[i];
        let j = i-1;
        while(j>=0 && _arr[j] > _key)
        {
            _arr[j+1] = _arr[j];
            j=j-1;
        }
        _arr[j+1] = _key;
    }
    console.log(_arr)
}