import { Home } from "../pages";
import "./reset.scss";

const app = new Home(document.getElementById("#app"), {}, "main");
app.render();
