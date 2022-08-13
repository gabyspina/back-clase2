export class UI {
    showQuestion(question) {
        const questionTittle  = document.getElementById('question');
        questionTittle.innerText = question; 
    }

    showChoices(choices) {
        const choicesContainer = document.getElementById('choices');
        for (let i = 0 ; i< choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.setAttribute('class', 'button');
            choicesContainer.append(button);
        }
    }

    }
