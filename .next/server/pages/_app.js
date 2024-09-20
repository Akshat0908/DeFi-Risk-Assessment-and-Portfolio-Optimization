"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/providers */ \"@ethersproject/providers\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst DynamicCustomCursor = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/react-icons\"), __webpack_require__.e(\"components_CustomCursor_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomCursor */ \"./components/CustomCursor.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.tsx -> \" + \"../components/CustomCursor\"\n        ]\n    },\n    ssr: false\n});\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    styles: {\n        global: {\n            body: {\n                bg: \"#1a1f3c\",\n                color: \"#FFFFFF\"\n            }\n        }\n    },\n    fonts: {\n        heading: \"system-ui, sans-serif\",\n        body: \"system-ui, sans-serif\"\n    },\n    colors: {\n        brand: {\n            primary: \"#3498db\",\n            secondary: \"#1a1f3c\",\n            accent: \"#3498db\",\n            background: \"#1a1f3c\",\n            card: \"rgba(255, 255, 255, 0.1)\",\n            text: {\n                primary: \"#FFFFFF\",\n                secondary: \"#B6B6B6\"\n            }\n        },\n        green: {\n            400: \"#2ecc71\"\n        },\n        yellow: {\n            400: \"#f1c40f\"\n        },\n        red: {\n            400: \"#e74c3c\"\n        }\n    },\n    components: {\n        Button: {\n            baseStyle: {\n                fontWeight: \"bold\",\n                borderRadius: \"full\",\n                transition: \"all 0.3s ease\"\n            },\n            variants: {\n                solid: {\n                    bg: \"brand.primary\",\n                    color: \"white\",\n                    _hover: {\n                        bg: \"brand.accent\",\n                        transform: \"translateY(-2px)\",\n                        boxShadow: \"0 4px 12px rgba(52, 152, 219, 0.3)\"\n                    }\n                }\n            }\n        },\n        Heading: {\n            baseStyle: {\n                color: \"brand.text.primary\",\n                letterSpacing: \"-0.02em\"\n            }\n        },\n        Text: {\n            baseStyle: {\n                color: \"brand.text.secondary\"\n            }\n        },\n        Card: {\n            baseStyle: {\n                bg: \"brand.card\",\n                borderRadius: \"12px\",\n                boxShadow: \"0 4px 12px rgba(0, 0, 0, 0.1)\",\n                transition: \"all 0.3s ease\",\n                _hover: {\n                    transform: \"translateY(-4px)\",\n                    boxShadow: \"0 8px 24px rgba(0, 0, 0, 0.15)\"\n                }\n            }\n        },\n        Progress: {\n            baseStyle: {\n                track: {\n                    bg: \"rgba(255, 255, 255, 0.1)\"\n                }\n            }\n        }\n    }\n});\nfunction getLibrary(provider) {\n    const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__.Web3Provider(provider);\n    library.pollingInterval = 12000;\n    return library;\n}\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.Web3ReactProvider, {\n        getLibrary: getLibrary,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicCustomCursor, {}, void 0, false, {\n                        fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/_app.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/_app.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/_app.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/_app.tsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/_app.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFFVjtBQUNHO0FBQ3JCO0FBQ2E7QUFFL0MsTUFBTU0sc0JBQXNCRixtREFBT0EsQ0FBQyxJQUFNLDZQQUFPOzs7Ozs7SUFDL0NHLEtBQUs7O0FBR1AsTUFBTUMsUUFBUVAsNkRBQVdBLENBQUM7SUFDeEJRLFFBQVE7UUFDTkMsUUFBUTtZQUNOQyxNQUFNO2dCQUNKQyxJQUFJO2dCQUNKQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBQ0FDLE9BQU87UUFDTEMsU0FBUztRQUNUSixNQUFNO0lBQ1I7SUFDQUssUUFBUTtRQUNOQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsTUFBTTtZQUNOQyxNQUFNO2dCQUNKTCxTQUFTO2dCQUNUQyxXQUFXO1lBQ2I7UUFDRjtRQUNBSyxPQUFPO1lBQ0wsS0FBSztRQUNQO1FBQ0FDLFFBQVE7WUFDTixLQUFLO1FBQ1A7UUFDQUMsS0FBSztZQUNILEtBQUs7UUFDUDtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsUUFBUTtZQUNOQyxXQUFXO2dCQUNUQyxZQUFZO2dCQUNaQyxjQUFjO2dCQUNkQyxZQUFZO1lBQ2Q7WUFDQUMsVUFBVTtnQkFDUkMsT0FBTztvQkFDTHRCLElBQUk7b0JBQ0pDLE9BQU87b0JBQ1BzQixRQUFRO3dCQUNOdkIsSUFBSTt3QkFDSndCLFdBQVc7d0JBQ1hDLFdBQVc7b0JBQ2I7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FDLFNBQVM7WUFDUFQsV0FBVztnQkFDVGhCLE9BQU87Z0JBQ1AwQixlQUFlO1lBQ2pCO1FBQ0Y7UUFDQUMsTUFBTTtZQUNKWCxXQUFXO2dCQUNUaEIsT0FBTztZQUNUO1FBQ0Y7UUFDQTRCLE1BQU07WUFDSlosV0FBVztnQkFDVGpCLElBQUk7Z0JBQ0ptQixjQUFjO2dCQUNkTSxXQUFXO2dCQUNYTCxZQUFZO2dCQUNaRyxRQUFRO29CQUNOQyxXQUFXO29CQUNYQyxXQUFXO2dCQUNiO1lBQ0Y7UUFDRjtRQUNBSyxVQUFVO1lBQ1JiLFdBQVc7Z0JBQ1RjLE9BQU87b0JBQ0wvQixJQUFJO2dCQUNOO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxTQUFTZ0MsV0FBV0MsUUFBYTtJQUMvQixNQUFNQyxVQUFVLElBQUkzQyxrRUFBWUEsQ0FBQzBDO0lBQ2pDQyxRQUFRQyxlQUFlLEdBQUc7SUFDMUIsT0FBT0Q7QUFDVDtBQUVBLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNoRCwrREFBaUJBO1FBQUMwQyxZQUFZQTtrQkFDN0IsNEVBQUM1Qyw0REFBY0E7WUFBQ1EsT0FBT0E7c0JBQ3JCLDRFQUFDSCwwREFBZUE7O2tDQUNkLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUMyQzt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWZpLXJpc2stcGxhdGZvcm0vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBEeW5hbWljQ3VzdG9tQ3Vyc29yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6ICcjMWExZjNjJyxcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICBib2R5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgYnJhbmQ6IHtcbiAgICAgIHByaW1hcnk6ICcjMzQ5OGRiJyxcbiAgICAgIHNlY29uZGFyeTogJyMxYTFmM2MnLFxuICAgICAgYWNjZW50OiAnIzM0OThkYicsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzFhMWYzYycsXG4gICAgICBjYXJkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJyxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgcHJpbWFyeTogJyNGRkZGRkYnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjQjZCNkI2JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyZWVuOiB7XG4gICAgICA0MDA6ICcjMmVjYzcxJyxcbiAgICB9LFxuICAgIHllbGxvdzoge1xuICAgICAgNDAwOiAnI2YxYzQwZicsXG4gICAgfSxcbiAgICByZWQ6IHtcbiAgICAgIDQwMDogJyNlNzRjM2MnLFxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEJ1dHRvbjoge1xuICAgICAgYmFzZVN0eWxlOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnZnVsbCcsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcbiAgICAgIH0sXG4gICAgICB2YXJpYW50czoge1xuICAgICAgICBzb2xpZDoge1xuICAgICAgICAgIGJnOiAnYnJhbmQucHJpbWFyeScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgX2hvdmVyOiB7XG4gICAgICAgICAgICBiZzogJ2JyYW5kLmFjY2VudCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0ycHgpJyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgNHB4IDEycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyknLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBIZWFkaW5nOiB7XG4gICAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgY29sb3I6ICdicmFuZC50ZXh0LnByaW1hcnknLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgVGV4dDoge1xuICAgICAgYmFzZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnYnJhbmQudGV4dC5zZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIENhcmQ6IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICBiZzogJ2JyYW5kLmNhcmQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXG4gICAgICAgIF9ob3Zlcjoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTRweCknLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgUHJvZ3Jlc3M6IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICB0cmFjazoge1xuICAgICAgICAgIGJnOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxuICByZXR1cm4gbGlicmFyeVxufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPER5bmFtaWNDdXN0b21DdXJzb3IgLz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiZXh0ZW5kVGhlbWUiLCJXZWIzUmVhY3RQcm92aWRlciIsIldlYjNQcm92aWRlciIsImR5bmFtaWMiLCJBbmltYXRlUHJlc2VuY2UiLCJEeW5hbWljQ3VzdG9tQ3Vyc29yIiwic3NyIiwidGhlbWUiLCJzdHlsZXMiLCJnbG9iYWwiLCJib2R5IiwiYmciLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImJyYW5kIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImFjY2VudCIsImJhY2tncm91bmQiLCJjYXJkIiwidGV4dCIsImdyZWVuIiwieWVsbG93IiwicmVkIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwidmFyaWFudHMiLCJzb2xpZCIsIl9ob3ZlciIsInRyYW5zZm9ybSIsImJveFNoYWRvdyIsIkhlYWRpbmciLCJsZXR0ZXJTcGFjaW5nIiwiVGV4dCIsIkNhcmQiLCJQcm9ncmVzcyIsInRyYWNrIiwiZ2V0TGlicmFyeSIsInByb3ZpZGVyIiwibGlicmFyeSIsInBvbGxpbmdJbnRlcnZhbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();