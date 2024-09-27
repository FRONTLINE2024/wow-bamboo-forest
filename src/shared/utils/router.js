let routes = {};

/**
 *
 * @param {string} url - 이동할 URL
 * @returns {object} - pathname, params
 */
export const usePathName = (url) => {
  const pathname = url.split("?")[0];
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));

  return { pathname, params };
};

/**
 * @returns {object} - init, push 함수
 */
export const useRouter = () => {
  window.addEventListener("popstate", () => {
    if (routes[location.pathname]) {
      routes[location.pathname]();
    }
  });

  /**
   *
   * @param {string} url - 이동할 URL
   * @param {boolean} isInit - 초기화 여부
   */
  const move = (url, isInit = false) => {
    const { pathname, params } = usePathName(url);

    if (routes[pathname]) {
      if (!isInit) history.pushState({}, "", url);

      routes[pathname]({
        searchParams: params,
      });
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

  return {
    init,
    push,
  };
};
