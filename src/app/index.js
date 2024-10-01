import { Home } from "../pages";
import "./reset.scss";

const home = new Home({}, "main");
document.getElementById("#app").appendChild(home.element);
