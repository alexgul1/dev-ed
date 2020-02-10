let _numto19 = ["one " , "two ", "three " , "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ",
"twelve ", "thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "];
let _tens = [ "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
let _size = ["hundred ", "thousand ", "million ", "billion "];

let _num = 90156589;
console.log(NumToString(_num));

function NumToString(num)
{
    
    let _strnum = "";
    let _div; let _mod = num;

    for(let i = 1000000000; i >= 1; i /= 1000)
    {
        
        _div = Math.floor( _mod / i);

        if(_div == 0)
        { continue; }
        else
        {
            if(_div >= 100)
            {
                _strnum +=  _numto19[parseInt(_div / 100) - 1];
                _strnum +=_size[0];
                _div %=100;
            }
            if(_div >= 20)
            {
                _strnum +=_tens[parseInt(_div / 10) - 2];
                if(_div % 10 != 0)
                {
                    _strnum +=_numto19[parseInt(_div % 10) -1];
                }
            }
            else if(_div <= 19 & _div != 0)
            {
                _strnum += _numto19[_div - 1];
            }
        }
        _mod %= i;
        
        _strnum +=SizeNum(i)
    }
    return _strnum;
}

function SizeNum(length)
{
    if(length == 1000000000)
    {return _size[3];}
    if(length == 1000000)
    {return _size[2];}
    if(length == 1000)
    {return _size[1];}
    else 
        return "";
}