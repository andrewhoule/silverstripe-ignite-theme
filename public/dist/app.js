/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/client/js/components/embeds.js"
/*!********************************************!*\
  !*** ./app/client/js/components/embeds.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveEmbeds: () => (/* binding */ ResponsiveEmbeds)
/* harmony export */ });
var ResponsiveEmbeds = function ResponsiveEmbeds() {
  var embeds = document.querySelectorAll('.embed');
  function makeResponsive(embed) {
    var iframe = embed.querySelector('iframe');
    if (!iframe) return;
    var height = iframe.getAttribute('height');
    var width = iframe.getAttribute('width');
    height || width ? embed.style.aspectRatio = "".concat(width, "/").concat(height) : embed.style.aspectRatio = '16/9';
  }
  if (embeds) {
    embeds.forEach(function (embed) {
      makeResponsive(embed);
    });
  }
};


/***/ },

/***/ "./app/client/js/components/forms.js"
/*!*******************************************!*\
  !*** ./app/client/js/components/forms.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WrapFields: () => (/* binding */ WrapFields)
/* harmony export */ });
var WrapFields = function WrapFields() {
  // Get the elements
  var forms = document.querySelectorAll("form");

  // Add the inner wrap to fieldsets
  if (forms) {
    forms.forEach(function (form) {
      var fieldset = form.querySelector("fieldset");
      if (fieldset) {
        fieldset.innerHTML = "<div class=\"fields\">".concat(fieldset.innerHTML, "</div>");
      }
    });
  }
};


/***/ },

/***/ "./app/client/js/components/ssImages.js"
/*!**********************************************!*\
  !*** ./app/client/js/components/ssImages.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandleSSImg: () => (/* binding */ HandleSSImg)
/* harmony export */ });
var HandleSSImg = function HandleSSImg() {
  var captionClass = "captionImage";
  var colClass = "rich-text";
  var centerClass = "centered";
  var imgBuffer = 250;
  var col = document.querySelector(".".concat(colClass));
  function styleImg(el) {
    if (el) {
      var elWidth = el.offsetWidth;
      var imgs = col.querySelectorAll("img");
      if (imgs) {
        imgs.forEach(function (img) {
          if (img.offsetWidth + imgBuffer >= elWidth) {
            img.classList.add("".concat(centerClass));
            if (img.parentNode.classList.contains("".concat(captionClass))) {
              img.parentNode.classList.add("".concat(centerClass));
            }
          } else {
            img.classList.remove("".concat(centerClass));
            if (img.parentNode.classList.contains("".concat(captionClass))) {
              img.parentNode.classList.remove("".concat(centerClass));
            }
          }
        });
      }
    }
  }
  styleImg(col);
  window.onresize = function () {
    styleImg(col);
  };
};


/***/ },

/***/ "./app/client/css/app.css"
/*!********************************!*\
  !*** ./app/client/css/app.css ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./app/client/app.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.css */ "./app/client/css/app.css");
/* harmony import */ var _js_components_ssImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/ssImages */ "./app/client/js/components/ssImages.js");
/* harmony import */ var _js_components_embeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/embeds */ "./app/client/js/components/embeds.js");
/* harmony import */ var _js_components_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/forms */ "./app/client/js/components/forms.js");
// CSS


// JS




// Components and the like
(0,_js_components_forms__WEBPACK_IMPORTED_MODULE_3__.WrapFields)();
// ^ Needs to be first in this list
(0,_js_components_ssImages__WEBPACK_IMPORTED_MODULE_1__.HandleSSImg)();
(0,_js_components_embeds__WEBPACK_IMPORTED_MODULE_2__.ResponsiveEmbeds)();
})();

/******/ })()
;
//# sourceMappingURL=app.js.map