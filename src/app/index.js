import { useRouter, Link } from "../shared";

import { routes } from "./routes";
import "./reset.scss";

const router = useRouter();
router.init({ routes });
customElements.define("my-link", Link, { extends: "a" });
