let _num = 13574;
Flip(_num)
function Flip (_num)
{
    let _s = _num.toString();
    let _flip = "";
    for(let i = _s.length-1;i>=0;i--)
    {
        _flip += _s[i];
    }
    console.log(parseInt(_flip))
}
