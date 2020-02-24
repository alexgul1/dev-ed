let _numto19 = ["zero", "one" , "two", "three" , "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
    "twelve", "thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let _tens = ["","", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let _size = ["","thousand", "million", "billion"];

let _strnum = "ninety million one hundred fifty six thousand five hundred eighty nine";

console.log(StringToNum(_strnum));

function isNullOrEmpty(theString)
{
    return theString == null || typeof theString != "string" || theString.trim().length < 1;
}
function stringToNum(_strnum)
{
    if(isNullOrEmpty(_strnum))
    {return 0;}
    _strnum = _strnum.trim();
    _strnum += ' ';

    let _num = 0;

    for(let i = _size.length - 1; i >= 0; i--)
    {
        if(!isNullOrEmpty(_size[i]))
        {
            let _index = _strnum.indexOf(_size[i]);

            if(_index >= 0 && _strnum[_index + _size[i].length] === ' ')
            {
                let _count = stringToNum(_strnum.substr(0, _index));
                _num += _count * Math.pow(1000,i);
                _strnum = _strnum.slice(_index);
            }
        }
    }
    {
        let _index = _strnum.indexOf("hundred");

        if(_index >= 0 && _strnum[_index + "hundred".length] === ' ')
        {
            let _count = stringToNum(_strnum.substr(0, _index));
            _num += _count * 100;
            _strnum = _strnum.slice(_index);
        }
    }
    for(let i = _tens.length - 1; i >= 0; i--)
    {
        if(!isNullOrEmpty(_tens[i]))
        {
            let _index = _strnum.indexOf(_tens[i]);

            if(_index >= 0 && _strnum[_index + _tens[i].length] === ' ')
            {
                _num += i * 10;
                _strnum = _strnum.slice(_index);
            }
        }
    }
    for(let i = _numto19.length - 1; i >= 0; i--)
    {
        if(!isNullOrEmpty(_numto19[i]))
        {
            let _index = _strnum.indexOf(_numto19[i]);

            if(_index >= 0 && _strnum[_index + _numto19[i].length] === ' ')
            {
                _num += i;
                _strnum = _strnum.slice(_index);
            }
        }
    }
    return _num;
}