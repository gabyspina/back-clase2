export class Encuesta {
	constructor(questions) {
		this.questions = questions;
		this.questionIndex = 0;
		this.answer = [];
	}

	getCurrentQuestion() {
		return this.questions[this.questionIndex];
	}

	// validateAndContinue
	validarRespuesta(choice) {
		console.log("answer", choice);

		this.questionIndex++;
		this.answer.push(choice);
	}

	isEnded() {
		return this.questions.length === this.questionIndex;
	}
}
