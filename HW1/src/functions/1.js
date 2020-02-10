let day = 4;
console.log(DayOfWeek(day))

function DayOfWeek(day)
{
    switch(day){
        case 1:
            return "Понедельник";   
        case 2:
            return "Вторник";
        case 3: 
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Нет такого значения"
        
    }

}
