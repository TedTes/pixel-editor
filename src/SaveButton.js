import generateEle from "./GenerateElement.js";
import drawPicture from "./DrawPicture.js";
export default class SaveButton {
  constructor(state) {
    this.picture = state.picture;
    this.dom = generateEle(
      "button",
      {
        onclick: () => this.save(),
      },
      "💾 Save"
    );
  }
  save() {
    let canvas = generateEle("canvas");
    drawPicture(this.picture, canvas, 1);
    let link = generateEle("a", {
      href: canvas.toDataURL(),
      download: "pixelart.png",
    });
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  syncState(state) {
    this.picture = state.picture;
  }
}
