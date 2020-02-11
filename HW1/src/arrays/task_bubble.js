let _arr = [5,10,654,11,-45,3,98,-568,12,-56];
BubbleSort(_arr);

function BubbleSort(_arr)
{
    for (let i = 0 ; i<_arr.length;i++)
    {
        for(let j = 0; j<_arr.length-i-1;j++)
        {
            if(_arr[j]>_arr[j+1])
            {
                let _temp = _arr[j];
                _arr[j]=_arr[j+1];
                _arr[j+1]= _temp;
            }
        }
    }
    console.log(_arr)
}