import { createPost } from "../../features";
import { Component, Card } from "../../shared";
export class Home extends Component {
  setup() {
    this.element.id = "home";
    this.state = { text: "홈페이지" };
    this.props.card = new Card({
      num: this.element.children.length + 1,
    }, "li");
  }

  template() {
    const { text } = this.state;
    return /* html */ `
      <div>${text}를 써봅니다</div>
      <ul></ul>
    `;
  }

  mounted() {
    const { card } = this.props;
    this.element.querySelector("ul").appendChild(card.element);

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
