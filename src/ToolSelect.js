import generateEle from "./GenerateElement.js";

export default class ToolSelect {
  constructor(state, { tools, dispatch }) {
    this.select = generateEle(
      "select",
      {
        onchange: () => dispatch({ tool: this.select.value }),
      },
      ...Object.keys(tools).map((name) =>
        generateEle(
          "option",
          {
            selected: name == state.tool,
          },
          name
        )
      )
    );
    this.dom = generateEle("label", null, "Tool: ", this.select);
  }

  syncState(state) {
    this.select.value = state.tool;
  }
}
