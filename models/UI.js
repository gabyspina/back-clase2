
    const resultado = new Array();
    
    console.log('array', resultado);
export class UI {

    showQuestion(question) {
        const questionTittle  = document.getElementById('question');
        questionTittle.innerText = question; 
        console.log('question', question );

        resultado.push(question) 
        
console.log('pregunta',resultado)
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

        console.log('result', result);
        const resultEnHtml =
        `<h1>Resultado</h1>
        ${resultado.map(item => `<p>${item}</p>`).join('')}
        `

    const element = document.getElementById ('quiz');
    element.innerHTML = resultEnHtml;
    }
    
    }
