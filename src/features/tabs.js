import { html, css, js } from "../assets/indexSVG";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    lang: "html",
    imgURL: html,
    buttonContent: "HTML",
    code: `<div>
        <h1>Editeur de code avec React</h1>
        <p>Codez directement sur votre navigateur.</p>
</div>
        `,
  },
  {
    id: 2,
    lang: "css",
    imgURL: css,
    buttonContent: "CSS",
    code: `body {
            font-family: Roboto, sans-serif;
            padding: 25px;
            color: #111;
            background-color : #f1f1f1
}`,
  },
  {
    id: 3,
    lang: "js",
    imgURL: js,
    buttonContent: "JavaScript",
    code: `console.log("Hello, world !");`,
  },
];

export const codeUpdater = createSlice({
  name: "code-updater",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      //A chaque fois que l'on change le code, on update le state
      state.find((obj) => obj.id === action.payload.id).code =
        action.payload.value; //grace a redux toolkit, on peut directement changer le state (grace a la librairy proxy js)
    },
  },
});

export const { updateCode } = codeUpdater.actions; //les actions permettent d'envoyer certaine action a notre store pour nous permete de modifier le state
export default codeUpdater.reducer; // creéé un reducer, prend l'action et modifie le state
