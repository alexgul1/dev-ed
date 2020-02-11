let x = 5;
let y = 0;
if (x == 0 & y ==0)
{
    console.log("Точка лежит в центре координат");
}
else if (x == 0)
{
    console.log("Точка лежит на оси Y");
}
else if (y == 0)
{
    console.log("Точка лежит на оси X");
}
else if (x > 0)
{
    if(y>0)
    {
    console.log("Точка лежит в I четверти");
    }
    else
    {console.log("Точка лежит в IV четверти"); }
}
else if (x < 0)
{
    if(y>0)
    {
    console.log("Точка лежит в II четверти");
    }
    else
    {console.log("Точка лежит в III четверти"); }
}