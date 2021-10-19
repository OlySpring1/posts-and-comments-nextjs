"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/Post/Post.tsx":
/*!**********************************!*\
  !*** ./components/Post/Post.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_CommentText_CommentText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/CommentText/CommentText */ "./components/CommentText/CommentText.tsx");
/* harmony import */ var components_ListPost_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ListPost/styled */ "./components/ListPost/styled.ts");
/* harmony import */ var components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PostCard/styled */ "./components/PostCard/styled.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./components/Post/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\Post\\Post.tsx",
    _this = undefined;








var Post = function Post(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_ListPost_styled__WEBPACK_IMPORTED_MODULE_2__.MainWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__.Title, {
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Description, {
      children: post.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__.Title, {
        children: "Comments:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {
          return console.log('Add Comments');
        },
        children: "Add Comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), post.comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: comment.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_CommentText_CommentText__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uZDBmYjlhYzYyNWZhMDBlNjEyNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFLDhEQUFDLG1FQUFEO0FBQUEsNEJBQ0UsOERBQUMsNkRBQUQ7QUFBQSxnQkFBUUEsSUFBSSxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQUEsZ0JBQWNELElBQUksQ0FBQ0U7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsd0NBQUQ7QUFBQSw4QkFDQSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUEsOERBQUMsNkRBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBS0MsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQUFMO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQVNHSixJQUFJLENBQUNLLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxPQUFEO0FBQUEsMEJBQ2pCO0FBQUEsa0JBQU1BLE9BQU8sQ0FBQ0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBbEIsQ0FUSCxlQVlFLDhEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWxCRDs7S0FBTUg7QUFtQk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29tbWVudFRleHQgZnJvbSBcImNvbXBvbmVudHMvQ29tbWVudFRleHQvQ29tbWVudFRleHRcIjtcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIgfSBmcm9tIFwiY29tcG9uZW50cy9MaXN0UG9zdC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiY29tcG9uZW50cy9Qb3N0Q2FyZC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgRGVzY3JpcHRpb24sIFJvdyB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICA8RGVzY3JpcHRpb24+e3Bvc3QuYm9keX08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICA8Um93PlxyXG4gICAgICA8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PmNvbnNvbGUubG9nKCdBZGQgQ29tbWVudHMnKX0+XHJcbiAgICAgICAgQWRkIENvbW1lbnRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICB7cG9zdC5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8ZGl2Pntjb21tZW50LmJvZHl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8Q29tbWVudFRleHQvPlxyXG5cclxuICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbW1lbnRUZXh0IiwiTWFpbldyYXBwZXIiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUm93IiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==