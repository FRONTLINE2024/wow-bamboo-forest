import { useRouter, Link } from "../shared";
import { Layout } from "../widgets";

import { routes } from "./routes";
import "./reset.scss";

const layout = new Layout({});
document.getElementById("#app").appendChild(layout.element);

const router = useRouter();
router.init({ routes });
customElements.define("my-link", Link, { extends: "a" });
