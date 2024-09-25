/**
 * @description 공용 컴포넌트 클래스
 */
export class Component {
  #target;

  #props;

  /**
   *
   * @param {HTMLElement} target - 컴포넌트를 렌더링할 부모 요소
   * @param {any} props - 컴포넌트에 전달할 데이터
   */
  constructor(target, props) {
    this.#target = target;
    this.#props = props;
  }

  /**
   *
   * @param {string} htmlString - HTML 문자열 리터럴
   * @returns {string} HTML 문자열을 반환합니다.
   */
  static html(htmlString) {
    return String.raw(htmlString);
  }

  /**
   * @returns {string} UI 템플릿을 반환합니다.
   */
  static template() {
    // UI 구성
    return "";
  }

  /**
   *  @description 컴포넌트를 `target`의 자식으로 렌더링합니다.
   */
  render() {
    this.#target.innerHTML = this.constructor.template();
  }
}
