now = new Date();

hour_of_day = now.getHours();
minute_of_hour = now.getMinutes();
seconds_of_minute = now.getSeconds();
hour_of_day_ny = now.getHours() - 21;

document.write("<h2>");
document.write("It is "+hour_of_day + ":" + minute_of_hour + ":" + seconds_of_minute+".");
document.write("</h2");

document.write("<p>");
if  (hour_of_day < 10)  {
     document.write(" Good morning, LA!"); 
}  else if ((hour_of_day >= 14) && (hour_of_day <= 17)) {
     document.write(" Good afternoon, LA!");
}  else if (hour_of_day >= 17)  { 
     document.write(" Good evening, LA!");
}  else  {
     document.write(" Good day, LA!");
}
document.write("</p>");

//New York time:
document.write("<h2>");
document.write("It is "+hour_of_day_ny + ":" + minute_of_hour + ":" + seconds_of_minute+".");
document.write("</h2");

document.write("<p>");
if  (hour_of_day_ny < 10)  {
     document.write(" Good morning, NY!"); 
}  else if ((hour_of_day_ny >= 14) && (hour_of_day_ny <= 17)) {
     document.write(" Good afternoon, NY!");
}  else if (hour_of_day_ny >= 17)  { 
     document.write(" Good evening, NY!");
}  else  {
     document.write(" Good day, NY!");
}
document.write("</p>");
