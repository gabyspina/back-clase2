import { questionArray } from "./question.js";
 import { Encuesta } from "./models/encuesta.js";

 const main = () => {
    const encuesta = new Encuesta(questionArray);
    console.log( 'consulta', encuesta)
 }
main()