/**
 * @description 공용 컴포넌트 클래스
 */
export class Component {
  #target;

  #props;

  state;

  /**
   *
   * @param {HTMLElement} target - 컴포넌트를 렌더링할 부모 요소
   * @param {any} props - 부모에서 컴포넌트에 전달할 데이터
   */
  constructor(target, props) {
    this.#target = target;
    this.#props = props;
    this.setup();
  }

  /**
   *
   */
  // eslint-disable-next-line class-methods-use-this
  setup() {}

  /**
   * @returns {string} UI 템플릿을 반환합니다.
   */
  // eslint-disable-next-line class-methods-use-this
  template() {
    // UI 구성
    return "";
  }

  /**
   * @description 컴포넌트의 상태를 변경하고, 변경된 상태를 반영하여 다시 렌더링합니다.
   * @param {any} newState - 변경된 상태
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  /**
   *  @description 컴포넌트를 `target`의 자식으로 렌더링합니다.
   */
  render() {
    this.#target.innerHTML = this.template();
  }
}
