let _arr = [5,10,654,-45,3,98,-568,12,-56];
Reverse(_arr);

function Reverse (_arr)
{
    let _reversearr = [];
    for (let i = _arr.length-1; i>= 0;i--)
    {
        _reversearr.push(_arr[i])
    }
    console.log(_reversearr)
}