import { routes } from "./routes";
import "./reset.scss";

navigation.addEventListener("navigate", (event) => {
  const url = event.destination.url.split(location.origin)[1];
  const pathname = url.split("?")[0];
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));

  if (routes[pathname]) {
    const routeHandler = routes[pathname]({
      searchParams: params,
    });
    event.intercept({ handler: routeHandler });
  }
});

routes[location.pathname]({
  searchParams: Object.fromEntries(new URLSearchParams(location.search)),
});
