let routes = {};

const formatStringToParams = (searchParams) => Object.fromEntries(new URLSearchParams(searchParams))

window.addEventListener("popstate", () => {
  if (routes[location.pathname]) {
    const Page = routes[location.pathname];
    const page = new Page({
      searchParams: formatStringToParams(location.search),
    });

    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(page.element);
  }
});

/**
 *
 * @param {string} url - 이동할 URL
 * @returns {object} - pathname, params
 */
export const usePathName = (url) => {
  const [pathname, stringParams] = url.split("?");
  const params = formatStringToParams(stringParams);

  return { pathname, params };
};

/**
 * @returns {object} - init, push 함수
 */
export const useRouter = () => {
  /**
   *
   * @param {string} url - 이동할 URL
   * @param {boolean} isInit - 초기화 여부
   */
  const move = (url, isInit = false) => {
    const { pathname, params } = usePathName(url);

    if (routes[pathname]) {
      if (!isInit) history.pushState({}, "", url);

      const Page = routes[pathname];
      const page = new Page({ searchParams: params });
      const content = document.getElementById("content");

      content.innerHTML = "";
      content.appendChild(page.element);

      return;
    }

    location.href = url;
  };

  /**
   * @param {string} url - 이동할 URL
   */
  const push = (url) => {
    move(url);
  };

  /**
   *
   * @param {object} param - 초기화할 라우터 정보
   */
  const init = (param) => {
    routes = param.routes;
    move(location.pathname + location.search, true);
  };

  const back = () => {
    history.back();
  };

  return {
    init,
    push,
    back,
  };
};
