export function ActualDate () {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let currentDate = date.getDate()
    let dayOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sun","Sat"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <span>
           <span>{dayOfWeek[day]}, </span>
           <span>  {currentDate} {months[month]}, </span>
           <span>{hours}h : {minutes}m </span>
        </span>
    )
}