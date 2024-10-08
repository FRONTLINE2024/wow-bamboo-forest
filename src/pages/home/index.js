import { createPost } from "../../features";
import { Component, Card } from "../../shared";
export class Home extends Component {
  setup() {
    this.element.id = "my-app";
    this.state = { text: "Hello, World!" };
    this.props.card = new Card({
      num: this.element.children.length + 1,
    });
  }

  template() {
    const { text } = this.state;
    return `${text} 를 써봅니다`;
  }

  mounted() {
    const { card } = this.props;
    this.element.appendChild(card.element);
    card.element.addEventListener("click", (event) => {
      event.stopPropagation();

      createPost();
      card.setState({
        number: card.state.number + 1,
        content: `${card.state.number} 번째 클릭`,
      });
    });
  }
}
