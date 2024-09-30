/**
 *
 * @param {object} params - Mypage에 전달할 데이터
 * @param {object} params.searchParams - 쿼리파라미터 객체
 */
export const Mypage = ({ searchParams }) => {
  document.getElementById("#app").innerHTML = `
  <nav>
    <div>Mypage ${searchParams?.test || ""}</div>
    <ul>
      <li><button class="home">Home</button></li>
      <li><button class="mypage">Mypage</button></li>
    </ul>
  </nav>
`;

  document.querySelector(".home").addEventListener("click", () => {
    navigation.navigate("/?test=hi");
  });

  document.querySelector(".mypage").addEventListener("click", () => {
    navigation.navigate("/mypage");
  });
};
