import { Component } from "../shared";

export default class App extends Component {
  static template() {
    return this.html`<main data-component="my-app">글씨를 써봅니다</main>`;
  }
}
