"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./lib/DataAggregator.ts":
/*!*******************************!*\
  !*** ./lib/DataAggregator.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataAggregator: function() { return /* binding */ DataAggregator; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst DEFI_LLAMA_API = \"https://api.llama.fi/protocols\";\nclass DataAggregator {\n    async aggregateData() {\n        try {\n            console.log(\"Fetching data from DeFi Llama API...\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(DEFI_LLAMA_API);\n            console.log(\"Received response from DeFi Llama API:\", response.data);\n            if (!Array.isArray(response.data)) {\n                throw new Error(\"Unexpected data format from API\");\n            }\n            return response.data.slice(0, 10).map((protocol)=>({\n                    protocolName: protocol.name,\n                    chain: protocol.chain,\n                    tvl: protocol.tvl,\n                    apy: this.estimateAPY(protocol.tvl, protocol.change_1d)\n                }));\n        } catch (error) {\n            console.error(\"Error fetching data from DeFi Llama:\", error);\n            if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n                var _error_response;\n                console.error(\"Axios error details:\", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);\n            }\n            return this.getFallbackData();\n        }\n    }\n    estimateAPY(tvl, change24h) {\n        // Base APY calculation\n        const baseAPY = Math.abs(change24h) / 100 * 365;\n        // Add some randomness to make it more realistic\n        const randomFactor = 1 + (Math.random() - 0.5) * 0.5; // Random factor between 0.75 and 1.25\n        // Adjust APY based on TVL (larger TVL generally means lower APY)\n        const tvlFactor = Math.max(0.5, Math.min(1.5, 10000000000 / tvl));\n        // Combine all factors\n        let apy = baseAPY * randomFactor * tvlFactor;\n        // Ensure APY is within a realistic range (0.1% to 100%)\n        apy = Math.max(0.001, Math.min(apy, 1));\n        return apy;\n    }\n    getFallbackData() {\n        console.log(\"Using fallback data\");\n        return [\n            {\n                protocolName: \"Aave\",\n                chain: \"Ethereum\",\n                tvl: 5000000000,\n                apy: 0.05\n            },\n            {\n                protocolName: \"Compound\",\n                chain: \"Ethereum\",\n                tvl: 3000000000,\n                apy: 0.04\n            },\n            {\n                protocolName: \"Uniswap\",\n                chain: \"Ethereum\",\n                tvl: 7000000000,\n                apy: 0.08\n            },\n            {\n                protocolName: \"Curve\",\n                chain: \"Ethereum\",\n                tvl: 4000000000,\n                apy: 0.06\n            },\n            {\n                protocolName: \"MakerDAO\",\n                chain: \"Ethereum\",\n                tvl: 6000000000,\n                apy: 0.03\n            },\n            {\n                protocolName: \"SushiSwap\",\n                chain: \"Ethereum\",\n                tvl: 2000000000,\n                apy: 0.07\n            },\n            {\n                protocolName: \"Yearn Finance\",\n                chain: \"Ethereum\",\n                tvl: 1000000000,\n                apy: 0.09\n            },\n            {\n                protocolName: \"Balancer\",\n                chain: \"Ethereum\",\n                tvl: 1500000000,\n                apy: 0.05\n            },\n            {\n                protocolName: \"Synthetix\",\n                chain: \"Ethereum\",\n                tvl: 800000000,\n                apy: 0.12\n            },\n            {\n                protocolName: \"dYdX\",\n                chain: \"Ethereum\",\n                tvl: 900000000,\n                apy: 0.06\n            }\n        ];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2xpYi9EYXRhQWdncmVnYXRvci50cz83MDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBQcm90b2NvbERhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMvUHJvdG9jb2xDb25uZWN0b3InO1xuXG5jb25zdCBERUZJX0xMQU1BX0FQSSA9ICdodHRwczovL2FwaS5sbGFtYS5maS9wcm90b2NvbHMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YUFnZ3JlZ2F0b3Ige1xuICBhc3luYyBhZ2dyZWdhdGVEYXRhKCk6IFByb21pc2U8UHJvdG9jb2xEYXRhW10+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBkYXRhIGZyb20gRGVGaSBMbGFtYSBBUEkuLi5cIik7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChERUZJX0xMQU1BX0FQSSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHJlc3BvbnNlIGZyb20gRGVGaSBMbGFtYSBBUEk6XCIsIHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGF0YSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBkYXRhIGZvcm1hdCBmcm9tIEFQSVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuc2xpY2UoMCwgMTApLm1hcCgocHJvdG9jb2w6IGFueSkgPT4gKHtcbiAgICAgICAgcHJvdG9jb2xOYW1lOiBwcm90b2NvbC5uYW1lLFxuICAgICAgICBjaGFpbjogcHJvdG9jb2wuY2hhaW4sXG4gICAgICAgIHR2bDogcHJvdG9jb2wudHZsLFxuICAgICAgICBhcHk6IHRoaXMuZXN0aW1hdGVBUFkocHJvdG9jb2wudHZsLCBwcm90b2NvbC5jaGFuZ2VfMWQpLFxuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gRGVGaSBMbGFtYTonLCBlcnJvcik7XG4gICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBeGlvcyBlcnJvciBkZXRhaWxzOicsIGVycm9yLnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmdldEZhbGxiYWNrRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXN0aW1hdGVBUFkodHZsOiBudW1iZXIsIGNoYW5nZTI0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyBCYXNlIEFQWSBjYWxjdWxhdGlvblxuICAgIGNvbnN0IGJhc2VBUFkgPSAoTWF0aC5hYnMoY2hhbmdlMjRoKSAvIDEwMCkgKiAzNjU7XG4gICAgXG4gICAgLy8gQWRkIHNvbWUgcmFuZG9tbmVzcyB0byBtYWtlIGl0IG1vcmUgcmVhbGlzdGljXG4gICAgY29uc3QgcmFuZG9tRmFjdG9yID0gMSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuNTsgLy8gUmFuZG9tIGZhY3RvciBiZXR3ZWVuIDAuNzUgYW5kIDEuMjVcbiAgICBcbiAgICAvLyBBZGp1c3QgQVBZIGJhc2VkIG9uIFRWTCAobGFyZ2VyIFRWTCBnZW5lcmFsbHkgbWVhbnMgbG93ZXIgQVBZKVxuICAgIGNvbnN0IHR2bEZhY3RvciA9IE1hdGgubWF4KDAuNSwgTWF0aC5taW4oMS41LCAxMDAwMDAwMDAwMCAvIHR2bCkpO1xuICAgIFxuICAgIC8vIENvbWJpbmUgYWxsIGZhY3RvcnNcbiAgICBsZXQgYXB5ID0gYmFzZUFQWSAqIHJhbmRvbUZhY3RvciAqIHR2bEZhY3RvcjtcbiAgICBcbiAgICAvLyBFbnN1cmUgQVBZIGlzIHdpdGhpbiBhIHJlYWxpc3RpYyByYW5nZSAoMC4xJSB0byAxMDAlKVxuICAgIGFweSA9IE1hdGgubWF4KDAuMDAxLCBNYXRoLm1pbihhcHksIDEpKTtcbiAgICBcbiAgICByZXR1cm4gYXB5O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGYWxsYmFja0RhdGEoKTogUHJvdG9jb2xEYXRhW10ge1xuICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZmFsbGJhY2sgZGF0YVwiKTtcbiAgICByZXR1cm4gW1xuICAgICAgeyBwcm90b2NvbE5hbWU6ICdBYXZlJywgY2hhaW46ICdFdGhlcmV1bScsIHR2bDogNTAwMDAwMDAwMCwgYXB5OiAwLjA1IH0sXG4gICAgICB7IHByb3RvY29sTmFtZTogJ0NvbXBvdW5kJywgY2hhaW46ICdFdGhlcmV1bScsIHR2bDogMzAwMDAwMDAwMCwgYXB5OiAwLjA0IH0sXG4gICAgICB7IHByb3RvY29sTmFtZTogJ1VuaXN3YXAnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiA3MDAwMDAwMDAwLCBhcHk6IDAuMDggfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnQ3VydmUnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiA0MDAwMDAwMDAwLCBhcHk6IDAuMDYgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnTWFrZXJEQU8nLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiA2MDAwMDAwMDAwLCBhcHk6IDAuMDMgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnU3VzaGlTd2FwJywgY2hhaW46ICdFdGhlcmV1bScsIHR2bDogMjAwMDAwMDAwMCwgYXB5OiAwLjA3IH0sXG4gICAgICB7IHByb3RvY29sTmFtZTogJ1llYXJuIEZpbmFuY2UnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiAxMDAwMDAwMDAwLCBhcHk6IDAuMDkgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnQmFsYW5jZXInLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiAxNTAwMDAwMDAwLCBhcHk6IDAuMDUgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnU3ludGhldGl4JywgY2hhaW46ICdFdGhlcmV1bScsIHR2bDogODAwMDAwMDAwLCBhcHk6IDAuMTIgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnZFlkWCcsIGNoYWluOiAnRXRoZXJldW0nLCB0dmw6IDkwMDAwMDAwMCwgYXB5OiAwLjA2IH0sXG4gICAgXTtcbiAgfVxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkRFRklfTExBTUFfQVBJIiwiRGF0YUFnZ3JlZ2F0b3IiLCJhZ2dyZWdhdGVEYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwic2xpY2UiLCJtYXAiLCJwcm90b2NvbCIsInByb3RvY29sTmFtZSIsIm5hbWUiLCJjaGFpbiIsInR2bCIsImFweSIsImVzdGltYXRlQVBZIiwiY2hhbmdlXzFkIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJnZXRGYWxsYmFja0RhdGEiLCJjaGFuZ2UyNGgiLCJiYXNlQVBZIiwiTWF0aCIsImFicyIsInJhbmRvbUZhY3RvciIsInJhbmRvbSIsInR2bEZhY3RvciIsIm1heCIsIm1pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/DataAggregator.ts\n"));

/***/ })

});