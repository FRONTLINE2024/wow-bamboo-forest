import { Component } from "../../base";

import styles from "./textfield.module.scss";

/**
 * @description 텍스트필드 컴포넌트
 */
export class Textfield extends Component {
  /**
   *
   * @param {object} props - 텍스트필드 컴포넌트 props
   * @param {"lg"|"sm"} [props.size] - 텍스트필드 크기
   * @param {string} [props.type] - 텍스트필드 타입
   * @param {string} props.placeholder - 텍스트필드 플레이스홀더
   */
  constructor({ placeholder = "", size = "sm", type = "text" }) {
    const tag = size === "sm" ? "input" : "textarea";
    super({ placeholder, size, type }, tag);
  }

  /**
   * @description 텍스트필드 컴포넌트의 속성을 설정합니다.
   */
  setup() {
    const { placeholder, size, type } = this.props;

    this.element.className = styles[`input-${size}`];
    this.element.placeholder = placeholder;
    if (size === "sm") this.element.type = type;
  }
}
