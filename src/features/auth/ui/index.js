import {
  Button, logoUrl, Modal, Textfield,
} from "../../../shared";

import styles from "./auth.module.scss";

export class AuthModal extends Modal {
  constructor({ onClose, isOpen = false }) {
    const content = /* html */ `
      <form class=${styles.form}></form>
    `;
    super({
      isOpen, title: `<img src=${logoUrl}/>`, content, onClose,
    });
  }

  mounted() {
    const nickname = new Textfield({ label: "닉네임", placeholder: "닉네임" });
    const password = new Textfield({ label: "비밀번호", placeholder: "비밀번호", type: "password" });
    const button = new Button({ content: "로그인" });
    const form = this.element.querySelector("form");

    form.appendChild(nickname.element);
    form.appendChild(password.element);
    form.appendChild(button.element);
  }
}
