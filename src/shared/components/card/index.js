import { Component } from "../../base";
import { fonts } from "../../styles";

import styles from "./card.module.scss";

/**
 * @description 카드 컴포넌트
 */
export class Card extends Component {
  /**
   *
   */
  setup() {
    this.element = document.createElement("div");
    this.element.className = styles.card;
    this.state = { content: "Hello, World!" };
  }

  /**
   * @returns {HTMLElement} - 카드 컴포넌트를 반환합니다.
   */
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
