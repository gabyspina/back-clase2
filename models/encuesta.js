export class Encuesta {
    constructor(questions) {
        this.questions = questions;
        this.clasificacion = [];
        this.questionIndex  = 0;
    }   

    getCurrentQuestion() {

        return this.questions[this.questionIndex]; 
    } 

    // validateAndContinue
    validarRespuesta (choice) {
        
        console.log('answer', choice);
        this.questionIndex++;
    }

    isEnded () {
        return this.question,lenght === this.questionIndex;
    }    
}