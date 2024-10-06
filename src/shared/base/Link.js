import { useRouter } from "../utils";
const router = useRouter();

/**
 * @description SPA에서 사용할 Link 컴포넌트
 */
export class Link extends HTMLAnchorElement {
  /**
   *
   */
  constructor() {
    super();
    this.style.color = "pink";
    this.addEventListener("click", (event) => {
      event.preventDefault();
      router.push(this.getAttribute("href"));
    });
  }
}
