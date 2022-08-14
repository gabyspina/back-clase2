
export class UI {
    showQuestion(question) {
        const questionTittle  = document.getElementById('question');
        questionTittle.innerText = question; 
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        for (let i = 0 ; i< choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.setAttribute('class', 'button');
            button.addEventListener('click', () => callback(choices [i]));
            choicesContainer.append(button);
        }
    }
    
    
    
    showResult (result) {
        const questionTittle  = document.getElementById('question');
        questionTittle.innerText = result; 

        console.log('result', );
        const resultEnHtml =
        `<h1>Resultado</h1>
        
        `

    const element = document.getElementById ('quiz');
    element.innerHTML = resultEnHtml;
    }


    }
