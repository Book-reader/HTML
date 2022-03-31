var questionNum = 1;
var questionText = ["What is the current date? (dd/mm/yyyy)","sample text"]
var date = new Date();
var now = date.toLocaleDateString('en-NZ');

window.onload = function() {
    //do something to make it update the question maybe put checkanswer inside it or make a function draw thing
    var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
  
    document.getElementById('questionNum').innerHTML = question;
};

function checkAnswer(){
    const questionVal = document.getElementById("question").value;
    
    if (questionNum == 1 && questionVal == now) {
        questionNum = 2;
        console.log("correct");
        document.getElementById('answer').innerHTML = "Correct";
        var question = ("Question "+questionNum +": "+questionText[(questionNum-1)]);
  
        document.getElementById('questionNum').innerHTML = question;
    }else{
        console.log("incorrect");
        questionNum = 1;
        document.getElementById('answer').innerHTML = "Incorect";
    }
}

function reload(){
    document.location.reload();
}