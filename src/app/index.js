import { useRouter } from "../shared";

import { routes } from "./routes";
import "./reset.scss";

const router = useRouter();
router.init({ routes });
