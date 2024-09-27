import { useRouter } from "../../shared";

/**
 *
 */
export const Home = () => {
  const router = useRouter();

  document.getElementById("#app").innerHTML = `
  <nav>
    <div>Home</div>
    <ul>
      <li><button class="home">Home</button></li>
      <li><button class="mypage">Mypage</button></li>
      <li><a is="my-link" href="/mypage">커스텀 링크</a></li>
    </ul>
  </nav>
`;

  document.querySelector(".home").addEventListener("click", () => {
    router.push("/");
  });

  document.querySelector(".mypage").addEventListener("click", () => {
    router.push("/mypage");
  });
};
