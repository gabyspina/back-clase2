export class Encuesta {
    constructor(choices, question) {
        this.question = question;
        this.choices = choices;
        this.questionIndex  = 0;
    }   

    getCurrentQuestion() {

        return this.question[this.questionIndex]; 
    }

    continue(answer) {
        this.questionIndex++;
    }
    isEnded () {
        return this.question,lenght === this.questionIndex;
    }    
}