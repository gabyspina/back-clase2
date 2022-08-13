   import { questionArray } from "./question.js";
   import { Encuesta } from "./models/encuesta.js";
   import { UI } from "./models/UI.js";


 const main = () => {
    const encuesta = new Encuesta(questionArray);
    const ui = new UI();

      ui.showQuestion('pregunta'); 

    console.log( 'consulta', encuesta)
 }
main()