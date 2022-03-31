var questionNum = 1;
var correct = false;
var questionText = ["What is the current date? (dd/mm/yyyy)","sample text"]
var date = new Date();
var now = date.toLocaleDateString('en-NZ');

window.onload = function() {
    var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
    document.getElementById('questionNum').innerHTML = question;
    document.getElementById('next').value = "Restart Quiz";
};

function checkAnswer(){
    const questionVal = document.getElementById("question").value;
    
    if (questionNum == 1 && questionVal == now || questionVal == 0+now) {
        questionNum = 2;
        console.log("correct");
        document.getElementById('answer').innerHTML = "Correct";
        correct = true;
        document.getElementById('next').value = "Next Question";
    }else{
        console.log("incorrect");
        questionNum = 1;
        document.getElementById('answer').innerHTML = "Incorect";
        correct = false;
        document.getElementById('next').value = "Restart Quiz";
    }
}

function reload(){
    if(correct==false){
        document.location.reload();
    }else{
        var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
        document.getElementById('questionNum').innerHTML = question;
        document.getElementById('question').value = "";
    }
}