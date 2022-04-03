var questionNum = 1;
var correct = false;
var questionVal;
var questionText = ["What is the current date? (dd/mm/yyyy)","What is lxqt?🐦","sample text","sample text","sample text"]
var date = new Date();
var now = date.toLocaleDateString('en-NZ');

window.onload = function() {
    var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
    document.getElementById('questionNum').innerHTML = question;
    document.getElementById('next').value = "Restart Quiz";
};

function checkAnswer(){
    questionVal = document.getElementById("question").value;

    if(questionNum == 1){
        question1()
    }else if(questionNum ==2){
        question2()
    }else if(questionNum ==3){
        question3()
    }else if(questionNum ==4){
        question4()
    }else if(questionNum ==5){
        question5()
    }

}

function reload(){
    if(correct==false){
        document.location.reload();
    }else{
        var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
        document.getElementById('questionNum').innerHTML = question;
        document.getElementById('question').value = "";
        document.getElementById('answer').innerHTML = "";
        document.getElementById('next').value = "Restart Quiz";
        correct=false;
    }
}

function question1(){
    if (/*questionNum == 1 && */questionVal == now || questionVal == 0+now) {
        questionNum = 2;
        console.log("correct");
        document.getElementById('answer').innerHTML = "Correct";
        correct = true;
        document.getElementById('next').value = "Next Question";
    }else /*if (questionNum == 1) */{
        console.log("incorrect");
        questionNum = 1;
        document.getElementById('answer').innerHTML = "Incorrect";
        correct = false;
        document.getElementById('next').value = "Restart Quiz";
    }
}

function question2(){

}

function question3(){

}

function question4(){

}

function question5(){

}