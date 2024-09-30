import { useRouter } from "../../shared";

/**
 *
 * @param {object} params - Home에 전달할 데이터
 * @param {object} params.searchParams - 쿼리파라미터 객체
 */
export const Home = ({ searchParams }) => {
  const router = useRouter();

  document.getElementById("#app").innerHTML = `
  <nav>
    <div>Home ${searchParams?.test || ""}</div>
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
    router.push("/mypage?test=123");
  });
};
