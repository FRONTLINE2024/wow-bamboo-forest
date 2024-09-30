import { routes } from "./routes";
import "./reset.scss";

navigation.addEventListener("navigate", (event) => {
  const pathname = event.destination.url.split(location.origin)[1];
  if (routes[pathname]) {
    const routeHandler = routes[pathname]();
    event.intercept({ handler: routeHandler });
  }
});

routes[location.pathname + location.search]();
