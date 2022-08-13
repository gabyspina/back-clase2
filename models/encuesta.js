export class Encuesta {
    constructor(questions) {
        this.questions = questions;
        this.questionIndex  = 0;
    }   

    getCurrentQuestion() {

        return this.questions[this.questionIndex]; 
    } 

    // validateAndContinue
    validarRespuesta () {
        this.questionIndex++;
    }

    isEnded () {
        return this.question,lenght === this.questionIndex;
    }    
}