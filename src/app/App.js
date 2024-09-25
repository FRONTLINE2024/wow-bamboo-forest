import { Component } from "../shared";

export default class App extends Component {
  setup() {
    this.state = { text: "Hello, World!" };
  }

  template() {
    const { text } = this.state;
    return /* html */ `<main data-component="my-app">${text} 를 써봅니다</main>`;
  }
}
