export class Component {
  #target; // 컴포넌트를 넣을 부모

  #props;

  constructor(target, props) {
    this.#target = target;
    this.#props = props;
  }

  static html(strings, ...values) {
    return String.raw(strings, ...values);
  }

  static template() {
    // UI 구성
    return "";
  }

  render() {
    this.#target.innerHTML = this.constructor.template(); // UI 렌더링
  }
}
