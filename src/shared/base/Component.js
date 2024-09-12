export class Component {
  #target; // 컴포넌트를 넣을 부모

  #props;

  constructor(target, props) {
    this.#target = target;
    this.#props = props;
  }

  static template() {
    // UI 구성
    return "";
  }

  render() {
    this.#target.innerHTML = this.template(); // UI 렌더링
  }
}
