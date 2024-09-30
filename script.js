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
    const secondsInADay = 24 * 60 * 60;
    let elapsedSeconds = (hour * 60 * 60) + (minute * 60) + second;
    let remainingSeconds = secondsInADay - elapsedSeconds; 
    let outputdiv = document.getElementById("masodikki");
    outputdiv.innerHTML = "Holnapig ennyi másodperc van: "+ remainingSeconds;
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
    let answer = "";
    for (let i = 0; i < word.length; i++) {
        answer+= word[i]+"<br>";
    }
    outputdiv.innerHTML=answer;
}
function Factorial(){
    let number = document.getElementById("fact").value;
    let outputdiv = document.getElementById("nyolcadikki");
    let fact=1;
    if (number<0){
        outputdiv.innerHTML="Negatív szám nem lehet!";
    }
    else if (number==0){
        outputdiv.innerHTML="1";
    }
    else{
        for (let i = 1; i <= number; i++) {
            fact =fact*i;
        }
        outputdiv.innerHTML=fact
    }
}
function NumberAvrage(){
    let number = document.getElementById("avrage").value;
    number = number.toString();
    let sum =0;
    let outputdiv = document.getElementById("kilencedikki")
    for (let i = 0; i < number.length; i++) {
        sum+=parseInt(number[i]);
    }
    outputdiv.innerHTML=sum/number.length
}
function Drawing(){
    let size = document.getElementById("drawing").value;
    let outputdiv = document.getElementById("tizedikki")
    if(size==1){
        outputdiv.innerHTML="%";
    }
    else if (size==2){
        outputdiv.innerHTML="%%<br>%%";
    }
    else if(size==3){
        outputdiv.innerHTML="%%%<br>%%%<br>%%%"
    }
    else if (size <=0){
        outputdiv.innerHTML="Ezt nem lehet megcsináni";
    }
    else {
        let drawing ="";
        let topAndButtom="";
        for (let iii = 0; iii < size; iii++) {
            topAndButtom+="%";
        }
        topAndButtom+="<br>";
        for (let i = 0; i < size-2; i++) {
            drawing+="%";
            for (let ii=0; ii<i; ii++){
                drawing+=" ";
            }
            drawing+="%";
            for (let ii=0; ii<(size-3)-i; ii++){
                drawing+=" ";
            }
            drawing+="%<br>";
        }
         outputdiv.innerHTML=topAndButtom+drawing+topAndButtom;
    }
}
function SpellingStop(){
    let word = document.getElementById("textEleven").value;
    let outputdiv = document.getElementById("tizenegyki");
    let answer = "";
    for (let i = 0; i < word.length; i++) {
        if (/^[a-zA-Z]+$/.test(word[i])){
            answer+= word[i]+"<br>";
        }
        else {
            break;
        }
    }
    outputdiv.innerHTML=answer;
}
function toHundred(){
    let outputdiv = document.getElementById("tizenkettoki");
    let wichOne =1;
    let whichRule =1;
    let print = "";
    for (let i = 1; i < 101; i++) {
        if (i%3==0){
            if (whichRule==wichOne){
                wichOne=1;
                whichRule+=1;
                if (whichRule==4){
                    whichRule=1;
                }
            }
            else {
                wichOne+=1;
                print+=i+", ";
            }
        }else {
            print+=i+", ";
        }

    }
    outputdiv.innerHTML=print;
}
function Diviser(){
    let outputdiv = document.getElementById("tizenharomki");
    let i = 10;
    let print="";
    while (i < 31) {
        print+=i+": "
        for (let ii = 2; ii <= i; ii++) {
            if (i%ii==0){
                print+=ii+", "
            }
        }
        i++; 
        print+="<br>"
    }
    outputdiv.innerHTML=print;
}
function FizzBuzz(){
    let outputdiv = document.getElementById("tizennegyki");
    let print ="1";
    for (let i = 2; i < 101; i++) {
        if (i%3==0 && i%5==0){
            print+=", fizzbuzz";
        }
        else if (i%3==0){
            print+=", fizz";
        }
        else if (i%5==0){
            print+=", buzz";
        }
        else {
            print+=", "+i;
        }
    }
    outputdiv.innerHTML=print;
}