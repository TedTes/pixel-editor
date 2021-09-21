import generateEle from "./GenerateElement.js";

export default class ColorPicker {
  constructor(state, { dispatch }) {
    this.input = generateEle("input", {
      type: "color",
      value: state.color,
      onchange: () => dispatch({ color: this.input.value }),
    });
    this.dom = generateEle("label", null, "Color: ", this.input);
  }

  syncState(state) {
    this.input.value = state.color;
  }
}
