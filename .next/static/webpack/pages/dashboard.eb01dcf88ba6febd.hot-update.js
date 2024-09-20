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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataAggregator: function() { return /* binding */ DataAggregator; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst DEFI_LLAMA_API = \"https://api.llama.fi/protocols\";\nclass DataAggregator {\n    async aggregateData() {\n        try {\n            console.log(\"Fetching data from DeFi Llama API...\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(DEFI_LLAMA_API);\n            console.log(\"Received response from DeFi Llama API:\", response.data);\n            if (!Array.isArray(response.data)) {\n                throw new Error(\"Unexpected data format from API\");\n            }\n            return response.data.slice(0, 10).map((protocol)=>({\n                    protocolName: protocol.name,\n                    chain: protocol.chain,\n                    tvl: protocol.tvl,\n                    apy: this.estimateAPY(protocol.tvl, protocol.change_1d)\n                }));\n        } catch (error) {\n            console.error(\"Error fetching data from DeFi Llama:\", error);\n            if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n                var _error_response;\n                console.error(\"Axios error details:\", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);\n            }\n            return this.getFallbackData();\n        }\n    }\n    estimateAPY(tvl, change24h) {\n        // Base APY calculation\n        const baseAPY = Math.abs(change24h) / 100;\n        // Add some randomness to make it more realistic\n        const randomFactor = 1 + (Math.random() - 0.5) * 0.2; // Random factor between 0.9 and 1.1\n        // Adjust APY based on TVL (larger TVL generally means lower APY)\n        const tvlFactor = Math.max(0.5, Math.min(1.5, 10000000000 / tvl));\n        // Combine all factors\n        let apy = baseAPY * randomFactor * tvlFactor;\n        // Ensure APY is within a realistic range (0.1% to 20%)\n        apy = Math.max(0.001, Math.min(apy, 0.2));\n        return apy;\n    }\n    getFallbackData() {\n        console.log(\"Using fallback data\");\n        return [\n            {\n                protocolName: \"Aave\",\n                chain: \"Ethereum\",\n                tvl: 5000000000,\n                apy: 0.03\n            },\n            {\n                protocolName: \"Compound\",\n                chain: \"Ethereum\",\n                tvl: 3000000000,\n                apy: 0.025\n            },\n            {\n                protocolName: \"Uniswap\",\n                chain: \"Ethereum\",\n                tvl: 7000000000,\n                apy: 0.04\n            },\n            {\n                protocolName: \"Curve\",\n                chain: \"Ethereum\",\n                tvl: 4000000000,\n                apy: 0.035\n            },\n            {\n                protocolName: \"MakerDAO\",\n                chain: \"Ethereum\",\n                tvl: 6000000000,\n                apy: 0.02\n            },\n            {\n                protocolName: \"SushiSwap\",\n                chain: \"Ethereum\",\n                tvl: 2000000000,\n                apy: 0.045\n            },\n            {\n                protocolName: \"Yearn Finance\",\n                chain: \"Ethereum\",\n                tvl: 1000000000,\n                apy: 0.055\n            },\n            {\n                protocolName: \"Balancer\",\n                chain: \"Ethereum\",\n                tvl: 1500000000,\n                apy: 0.03\n            },\n            {\n                protocolName: \"Synthetix\",\n                chain: \"Ethereum\",\n                tvl: 800000000,\n                apy: 0.06\n            },\n            {\n                protocolName: \"dYdX\",\n                chain: \"Ethereum\",\n                tvl: 900000000,\n                apy: 0.035\n            }\n        ];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvRGF0YUFnZ3JlZ2F0b3IudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFHMUIsTUFBTUMsaUJBQWlCO0FBRWhCLE1BQU1DO0lBQ1gsTUFBTUMsZ0JBQXlDO1FBQzdDLElBQUk7WUFDRkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTUMsV0FBVyxNQUFNTixpREFBUyxDQUFDQztZQUNqQ0csUUFBUUMsR0FBRyxDQUFDLDBDQUEwQ0MsU0FBU0UsSUFBSTtZQUVuRSxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0osU0FBU0UsSUFBSSxHQUFHO2dCQUNqQyxNQUFNLElBQUlHLE1BQU07WUFDbEI7WUFFQSxPQUFPTCxTQUFTRSxJQUFJLENBQUNJLEtBQUssQ0FBQyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxXQUFtQjtvQkFDeERDLGNBQWNELFNBQVNFLElBQUk7b0JBQzNCQyxPQUFPSCxTQUFTRyxLQUFLO29CQUNyQkMsS0FBS0osU0FBU0ksR0FBRztvQkFDakJDLEtBQUssSUFBSSxDQUFDQyxXQUFXLENBQUNOLFNBQVNJLEdBQUcsRUFBRUosU0FBU08sU0FBUztnQkFDeEQ7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZGxCLFFBQVFrQixLQUFLLENBQUMsd0NBQXdDQTtZQUN0RCxJQUFJdEIsMERBQWtCLENBQUNzQixRQUFRO29CQUNTQTtnQkFBdENsQixRQUFRa0IsS0FBSyxDQUFDLHlCQUF3QkEsa0JBQUFBLE1BQU1oQixRQUFRLGNBQWRnQixzQ0FBQUEsZ0JBQWdCZCxJQUFJO1lBQzVEO1lBQ0EsT0FBTyxJQUFJLENBQUNnQixlQUFlO1FBQzdCO0lBQ0Y7SUFFUUosWUFBWUYsR0FBVyxFQUFFTyxTQUFpQixFQUFVO1FBQzFELHVCQUF1QjtRQUN2QixNQUFNQyxVQUFVQyxLQUFLQyxHQUFHLENBQUNILGFBQWE7UUFFdEMsZ0RBQWdEO1FBQ2hELE1BQU1JLGVBQWUsSUFBSSxDQUFDRixLQUFLRyxNQUFNLEtBQUssR0FBRSxJQUFLLEtBQUssb0NBQW9DO1FBRTFGLGlFQUFpRTtRQUNqRSxNQUFNQyxZQUFZSixLQUFLSyxHQUFHLENBQUMsS0FBS0wsS0FBS00sR0FBRyxDQUFDLEtBQUssY0FBY2Y7UUFFNUQsc0JBQXNCO1FBQ3RCLElBQUlDLE1BQU1PLFVBQVVHLGVBQWVFO1FBRW5DLHVEQUF1RDtRQUN2RFosTUFBTVEsS0FBS0ssR0FBRyxDQUFDLE9BQU9MLEtBQUtNLEdBQUcsQ0FBQ2QsS0FBSztRQUVwQyxPQUFPQTtJQUNUO0lBRVFLLGtCQUFrQztRQUN4Q3BCLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU87WUFDTDtnQkFBRVUsY0FBYztnQkFBUUUsT0FBTztnQkFBWUMsS0FBSztnQkFBWUMsS0FBSztZQUFLO1lBQ3RFO2dCQUFFSixjQUFjO2dCQUFZRSxPQUFPO2dCQUFZQyxLQUFLO2dCQUFZQyxLQUFLO1lBQU07WUFDM0U7Z0JBQUVKLGNBQWM7Z0JBQVdFLE9BQU87Z0JBQVlDLEtBQUs7Z0JBQVlDLEtBQUs7WUFBSztZQUN6RTtnQkFBRUosY0FBYztnQkFBU0UsT0FBTztnQkFBWUMsS0FBSztnQkFBWUMsS0FBSztZQUFNO1lBQ3hFO2dCQUFFSixjQUFjO2dCQUFZRSxPQUFPO2dCQUFZQyxLQUFLO2dCQUFZQyxLQUFLO1lBQUs7WUFDMUU7Z0JBQUVKLGNBQWM7Z0JBQWFFLE9BQU87Z0JBQVlDLEtBQUs7Z0JBQVlDLEtBQUs7WUFBTTtZQUM1RTtnQkFBRUosY0FBYztnQkFBaUJFLE9BQU87Z0JBQVlDLEtBQUs7Z0JBQVlDLEtBQUs7WUFBTTtZQUNoRjtnQkFBRUosY0FBYztnQkFBWUUsT0FBTztnQkFBWUMsS0FBSztnQkFBWUMsS0FBSztZQUFLO1lBQzFFO2dCQUFFSixjQUFjO2dCQUFhRSxPQUFPO2dCQUFZQyxLQUFLO2dCQUFXQyxLQUFLO1lBQUs7WUFDMUU7Z0JBQUVKLGNBQWM7Z0JBQVFFLE9BQU87Z0JBQVlDLEtBQUs7Z0JBQVdDLEtBQUs7WUFBTTtTQUN2RTtJQUNIO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0RhdGFBZ2dyZWdhdG9yLnRzPzcwMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFByb3RvY29sRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcy9Qcm90b2NvbENvbm5lY3Rvcic7XG5cbmNvbnN0IERFRklfTExBTUFfQVBJID0gJ2h0dHBzOi8vYXBpLmxsYW1hLmZpL3Byb3RvY29scyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhQWdncmVnYXRvciB7XG4gIGFzeW5jIGFnZ3JlZ2F0ZURhdGEoKTogUHJvbWlzZTxQcm90b2NvbERhdGFbXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoaW5nIGRhdGEgZnJvbSBEZUZpIExsYW1hIEFQSS4uLlwiKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KERFRklfTExBTUFfQVBJKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgcmVzcG9uc2UgZnJvbSBEZUZpIExsYW1hIEFQSTpcIiwgcmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXNwb25zZS5kYXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGRhdGEgZm9ybWF0IGZyb20gQVBJXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5zbGljZSgwLCAxMCkubWFwKChwcm90b2NvbDogYW55KSA9PiAoe1xuICAgICAgICBwcm90b2NvbE5hbWU6IHByb3RvY29sLm5hbWUsXG4gICAgICAgIGNoYWluOiBwcm90b2NvbC5jaGFpbixcbiAgICAgICAgdHZsOiBwcm90b2NvbC50dmwsXG4gICAgICAgIGFweTogdGhpcy5lc3RpbWF0ZUFQWShwcm90b2NvbC50dmwsIHByb3RvY29sLmNoYW5nZV8xZCksXG4gICAgICB9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEgZnJvbSBEZUZpIExsYW1hOicsIGVycm9yKTtcbiAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F4aW9zIGVycm9yIGRldGFpbHM6JywgZXJyb3IucmVzcG9uc2U/LmRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmFsbGJhY2tEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlc3RpbWF0ZUFQWSh0dmw6IG51bWJlciwgY2hhbmdlMjRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIEJhc2UgQVBZIGNhbGN1bGF0aW9uXG4gICAgY29uc3QgYmFzZUFQWSA9IE1hdGguYWJzKGNoYW5nZTI0aCkgLyAxMDA7XG4gICAgXG4gICAgLy8gQWRkIHNvbWUgcmFuZG9tbmVzcyB0byBtYWtlIGl0IG1vcmUgcmVhbGlzdGljXG4gICAgY29uc3QgcmFuZG9tRmFjdG9yID0gMSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMjsgLy8gUmFuZG9tIGZhY3RvciBiZXR3ZWVuIDAuOSBhbmQgMS4xXG4gICAgXG4gICAgLy8gQWRqdXN0IEFQWSBiYXNlZCBvbiBUVkwgKGxhcmdlciBUVkwgZ2VuZXJhbGx5IG1lYW5zIGxvd2VyIEFQWSlcbiAgICBjb25zdCB0dmxGYWN0b3IgPSBNYXRoLm1heCgwLjUsIE1hdGgubWluKDEuNSwgMTAwMDAwMDAwMDAgLyB0dmwpKTtcbiAgICBcbiAgICAvLyBDb21iaW5lIGFsbCBmYWN0b3JzXG4gICAgbGV0IGFweSA9IGJhc2VBUFkgKiByYW5kb21GYWN0b3IgKiB0dmxGYWN0b3I7XG4gICAgXG4gICAgLy8gRW5zdXJlIEFQWSBpcyB3aXRoaW4gYSByZWFsaXN0aWMgcmFuZ2UgKDAuMSUgdG8gMjAlKVxuICAgIGFweSA9IE1hdGgubWF4KDAuMDAxLCBNYXRoLm1pbihhcHksIDAuMikpO1xuICAgIFxuICAgIHJldHVybiBhcHk7XG4gIH1cblxuICBwcml2YXRlIGdldEZhbGxiYWNrRGF0YSgpOiBQcm90b2NvbERhdGFbXSB7XG4gICAgY29uc29sZS5sb2coXCJVc2luZyBmYWxsYmFjayBkYXRhXCIpO1xuICAgIHJldHVybiBbXG4gICAgICB7IHByb3RvY29sTmFtZTogJ0FhdmUnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiA1MDAwMDAwMDAwLCBhcHk6IDAuMDMgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnQ29tcG91bmQnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiAzMDAwMDAwMDAwLCBhcHk6IDAuMDI1IH0sXG4gICAgICB7IHByb3RvY29sTmFtZTogJ1VuaXN3YXAnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiA3MDAwMDAwMDAwLCBhcHk6IDAuMDQgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnQ3VydmUnLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiA0MDAwMDAwMDAwLCBhcHk6IDAuMDM1IH0sXG4gICAgICB7IHByb3RvY29sTmFtZTogJ01ha2VyREFPJywgY2hhaW46ICdFdGhlcmV1bScsIHR2bDogNjAwMDAwMDAwMCwgYXB5OiAwLjAyIH0sXG4gICAgICB7IHByb3RvY29sTmFtZTogJ1N1c2hpU3dhcCcsIGNoYWluOiAnRXRoZXJldW0nLCB0dmw6IDIwMDAwMDAwMDAsIGFweTogMC4wNDUgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnWWVhcm4gRmluYW5jZScsIGNoYWluOiAnRXRoZXJldW0nLCB0dmw6IDEwMDAwMDAwMDAsIGFweTogMC4wNTUgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnQmFsYW5jZXInLCBjaGFpbjogJ0V0aGVyZXVtJywgdHZsOiAxNTAwMDAwMDAwLCBhcHk6IDAuMDMgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnU3ludGhldGl4JywgY2hhaW46ICdFdGhlcmV1bScsIHR2bDogODAwMDAwMDAwLCBhcHk6IDAuMDYgfSxcbiAgICAgIHsgcHJvdG9jb2xOYW1lOiAnZFlkWCcsIGNoYWluOiAnRXRoZXJldW0nLCB0dmw6IDkwMDAwMDAwMCwgYXB5OiAwLjAzNSB9LFxuICAgIF07XG4gIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJERUZJX0xMQU1BX0FQSSIsIkRhdGFBZ2dyZWdhdG9yIiwiYWdncmVnYXRlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInNsaWNlIiwibWFwIiwicHJvdG9jb2wiLCJwcm90b2NvbE5hbWUiLCJuYW1lIiwiY2hhaW4iLCJ0dmwiLCJhcHkiLCJlc3RpbWF0ZUFQWSIsImNoYW5nZV8xZCIsImVycm9yIiwiaXNBeGlvc0Vycm9yIiwiZ2V0RmFsbGJhY2tEYXRhIiwiY2hhbmdlMjRoIiwiYmFzZUFQWSIsIk1hdGgiLCJhYnMiLCJyYW5kb21GYWN0b3IiLCJyYW5kb20iLCJ0dmxGYWN0b3IiLCJtYXgiLCJtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/DataAggregator.ts\n"));

/***/ })

});