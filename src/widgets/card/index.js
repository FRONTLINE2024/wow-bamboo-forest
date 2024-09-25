import { Component, fonts } from "../../shared";

import styles from "./card.module.scss";

export class Card extends Component {
  setup() {
    this.element = document.createElement("div");
    this.element.className = styles.card;
    this.state = { content: "Hello, World!" };
  }

  template() {
    const num = this.target.children.length + 1;
    const { content } = this.state;

    this.element.innerHTML = /* html */ `
        <p class="${fonts.body2}">#${num}번째 음메</p>
        <h3 class="${fonts.title}">${content}</h3>
      `;
    return this.element;
  }
}
