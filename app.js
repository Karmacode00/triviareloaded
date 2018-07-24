window.onload = function() {
}
    function check() {
        //Preguntas//
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var correct = 0;

    if (question1 == "no") {
        correct++;
    }
    if (question2 == "bien") {
        correct++;
    }
    if (question3 == "5 etapas") {
        correct++;
    }
    if (question4 == "octava") {
        correct++;
    }
 //Resultado en caja de score con animacion guardada en carpeta quiz mas mensaje//
 
 var score;
    //Resultados segun acertados//
    if (correct == 0) {
        score = 2;
      
    }

    if (correct > 0 && correct < 4) {
        score = 1;
    }

    if (correct == 3) {
        score = 1;
    }

    if (correct == 4) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    
    document.getElementById("number_correct").innerHTML = "Tienes " + correct + " correctas.";
    
}