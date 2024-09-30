/**
 *
 */
export const Home = () => {
  document.getElementById("#app").innerHTML = `
  <nav>
    <div>Home</div>
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
    navigation.navigate("/mypage");
  });
};
