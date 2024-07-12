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

/***/ "./src/context/PostContext.tsx":
/*!*************************************!*\
  !*** ./src/context/PostContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostContext: () => (/* binding */ PostContext),\n/* harmony export */   PostProvider: () => (/* binding */ PostProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    posts: []\n};\nconst redcer = (state, action)=>{\n    switch(action.type){\n        case \"SET_POSTS\":\n            return {\n                ...state,\n                posts: action.payload\n            };\n        case \"ADD_POST\":\n            return {\n                ...state,\n                posts: [\n                    ...state.posts,\n                    action.payload\n                ]\n            };\n        default:\n            return state;\n    }\n};\nconst PostContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialState,\n    dispatch: ()=>null\n});\nconst PostProvider = ({ children })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(redcer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\Programing\\\\my-new-project\\\\src\\\\context\\\\PostContext.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Qb3N0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4RTtBQWlCOUUsTUFBTUcsZUFBc0I7SUFDMUJDLE9BQU8sRUFBRTtBQUNYO0FBRUEsTUFBTUMsU0FBUyxDQUFDQyxPQUFjQztJQUM1QixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdGLEtBQUs7Z0JBQUVGLE9BQU9HLE9BQU9FLE9BQU87WUFBVztRQUNyRCxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHSCxLQUFLO2dCQUFFRixPQUFPO3VCQUFJRSxNQUFNRixLQUFLO29CQUFFRyxPQUFPRSxPQUFPO2lCQUFTO1lBQUM7UUFDckU7WUFDRSxPQUFPSDtJQUNYO0FBQ0Y7QUFFQSxNQUFNSSw0QkFBY1Qsb0RBQWFBLENBQStDO0lBQzlFSyxPQUFPSDtJQUNQUSxVQUFVLElBQU07QUFDbEI7QUFFQSxNQUFNQyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUEyQjtJQUN6RCxNQUFNLENBQUNQLE9BQU9LLFNBQVMsR0FBR1QsaURBQVVBLENBQUNHLFFBQVFGO0lBRTdDLHFCQUNFLDhEQUFDTyxZQUFZSSxRQUFRO1FBQUNDLE9BQU87WUFBRVQ7WUFBT0s7UUFBUztrQkFDNUNFOzs7Ozs7QUFHUDtBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy10ZW1wbGF0ZS8uL3NyYy9jb250ZXh0L1Bvc3RDb250ZXh0LnRzeD9mM2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCBSZWFjdE5vZGUsIERpc3BhdGNoIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUG9zdCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJvZHk6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBwb3N0czogUG9zdFtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQWN0aW9ue1xyXG4gIHR5cGU6ICdTRVRfUE9TVFMnIHwgJ0FERF9QT1NUJztcclxuICBwYXlsb2FkOiBQb3N0W10gfCBQb3N0O1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG4gIHBvc3RzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHJlZGNlciA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogU3RhdGUgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1NFVF9QT1NUUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogYWN0aW9uLnBheWxvYWQgYXMgUG9zdFtdIH07XHJcbiAgICBjYXNlICdBRERfUE9TVCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwb3N0czogWy4uLnN0YXRlLnBvc3RzLCBhY3Rpb24ucGF5bG9hZCBhcyBQb3N0XSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBvc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7IHN0YXRlOiBTdGF0ZTsgZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbj4gfT4oe1xyXG4gIHN0YXRlOiBpbml0aWFsU3RhdGUsXHJcbiAgZGlzcGF0Y2g6ICgpID0+IG51bGwsXHJcbn0pO1xyXG5cclxuY29uc3QgUG9zdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkY2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qb3N0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0e1Bvc3RDb250ZXh0LCBQb3N0UHJvdmlkZXJ9O1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsInBvc3RzIiwicmVkY2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIlBvc3RDb250ZXh0IiwiZGlzcGF0Y2giLCJQb3N0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/PostContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_PostContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/PostContext */ \"./src/context/PostContext.tsx\");\n\n\n\nfunction Myapp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_PostContext__WEBPACK_IMPORTED_MODULE_2__.PostProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\Programing\\\\my-new-project\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Programing\\\\my-new-project\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Myapp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUV1QjtBQUV0RCxTQUFTQyxNQUFNLEVBQUNDLFNBQVMsRUFBQ0MsU0FBUyxFQUFVO0lBQzNDLHFCQUNFLDhEQUFDSCw4REFBWUE7a0JBQ1gsNEVBQUNFO1lBQVUsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHN0I7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgUG9zdFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9Qb3N0Q29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeWFwcCh7Q29tcG9uZW50LHBhZ2VQcm9wc306QXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBvc3RQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Bvc3RQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeWFwcDsiXSwibmFtZXMiOlsiUG9zdFByb3ZpZGVyIiwiTXlhcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();