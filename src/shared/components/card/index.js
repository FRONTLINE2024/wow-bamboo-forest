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
    this.element.className = styles.card;
    this.state = { content: "Hello, World!" };
  }

  /**
   * @returns {string} - 카드 컴포넌트의 HTML 문자열을 반환합니다.
   */
  template() {
    const num = this.target.children.length + 1;
    const { content } = this.state;

    return /* html */ `
        <p class="${fonts.body2}">#${num}번째 음메</p>
        <h3 class="${fonts.title}">${content}</h3>
      `;
  }
}
