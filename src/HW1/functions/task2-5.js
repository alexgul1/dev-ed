let numto19 = ["one " , "two ", "three " , "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ",
"twelve ", "thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "];
let tens = [ "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
let size = ["hundred ", "thousand ", "million ", "billion "];


function NumToString(num)
{
    if(typeof num == "number" && isFinite(num) && num > 0 && Number.isInteger(num)) {

        let strnum = "";
        let div;
        let mod = num;

        for (let i = 1000000000; i >= 1; i /= 1000) {

            div = Math.floor(mod / i);

            if (div === 0) {
                continue;
            } else {
                if (div >= 100) {
                    strnum += numto19[parseInt(div / 100) - 1];
                    strnum += size[0];
                    div %= 100;
                }
                if (div >= 20) {
                    strnum += tens[parseInt(div / 10) - 2];
                    if (div % 10 !== 0) {
                        strnum += numto19[parseInt(div % 10) - 1];
                    }
                } else if (div <= 19 && div !== 0) {
                    strnum += numto19[div - 1];
                }
            }
            mod %= i;

            strnum += SizeNum(i)
        }
        return strnum;
    }
    return null;
}

function SizeNum(length)
{
    if(length == 1000000000)
    {return size[3];}
    if(length == 1000000)
    {return size[2];}
    if(length == 1000)
    {return size[1];}
    else 
        return "";
}