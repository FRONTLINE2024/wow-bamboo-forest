import { Component } from "../../base";
import { fonts } from "../../styles";

import styles from "./modal.module.scss";

/**
 * @description 모달 컴포넌트
 */
export class Modal extends Component {
  /**
   *
   * @param {object} props - 모달 컴포넌트 props
   * @param {boolean} props.isOpen - 모달 오픈 여부
   * @param {string|HTMLImageElement} props.title - 모달 제목
   * @param {string} props.content - 모달 내용
   * @param {Function} props.onClose - 모달 닫기 함수
   */
  constructor({
    onClose, isOpen = false, title = "", content = "",
  }) {
    super({
      isOpen, title, content, onClose,
    }, "div");
  }

  /**
   *
   */
  setup() {
    const { isOpen } = this.props;
    this.element.className = styles.backdrop;
    this.element.style.display = isOpen ? "flex" : "none";
  }

  /**
   * @returns {string} - 모달 컴포넌트의 HTML 문자열을 반환합니다.
   */
  template() {
    const { title, content } = this.props;

    return /* html */ `
      <dialog class=${styles.modal}>
        <h2 class=${fonts.h2}>${title}</h2>
        <div class=${styles.content}>
          ${content}
        </div>
      </dialog>
      `;
  }

  /**
   *
   */
  mounted() {
    const { onClose } = this.props;
    const dialog = this.element.querySelector("dialog");

    dialog.addEventListener("close", onClose);
  }
}
