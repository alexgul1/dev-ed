let _num = -53244231;

Sums(_num)
function Sums (_num)
{
    let _sum = 0;
    let n = _num.toString();
    for (let i =0; i<n.length; i++)
    {
        if(n[i]== "-")
        {continue;}
        else
        {_sum += parseInt(n[i]);}
    }
     console.log(_sum)
}