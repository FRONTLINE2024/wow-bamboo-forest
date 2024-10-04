import { createPost } from "../../features";
import {
  Component, Button, logoUrl, useRouter,
} from "../../shared";

import styles from "./navigation.module.scss";

/**
 * @description 네비게이션 컴포넌트
 */
export class Navigation extends Component {
  /**
   *
   */
  setup() {
    this.element.className = styles.container;
    this.props.writeButton = new Button(
      { type: "enable", content: "글쓰기" },
      "button",
    );
    this.props.mypageButton = new Button({ content: "마이" }, "button");
  }

  /**
   * @returns {string} - 네비게이션 컴포넌트의 HTML 문자열을 반환합니다.
   */
  // eslint-disable-next-line class-methods-use-this
  template() {
    return /* html */ `
      <div class=${styles.content}>
        <h1>
          <a is="my-link" href="/">
            <img src=${logoUrl} alt="Wow Bamboo Forest" />
          </a>
        </h1>
        <div class=${styles.right}></div>
      </div>
      `;
  }

  /**
   *
   */
  mounted() {
    const rightChild = this.element.querySelector(`.${styles.right}`);

    const { writeButton, mypageButton } = this.props;
    rightChild.appendChild(writeButton.element);
    rightChild.appendChild(mypageButton.element);

    writeButton.element.addEventListener("click", () => {
      createPost();
    });

    mypageButton.element.addEventListener("click", () => {
      const router = useRouter();
      router.push("/mypage");
    });
  }
}
