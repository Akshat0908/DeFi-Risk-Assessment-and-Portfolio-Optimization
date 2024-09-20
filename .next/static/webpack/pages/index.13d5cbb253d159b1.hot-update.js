"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DynamicTokenGalaxy = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/*! import() */ \"components_TokenGalaxy_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/TokenGalaxy */ \"./components/TokenGalaxy.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/index.tsx -> \" + \"../components/TokenGalaxy\"\n        ]\n    },\n    ssr: false\n});\n_c = DynamicTokenGalaxy;\n// Sample token data - replace this with real data from your API\nconst sampleTokens = [\n    {\n        name: \"Bitcoin\",\n        marketCap: 1000000000000,\n        riskLevel: 0.2\n    },\n    {\n        name: \"Ethereum\",\n        marketCap: 500000000000,\n        riskLevel: 0.3\n    },\n    {\n        name: \"Aave\",\n        marketCap: 5000000000,\n        riskLevel: 0.5\n    },\n    {\n        name: \"Uniswap\",\n        marketCap: 10000000000,\n        riskLevel: 0.6\n    },\n    {\n        name: \"Compound\",\n        marketCap: 3000000000,\n        riskLevel: 0.4\n    },\n    {\n        name: \"Chainlink\",\n        marketCap: 8000000000,\n        riskLevel: 0.4\n    },\n    {\n        name: \"Polygon\",\n        marketCap: 7000000000,\n        riskLevel: 0.5\n    },\n    {\n        name: \"Solana\",\n        marketCap: 20000000000,\n        riskLevel: 0.6\n    },\n    {\n        name: \"Cardano\",\n        marketCap: 15000000000,\n        riskLevel: 0.5\n    },\n    {\n        name: \"Polkadot\",\n        marketCap: 12000000000,\n        riskLevel: 0.5\n    }\n];\nconst Home = ()=>{\n    _s();\n    const [canRender3D, setCanRender3D] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [density, setDensity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [speed, setSpeed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCanRender3D(true);\n        if (window.innerWidth < 768) {\n            setDensity(0.5);\n            setSpeed(0.5);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            bg: \"brand.background\",\n            minH: \"100vh\",\n            position: \"relative\",\n            overflow: \"hidden\",\n            children: [\n                canRender3D && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    position: \"absolute\",\n                    top: 0,\n                    left: 0,\n                    right: 0,\n                    bottom: 0,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicTokenGalaxy, {\n                        tokens: sampleTokens,\n                        density: density,\n                        speed: speed\n                    }, void 0, false, {\n                        fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                    maxW: \"container.xl\",\n                    position: \"relative\",\n                    zIndex: 1,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        direction: {\n                            base: \"column\",\n                            md: \"row\"\n                        },\n                        align: \"center\",\n                        justify: \"space-between\",\n                        py: 20,\n                        minHeight: \"100vh\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                            align: \"flex-start\",\n                            spacing: 8,\n                            maxW: \"600px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                    as: \"h1\",\n                                    size: \"3xl\",\n                                    color: \"white\",\n                                    children: \"DeFi Risk Assessment and Portfolio Optimization\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    fontSize: \"xl\",\n                                    color: \"gray.200\",\n                                    children: \"Explore the DeFi universe, analyze risks, and optimize your portfolio across multiple protocols and chains with advanced tools.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n                                    href: \"/dashboard\",\n                                    size: \"lg\",\n                                    colorScheme: \"blue\",\n                                    children: \"Get Started\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akshatagrawal/Desktop/defi-risk-platform/pages/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"eFvRpFLbvjXvyMIDio4dcPbQxXQ=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"DynamicTokenGalaxy\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUMzQztBQUNGO0FBQ2I7QUFDTTtBQUVsQyxNQUFNWSxxQkFBcUJELG1EQUFPQSxDQUFDLElBQU0sd0xBQU87Ozs7OztJQUM5Q0UsS0FBSzs7S0FEREQ7QUFJTixnRUFBZ0U7QUFDaEUsTUFBTUUsZUFBZTtJQUNuQjtRQUFFQyxNQUFNO1FBQVdDLFdBQVc7UUFBZUMsV0FBVztJQUFJO0lBQzVEO1FBQUVGLE1BQU07UUFBWUMsV0FBVztRQUFjQyxXQUFXO0lBQUk7SUFDNUQ7UUFBRUYsTUFBTTtRQUFRQyxXQUFXO1FBQVlDLFdBQVc7SUFBSTtJQUN0RDtRQUFFRixNQUFNO1FBQVdDLFdBQVc7UUFBYUMsV0FBVztJQUFJO0lBQzFEO1FBQUVGLE1BQU07UUFBWUMsV0FBVztRQUFZQyxXQUFXO0lBQUk7SUFDMUQ7UUFBRUYsTUFBTTtRQUFhQyxXQUFXO1FBQVlDLFdBQVc7SUFBSTtJQUMzRDtRQUFFRixNQUFNO1FBQVdDLFdBQVc7UUFBWUMsV0FBVztJQUFJO0lBQ3pEO1FBQUVGLE1BQU07UUFBVUMsV0FBVztRQUFhQyxXQUFXO0lBQUk7SUFDekQ7UUFBRUYsTUFBTTtRQUFXQyxXQUFXO1FBQWFDLFdBQVc7SUFBSTtJQUMxRDtRQUFFRixNQUFNO1FBQVlDLFdBQVc7UUFBYUMsV0FBVztJQUFJO0NBRTVEO0FBRUQsTUFBTUMsT0FBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFFbkNDLGdEQUFTQSxDQUFDO1FBQ1JZLGVBQWU7UUFDZixJQUFJSyxPQUFPQyxVQUFVLEdBQUcsS0FBSztZQUMzQkosV0FBVztZQUNYRSxTQUFTO1FBQ1g7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2YsMERBQU1BO2tCQUNMLDRFQUFDVCxpREFBR0E7WUFBQzJCLElBQUc7WUFBbUJDLE1BQUs7WUFBUUMsVUFBUztZQUFXQyxVQUFTOztnQkFDbEVYLDZCQUNDLDhEQUFDbkIsaURBQUdBO29CQUFDNkIsVUFBUztvQkFBV0UsS0FBSztvQkFBR0MsTUFBTTtvQkFBR0MsT0FBTztvQkFBR0MsUUFBUTs4QkFDMUQsNEVBQUN0Qjt3QkFBbUJ1QixRQUFRckI7d0JBQWNPLFNBQVNBO3dCQUFTRSxPQUFPQTs7Ozs7Ozs7Ozs7OEJBR3ZFLDhEQUFDckIsdURBQVNBO29CQUFDa0MsTUFBSztvQkFBZVAsVUFBUztvQkFBV1EsUUFBUTs4QkFDekQsNEVBQUNsQyxrREFBSUE7d0JBQUNtQyxXQUFXOzRCQUFFQyxNQUFNOzRCQUFVQyxJQUFJO3dCQUFNO3dCQUFHQyxPQUFNO3dCQUFTQyxTQUFRO3dCQUFnQkMsSUFBSTt3QkFBSUMsV0FBVTtrQ0FDdkcsNEVBQUN0QyxvREFBTUE7NEJBQUNtQyxPQUFNOzRCQUFhSSxTQUFTOzRCQUFHVCxNQUFLOzs4Q0FDMUMsOERBQUNoQyxxREFBT0E7b0NBQUMwQyxJQUFHO29DQUFLQyxNQUFLO29DQUFNQyxPQUFNOzhDQUFROzs7Ozs7OENBRzFDLDhEQUFDM0Msa0RBQUlBO29DQUFDNEMsVUFBUztvQ0FBS0QsT0FBTTs4Q0FBVzs7Ozs7OzhDQUdyQyw4REFBQy9DLG9EQUFNQTtvQ0FBQzZDLElBQUlwQyxrREFBSUE7b0NBQUV3QyxNQUFLO29DQUFhSCxNQUFLO29DQUFLSSxhQUFZOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTL0U7R0F2Q01qQztNQUFBQTtBQXlDTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ29udGFpbmVyLCBGbGV4LCBIZWFkaW5nLCBUZXh0LCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuY29uc3QgRHluYW1pY1Rva2VuR2FsYXh5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvVG9rZW5HYWxheHknKSwge1xuICBzc3I6IGZhbHNlLFxufSlcblxuLy8gU2FtcGxlIHRva2VuIGRhdGEgLSByZXBsYWNlIHRoaXMgd2l0aCByZWFsIGRhdGEgZnJvbSB5b3VyIEFQSVxuY29uc3Qgc2FtcGxlVG9rZW5zID0gW1xuICB7IG5hbWU6ICdCaXRjb2luJywgbWFya2V0Q2FwOiAxMDAwMDAwMDAwMDAwLCByaXNrTGV2ZWw6IDAuMiB9LFxuICB7IG5hbWU6ICdFdGhlcmV1bScsIG1hcmtldENhcDogNTAwMDAwMDAwMDAwLCByaXNrTGV2ZWw6IDAuMyB9LFxuICB7IG5hbWU6ICdBYXZlJywgbWFya2V0Q2FwOiA1MDAwMDAwMDAwLCByaXNrTGV2ZWw6IDAuNSB9LFxuICB7IG5hbWU6ICdVbmlzd2FwJywgbWFya2V0Q2FwOiAxMDAwMDAwMDAwMCwgcmlza0xldmVsOiAwLjYgfSxcbiAgeyBuYW1lOiAnQ29tcG91bmQnLCBtYXJrZXRDYXA6IDMwMDAwMDAwMDAsIHJpc2tMZXZlbDogMC40IH0sXG4gIHsgbmFtZTogJ0NoYWlubGluaycsIG1hcmtldENhcDogODAwMDAwMDAwMCwgcmlza0xldmVsOiAwLjQgfSxcbiAgeyBuYW1lOiAnUG9seWdvbicsIG1hcmtldENhcDogNzAwMDAwMDAwMCwgcmlza0xldmVsOiAwLjUgfSxcbiAgeyBuYW1lOiAnU29sYW5hJywgbWFya2V0Q2FwOiAyMDAwMDAwMDAwMCwgcmlza0xldmVsOiAwLjYgfSxcbiAgeyBuYW1lOiAnQ2FyZGFubycsIG1hcmtldENhcDogMTUwMDAwMDAwMDAsIHJpc2tMZXZlbDogMC41IH0sXG4gIHsgbmFtZTogJ1BvbGthZG90JywgbWFya2V0Q2FwOiAxMjAwMDAwMDAwMCwgcmlza0xldmVsOiAwLjUgfSxcbiAgLy8gQWRkIG1vcmUgdG9rZW5zIHRvIGluY3JlYXNlIHRoZSBkZW5zaXR5IG9mIHRoZSBnYWxheHlcbl07XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbY2FuUmVuZGVyM0QsIHNldENhblJlbmRlcjNEXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlbnNpdHksIHNldERlbnNpdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzcGVlZCwgc2V0U3BlZWRdID0gdXNlU3RhdGUoMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYW5SZW5kZXIzRCh0cnVlKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgIHNldERlbnNpdHkoMC41KTtcbiAgICAgIHNldFNwZWVkKDAuNSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEJveCBiZz1cImJyYW5kLmJhY2tncm91bmRcIiBtaW5IPVwiMTAwdmhcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAge2NhblJlbmRlcjNEICYmIChcbiAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9ezB9IGxlZnQ9ezB9IHJpZ2h0PXswfSBib3R0b209ezB9PlxuICAgICAgICAgICAgPER5bmFtaWNUb2tlbkdhbGF4eSB0b2tlbnM9e3NhbXBsZVRva2Vuc30gZGVuc2l0eT17ZGVuc2l0eX0gc3BlZWQ9e3NwZWVkfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIueGxcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgekluZGV4PXsxfT5cbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgcHk9ezIwfSBtaW5IZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgPFZTdGFjayBhbGlnbj1cImZsZXgtc3RhcnRcIiBzcGFjaW5nPXs4fSBtYXhXPVwiNjAwcHhcIj5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCIzeGxcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgRGVGaSBSaXNrIEFzc2Vzc21lbnQgYW5kIFBvcnRmb2xpbyBPcHRpbWl6YXRpb25cbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgY29sb3I9XCJncmF5LjIwMFwiPlxuICAgICAgICAgICAgICAgIEV4cGxvcmUgdGhlIERlRmkgdW5pdmVyc2UsIGFuYWx5emUgcmlza3MsIGFuZCBvcHRpbWl6ZSB5b3VyIHBvcnRmb2xpbyBhY3Jvc3MgbXVsdGlwbGUgcHJvdG9jb2xzIGFuZCBjaGFpbnMgd2l0aCBhZHZhbmNlZCB0b29scy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIGFzPXtMaW5rfSBocmVmPVwiL2Rhc2hib2FyZFwiIHNpemU9XCJsZ1wiIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRmxleCIsIkhlYWRpbmciLCJUZXh0IiwiVlN0YWNrIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJMaW5rIiwiZHluYW1pYyIsIkR5bmFtaWNUb2tlbkdhbGF4eSIsInNzciIsInNhbXBsZVRva2VucyIsIm5hbWUiLCJtYXJrZXRDYXAiLCJyaXNrTGV2ZWwiLCJIb21lIiwiY2FuUmVuZGVyM0QiLCJzZXRDYW5SZW5kZXIzRCIsImRlbnNpdHkiLCJzZXREZW5zaXR5Iiwic3BlZWQiLCJzZXRTcGVlZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJiZyIsIm1pbkgiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9rZW5zIiwibWF4VyIsInpJbmRleCIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsImFsaWduIiwianVzdGlmeSIsInB5IiwibWluSGVpZ2h0Iiwic3BhY2luZyIsImFzIiwic2l6ZSIsImNvbG9yIiwiZm9udFNpemUiLCJocmVmIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});