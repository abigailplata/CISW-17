now = new Date();

hour_of_day = now.getHours();
minute_of_hour = now.getMinutes();
seconds_of_minute = now.getSeconds();

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

/*New York Time:
d = new Date();
localTime = .getTime();
localOffset = d.getTimezoneOffset() * 60000;
UTC = localTime + localOffset;
offset = (-4);
newyork = UTC + (3600000*offset);
nd = new Date(newyork);
document.writeln("<i> New York Time: </i>" + "<i>" + nd.toLocaleString() + " EST </i><br><br>");
	*/	


