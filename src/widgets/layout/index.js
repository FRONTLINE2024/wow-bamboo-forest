import { Component } from "../../shared";
import { Navigation } from "../navigation";

import styles from "./layout.module.scss";

/**
 * @description 레이아웃 컴포넌트
 */
export class Layout extends Component {
  /**
   *
   */
  setup() {
    this.element.id = "layout";
    this.element.className = styles.container;
  }

  template() {
    const { children } = this.props;
    if (!children) return "";

    return /* html */ `
      ${children}
    `;
  }

  /**
   *
   */
  mounted() {
    // eslint-disable-next-line no-new
    new Navigation(this.element, {}, "nav");
  }
}
