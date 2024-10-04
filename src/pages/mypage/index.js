import { Component } from "../../shared";
export class Mypage extends Component {
  setup() {
    this.element.id = "mypage";
    this.state = { text: "마이페이지" };
  }

  template() {
    const { text } = this.state;
    return `${text}를 써봅니다`;
  }
}
