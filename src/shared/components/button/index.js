import { Component } from "../../base";

import styles from "./button.module.scss";

/**
 * @description 버튼 컴포넌트
 */
export class Button extends Component {
  /**
   *
   */
  setup() {
    const { type = "default" } = this.props;
    this.element.className = styles[`button-${type}`];
  }

  /**
   * @returns {string} - 버튼 컴포넌트 내부의 컨텐츠를 반환합니다.
   */
  template() {
    const { content } = this.props;
    return content;
  }
}
