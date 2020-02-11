let _root = 200;
SquareRoot(_root);
SquareRootBinary(_root);
function SquareRoot(_root)
{
    for (let i = 1;  ; i++)
    {
        if(_root == i*i)
        {
            console.log("Корень - "+ i);
            break;
        }
        if(_root < i*i)
        {
            console.log("Корень с точностью до целого - " + i);
            break;
        }
    }
}

function SquareRootBinary( _root)
{
    let _left = 1; let _right = _root;
    let _mid=0; let _prev = 0;
    for(;;)
    {
        _mid = parseInt((_left+ _right)/2);
        if(_prev ==_mid)
        {break;}
        let _key = Math.abs(_mid*_mid);
        
        if(_root==_key)
        {
            console.log("Корень - " + _mid);
            break;
        }
        if (_key > _root)
        {_right = _mid;}
        else
        {_left = _mid;}
        _prev = _mid;
    }
    if(_root != _mid * _mid)
    {
        console.log("Корень с точностью до целого - " + _mid);
    }
}
