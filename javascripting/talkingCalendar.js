const talkingCalendar = function(date) {
  let year = ""
  let month = ""
  let day = ""
  let newDate = ""

  for (let  i = 0; i < date.length; i++){
    if (i < 4) {
      year += date[i]
    } if ( i > 4 && i < 7){
      month += date[i]
    } else if ( i >= 8 && i <= 9){
      day += date[i]
     
    } 
  }

  if (month == 01){
    month = "January "
  } else if (month == 02){
    month = "February "
  } else if (month == 03){
    month = "March "
  } else if (month == 04){
    month = "April "
  } else if (month == 05){
    month = "May "
  } else if (month == 06){
    month = "Juny "
  } else if (month == 07){
    month = "July "
  } else if (month == 08){
    month = "August "
  } else if (month == 09){
    month = "September "
  } else if (month == 10){
    month = "Octuber "
  } else if (month == 11){
    month = "November "
  } else {
    month = "December "
  } 

  if ( day == 01 ){
    day = day+"st, "
  } else if ( day == 02 ){
    day = day+"nd, "
  } else if ( day == 03 ){
    day = day+"rd, "
  } else {
    day = day+"th, "
  }
 return newDate = month + day + year
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));