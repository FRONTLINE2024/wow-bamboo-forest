// eslint-disable-next-line
import { goto } from "../../app/router";

/**
 *
 */
export const Mypage = () => {
  document.getElementById("#app").innerHTML = `
  <nav>
    <div>Mypage</div>
    <ul>
      <li><button class="home">Home</button></li>
      <li><button class="mypage">Mypage</button></li>
    </ul>
  </nav>
`;

  document.querySelector(".home").addEventListener("click", () => {
    goto("/", { push: true });
  });

  document.querySelector(".mypage").addEventListener("click", () => {
    goto("/mypage", { push: true });
  });
};
