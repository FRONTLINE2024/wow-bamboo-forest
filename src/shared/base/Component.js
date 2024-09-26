/**
 * @description 공용 컴포넌트 클래스
 */
export class Component {
  target;

  element;

  props;

  state;

  /**
   *
   * @param {HTMLElement} target - 컴포넌트를 렌더링할 부모 요소
   * @param {any} props - 부모에서 컴포넌트에 전달할 데이터
   * @param {HTMLElement} tag - 생성할 HTML 태그 종류
   */
  constructor(target, props, tag = "div") {
    this.target = target;
    this.props = props;

    this.element = document.createElement(tag);
    this.target.appendChild(this.element);

    this.setup();
    this.render();
  }

  /**
   * @description 컴포넌트의 상태를 초기화합니다.
   */
  setup() {
    this.state = {};
  }

  /**
   * @description 템플릿 메서드 (상속받은 클래스가 구현)
   * @returns {string} 컴포넌트의 HTML 문자열을 반환
   */
  // this.state를 사용하여 템플릿을 구성합니다.
  // eslint-disable-next-line class-methods-use-this
  template() {
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
    this.element.innerHTML = this.template();
    this.mounted();
  }

  /**
   * @description 컴포넌트 렌더링 이후 실행할 작업을 정의합니다.
   */
  // 주로 자식 렌더링이 이루어지므로 this가 상속받은 클래스에서 사용됩니다.
  // eslint-disable-next-line class-methods-use-this
  mounted() {}
}
