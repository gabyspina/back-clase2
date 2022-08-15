   import { questionArray} from "./question.js";
   import { Encuesta } from "./models/encuesta.js";
   import { UI } from "./models/UI.js";

   const renderPage  = (ui, encuesta) => {

      if (encuesta.isEnded()) {

         ui.showResult()   
         
      
     } else {

         ui.showQuestion(encuesta.getCurrentQuestion().question); 
         ui.showChoices(encuesta.getCurrentQuestion().choices, (currentChoice) => {
            encuesta.validarRespuesta(currentChoice);    
            renderPage(ui, encuesta);  
         });
      }
      
   }
   const main = () => {
      const encuesta = new Encuesta(questionArray);
      const ui = new UI();   

   
   renderPage(ui, encuesta);
   
 
   }

main()