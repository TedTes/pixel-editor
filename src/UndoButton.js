import generateEle from "./GenerateElement.js";
export default class UndoButton {
  constructor(state, { dispatch }) {
    this.dom = generateEle(
      "button",
      {
        onclick: () => dispatch({ undo: true }),
        disabled: state.done.length == 0,
      },
      "⮪ Undo"
    );
  }
  syncState(state) {
    this.dom.disabled = state.done.length == 0;
  }
}
