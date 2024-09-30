/**
 *
 * @param {object} params - Home에 전달할 데이터
 * @param {object} params.searchParams - 쿼리파라미터 객체
 */
export const Home = ({ searchParams }) => {
  document.getElementById("#app").innerHTML = `
  <nav>
    <div>Home ${searchParams.test || ""}</div>
    <ul>
      <li><button class="home">Home</button></li>
      <li><button class="mypage">Mypage</button></li>
      <a href="/mypage">링크</a>
    </ul>
  </nav>
`;

  document.querySelector(".home").addEventListener("click", () => {
    navigation.navigate("/");
  });

  document.querySelector(".mypage").addEventListener("click", () => {
    navigation.navigate("/mypage?test=123");
  });
};
