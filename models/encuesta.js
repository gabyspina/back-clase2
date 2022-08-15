export class Encuesta {
    constructor(questions) {
        this.questions = questions;
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
        return this.questions.length === this.questionIndex;
    }    
    
}   
