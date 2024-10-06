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

  // eslint-disable-next-line class-methods-use-this
  template() {
    return /* html */ `
      <nav></nav>
      <main id="content"></main>
    `;
  }

  /**
   *
   */
  mounted() {
    const navigation = new Navigation({}, "div");
    this.element.querySelector("nav").appendChild(navigation.element);
  }
}
