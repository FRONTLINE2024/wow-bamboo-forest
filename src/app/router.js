/* eslint-disable import/no-cycle */
import { Home, Mypage } from "../pages";

const routes = {
  "/": Home,
  "/mypage": Mypage,
};

window.addEventListener("popstate", () => {
  if (routes[location.pathname]) {
    routes[location.pathname]();
  }
});

/**
 *
 * @param {string} url - 이동할 URL
 * @param {object} options - 옵션
 * @param {boolean} options.push - pushState 여부
 */
export const goto = (url, { push } = {}) => {
  const pathname = url.split("?")[0];
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));
  if (routes[pathname]) {
    if (push) history.pushState({}, "", url);
    routes[pathname]({
      searchParams: params,
    });
    return;
  }
  location.href = url;
};
