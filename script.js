const dateDiv = document.getElementById("dateDiv");

const today = new Date();

const day = today.getDay(); // 0 Sunday : 6 Saturday

var todayName = "";

if(day == 0){
    todayName = "الأحد";
} else if(day == 1){
    todayName = "الإثنين";
} else if(day == 2){
    todayName = "الثلاثاء";
} else if(day == 3){
    todayName = "الأربعاء";
} else if(day == 4){
    todayName = "الخميس";
} else if(day == 5){
    todayName = "الجمعة";
} else if(day == 6){
    todayName = "السبت";
}

const dayNumber = today.getDate();

const month = today.getMonth() + 1;

const year = today.getFullYear();

//String Concatenation 
dateDiv.innerText = `${todayName} ${dayNumber}/${month}/${year}`;
