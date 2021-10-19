"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/Post/Post.tsx":
/*!**********************************!*\
  !*** ./components/Post/Post.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_ListPost_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ListPost/styled */ "./components/ListPost/styled.ts");
/* harmony import */ var components_PostCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PostCard/styled */ "./components/PostCard/styled.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/Post/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\Post\\Post.tsx",
    _this = undefined;







var Post = function Post(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_ListPost_styled__WEBPACK_IMPORTED_MODULE_1__.MainWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_2__.Title, {
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Description, {
      children: post.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_2__.Title, {
        children: "Comments:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {
          return console.log('Add Comments');
        },
        children: "Add Comments"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), post.comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: comment.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uMmVmMmY2ZDg4YTZhYzJkYzdlMmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFLDhEQUFDLG1FQUFEO0FBQUEsNEJBQ0UsOERBQUMsNkRBQUQ7QUFBQSxnQkFBUUEsSUFBSSxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQUEsZ0JBQWNELElBQUksQ0FBQ0U7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsR0FBRDtBQUFBLDhCQUNBLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQSw4REFBQyw2REFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQUw7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBU0dKLElBQUksQ0FBQ0ssUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSwwQkFDakI7QUFBQSxrQkFBTUEsT0FBTyxDQUFDTDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQixDQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FoQkQ7O0tBQU1IO0FBaUJOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIgfSBmcm9tIFwiY29tcG9uZW50cy9MaXN0UG9zdC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiY29tcG9uZW50cy9Qb3N0Q2FyZC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5XcmFwcGVyPlxyXG4gICAgICA8VGl0bGU+e3Bvc3QudGl0bGV9PC9UaXRsZT5cclxuICAgICAgPERlc2NyaXB0aW9uPntwb3N0LmJvZHl9PC9EZXNjcmlwdGlvbj5cclxuICAgICAgPFJvdz5cclxuICAgICAgPFRpdGxlPkNvbW1lbnRzOjwvVGl0bGU+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT5jb25zb2xlLmxvZygnQWRkIENvbW1lbnRzJyl9PlxyXG4gICAgICAgIEFkZCBDb21tZW50c1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIHtwb3N0LmNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4gICAgICAgIDxkaXY+e2NvbW1lbnQuYm9keX08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L01haW5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJNYWluV3JhcHBlciIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJQb3N0IiwicG9zdCIsInRpdGxlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9