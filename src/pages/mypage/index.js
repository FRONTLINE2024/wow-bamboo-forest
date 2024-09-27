import { useRouter } from "../../shared";

/**
 *
 */
export const Mypage = () => {
  const router = useRouter();
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
    router.push("/");
  });

  document.querySelector(".mypage").addEventListener("click", () => {
    router.push("/mypage");
  });
};
