import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preview: true,
};

export const preview = createSlice({
  name: "preview",
  initialState,
  reducers: {
    togglePreview: (state) => { //sert a toggle le bouton (on/off) qui sert a preview notre code dans ide
      state.preview = !state.preview;
    },
    hidePreview: (state) => {//sert a cacher la preview quand on click sur un onglet (html, css, ou js)
      state.preview = false;
    },
  },
});

export const {togglePreview, hidePreview} = preview.actions
export default preview.reducer