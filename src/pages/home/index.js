import { Component, Card } from "../../shared";
export class Home extends Component {
  setup() {
    this.element.id = "home";
    this.state = { text: "홈페이지" };
  }

  template() {
    const { text } = this.state;
    return /* html */ `
      <div>${text}를 써봅니다</div>
      <ul></ul>
    `;
  }

  mounted() {
    const cardListElement = this.element.querySelector("ul");
    const card = new Card({
      num: cardListElement.children.length + 1,
    }, "li");
    cardListElement.appendChild(card.element);

    card.element.addEventListener("click", () => {
      card.setState({
        number: card.state.number + 1,
        content: `${card.state.number} 번째 클릭`,
      });
    });
  }
}
