var questionNum = 1;
var correct = false;
var questionVal;
var questionText = ["What is the current date? (dd/mm/yyyy)","What is New Zealands national animal?","What does 你好 mean?","sample text","sample text"]
var date = new Date();
var now = date.toLocaleDateString('en-NZ');
var score = 0
var canChangeScore = true;

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
    }
}

function reload(){
    if(correct==false){
        document.location.reload();
    }else if(questionNum<3){
        questionNum+=1;
        var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
        document.getElementById('questionNum').innerHTML = question;
        document.getElementById('question').value = "";
        document.getElementById('answer').innerHTML = "";
        document.getElementById('next').value = "Restart Quiz";
        correct=false;
        canChangeScore=true;
    }else{
        alert("Well Done, your final score is "+score);
    }
}

function question1(){
    if (/*questionNum == 1 && */questionVal == now || questionVal == 0+now) {
        isCorrect();
    }else /*if (questionNum == 1) */{
        incorrect();
    }
}

function question2(){
    if(questionVal.toLowerCase()=="kiwi"){
        isCorrect();
    }else{
        incorrect();
    }
}

function question3(){
    if(questionVal.toLowerCase()=="hi"||questionVal.toLowerCase()=="hello"){
        isCorrect();
        questionNum = 3;
        document.getElementById('next').value = "Finish";
    }else{
        incorrect();
    }
}

function isCorrect(){
    console.log("correct");
    document.getElementById('answer').innerHTML = "Correct";
    correct = true;
    document.getElementById('next').value = "Next Question";
    if(canChangeScore==true){
        score = score+5;
        document.getElementById('score').innerHTML = "Score: "+score;
        canChangeScore=false;
    }
}

function incorrect(){
    console.log("incorrect");
    document.getElementById('answer').innerHTML = "Incorrect";
    correct = false;
    document.getElementById('next').value = "Restart Quiz";
    if(canChangeScore==true){
        score = score-5;
        document.getElementById('score').innerHTML = "Score: "+score;
        canChangeScore=false;
    }
}