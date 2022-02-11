// CSS
import "./css/index.css";

// JS
import { AddRelToExtLinks } from "./js/components/links";
import { HandleSSImg } from "./js/components/ssImages";
import { PolyfillNodeListForEach } from "./js/utils/polyfills";
import { ResponsiveEmbeds } from "./js/components/embeds";
import { WrapFields } from "./js/components/forms";

// Polyfills
PolyfillNodeListForEach();

// Components and the like
WrapFields();
// ^ Needs to be first in this list
AddRelToExtLinks();
HandleSSImg();
ResponsiveEmbeds();
