"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Delimiter/Delimiter.tsx":
/*!********************************************!*\
  !*** ./components/Delimiter/Delimiter.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Delimiter = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Delimiter",
  componentId: "sc-1wrcwz7-0"
})(["width:100%;height:2px;background:gray;margin:5px 0;"]);
/* harmony default export */ __webpack_exports__["default"] = (Delimiter);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/ListPost/ListPost.tsx":
/*!******************************************!*\
  !*** ./components/ListPost/ListPost.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Delimiter_Delimiter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Delimiter/Delimiter */ "./components/Delimiter/Delimiter.tsx");
/* harmony import */ var components_PostCard_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/PostCard/PostCard */ "./components/PostCard/PostCard.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/ListPost/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\ListPost\\ListPost.tsx",
    _this = undefined;






var ListPost = function ListPost(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.MainWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.TitlePage, {
      children: "Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_Delimiter_Delimiter__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), posts.map(function (post) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_PostCard_PostCard__WEBPACK_IMPORTED_MODULE_1__.default, {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = ListPost;
/* harmony default export */ __webpack_exports__["default"] = (ListPost);

var _c;

$RefreshReg$(_c, "ListPost");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY3NmRhMWE1YmFhOWY4YmE4YTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLFNBQVMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkRBQWY7QUFPQSwrREFBZUMsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM5QixzQkFDRSw4REFBQyxnREFBRDtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFLR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDBCQUNULDhEQUFDLGlFQUFEO0FBQVUsWUFBSSxFQUFFQTtBQUFoQixTQUEyQkEsSUFBSSxDQUFDQyxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpEOztLQUFNSjtBQWNOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGVsaW1pdGVyL0RlbGltaXRlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdFBvc3QvTGlzdFBvc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBEZWxpbWl0ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IGdyYXk7XHJcblxyXG4gIG1hcmdpbjogNXB4IDA7XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IERlbGltaXRlciIsImltcG9ydCBEZWxpbWl0ZXIgZnJvbSBcImNvbXBvbmVudHMvRGVsaW1pdGVyL0RlbGltaXRlclwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcImNvbXBvbmVudHMvUG9zdENhcmQvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIsIFRpdGxlUGFnZSB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgTGlzdFBvc3QgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluV3JhcHBlcj5cclxuICAgICAgPFRpdGxlUGFnZT5cclxuICAgICAgICBQb3N0c1xyXG4gICAgICA8L1RpdGxlUGFnZT5cclxuICAgICAgPERlbGltaXRlci8+XHJcbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtwb3N0LmlkfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQb3N0O1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiRGVsaW1pdGVyIiwiZGl2IiwiUG9zdENhcmQiLCJNYWluV3JhcHBlciIsIlRpdGxlUGFnZSIsIkxpc3RQb3N0IiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9