// CSS
import "./css/app.css";

// JS
import { PolyfillNodeListForEach } from "./js/utils/polyfills";
import { ResponsiveEmbeds } from "./js/components/embeds";
import { WrapFields } from "./js/components/forms";

// Polyfills
PolyfillNodeListForEach();

// Components and the like
WrapFields();
// ^ Needs to be first in this list
ResponsiveEmbeds();
