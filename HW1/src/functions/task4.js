let _x1 = 8;
let _y1 = 4;
let _x2 = -5;
let _y2 = 13;

console.log(Distance(_x1,_y1,_x2,_y2));

function Distance(_x1,_y1,_x2,_y2)
{
    let _distance = Math.sqrt(Math.pow(_x1 - _x2, 2) + Math.pow(_y1 - _y2, 2));
    return _distance;
}