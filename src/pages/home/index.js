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
    const card = new Card(this.element, {
      num: this.element.children.length + 1,
    });

    card.element.addEventListener("click", () => {
      createPost();
      card.setState({
        number: card.state.number + 1,
        content: `${card.state.number} 번째 클릭`,
      });
    });
  }
}
