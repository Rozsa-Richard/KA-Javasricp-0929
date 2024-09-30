function cuboid(){
    let a = document.getElementById("a_oldal").value;
    let b = document.getElementById("b_oldal").value;
    let c = document.getElementById("c_oldal").value;
    let terület = a * b * c;
    let felület = a*b*2 + a*c*2 + c*b*2;
    let outputdiv = document.getElementById("elsoki");
    outputdiv.innerHTML = "Felület: "+felület+" cm2<br>Terület: "+terület+" cm3";
}
function secondsUntil(){
    let hour = document.getElementById("ora").value;
    let minute = document.getElementById("perc").value;
    let second = document.getElementById("masodperc").value;
    let untilTomorrow= (24-(hour+1))*3600;
    let outputdiv = document.getElementById("masodikki");
    outputdiv.innerHTML = "Holnapig ennyi másodperc van: "+ untilTomorrow;
}
function bmiCalculator(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi= weight/height;
    let outputdiv = document.getElementById("harmadikki");
    outputdiv.innerHTML = "A bmi-d: "+ bmi;
}
function gradeMaker(){
    let maxScore = document.getElementById("maxScore").value;
    let score = document.getElementById("score").value;
    let percent= score/maxScore*100;
    let grade = "";
    if (percent>=90){grade="A"}
    else if (percent>=70){grade="B"}
    else if (percent>=50){grade="C"}
    else if (percent>=30){grade="D"}
    else {grade="F"}
    let outputdiv = document.getElementById("negyedikki");
    outputdiv.innerHTML = "Százalék: "+percent+"%<br>Érdemjegy: "+grade;
}
function leapyearCal(){
    let year = document.getElementById("leapyear").value;
    let outputdiv = document.getElementById("otodikki");
    if (year%4==0){
        outputdiv.innerHTML=year+" szökőévnek számít!";
    }else {
        outputdiv.innerHTML=year+" nem számít szökőévnek!";
    }
}
function StonePaperSeisors(){
    let playerone = document.getElementById("playerOne").value;
    let playertwo = document.getElementById("playerTwo").value;
    let outputdiv = document.getElementById("hatodikki");
    if (playerone=="k" || playerone=="p" || playerone=="o"){
        outputdiv.innerHTML="Az első játékos nem jól adta meg a jelét" ;}
    if (playerone=="k" || playerone=="p" || playerone=="o"){
        outputdiv.innerHTML="A násodik játékos nem jól adta meg a jelét"; }
    if ((playerone=="o" && playertwo=="p" ) || (playerone=="k"&& playertwo=="o")|| (playerone=="p"&& playertwo=="k")){
        outputdiv.innerHTML="Az első játékos nyert!;"}
    else if ((playerone=="p" && playertwo=="o" ) || (playerone=="o"&& playertwo=="k")|| (playerone=="k"&& playertwo=="p")){
        outputdiv.innerHTML="A második játékos nyert!";}
     else {outputdiv.innerHTML="Döntetlen!";}
}
function Spelling(){
    let word = document.getElementById("word").value;
    let outputdiv = document.getElementById("hetedikki");
    for (i in word){
        outputdiv.innerHTML=i+"<br>"
    }
}