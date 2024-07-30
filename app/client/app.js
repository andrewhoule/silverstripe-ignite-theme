// CSS
import "./css/app.css";

// JS
import { HandleSSImg } from "./js/components/ssImages";
import { ResponsiveEmbeds } from "./js/components/embeds";
import { WrapFields } from "./js/components/forms";

// Components and the like
WrapFields();
// ^ Needs to be first in this list
HandleSSImg();
ResponsiveEmbeds();
