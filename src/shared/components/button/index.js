import { Component } from "../../base";

import styles from "./button.module.scss";

/**
 * @description 버튼 컴포넌트
 */
export class Button extends Component {
  /**
   *
   * @param {object} props - 버튼 컴포넌트 props
   * @param {string} props.content - 버튼에 들어갈 텍스트
   * @param {"default"|"enable"} [props.type] - 버튼 타입
   */
  constructor({ content, type = "default" }) {
    super({ content, type }, "button");
  }

  /**
   * @description 버튼 컴포넌트의 스타일을 설정합니다.
   */
  setup() {
    const { type } = this.props;
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
