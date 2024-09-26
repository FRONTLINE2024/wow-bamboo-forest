import { createPost } from "../../features";
import { Component, Card } from "../../shared";
export class Home extends Component {
  setup() {
    this.element.id = "my-app";
    this.state = { text: "Hello, World!" };
  }

  template() {
    const { text } = this.state;
    return `${text} 를 써봅니다`;
  }

  render() {
    super.render();

    const card = new Card(this.element);
    card.element.addEventListener("click", () => {
      createPost();
    });
    card.render();
  }
}
