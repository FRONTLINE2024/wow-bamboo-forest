import { Component } from "../../base";

import styles from "./textfield.module.scss";

/**
 * @description 텍스트필드 컴포넌트
 */
export class Textfield extends Component {
  /**
   *
   * @param {object} props - 텍스트필드 컴포넌트 props
   * @param {"lg"|"sm"} [props.type] - 텍스트필드 타입
   * @param {string} props.placeholder - 텍스트필드 플레이스홀더
   */
  constructor({ placeholder = "", type = "sm" }) {
    super({ placeholder, type }, "textarea");
  }

  /**
   *
   */
  setup() {
    const { placeholder, type } = this.props;

    this.element.className = styles[`input-${type}`];
    this.element.placeholder = placeholder;
  }
}
