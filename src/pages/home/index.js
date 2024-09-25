import { Component, Card } from "../../shared";
export class Home extends Component {
  setup() {
    this.element = document.createElement("main");
    this.element.id = "my-app";
    this.state = { text: "Hello, World!" };
  }

  template() {
    const { text } = this.state;
    this.element.innerHTML = `${text} 를 써봅니다`;

    return this.element;
  }

  setTemplate() {
    const card = new Card(this.element);
    card.render();
  }
}
