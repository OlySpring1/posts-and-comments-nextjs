"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/CommentText/CommentText.tsx":
/*!************************************************!*\
  !*** ./components/CommentText/CommentText.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/CommentText/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\CommentText\\CommentText.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var CommentText = function CommentText() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      text = _useState[0],
      setText = _useState[1];

  var handleChange = function handleChange(e) {
    var target = e.target.value;
    setText(target);
  };

  var handleSubmit = function handleSubmit() {
    console.log("надіслали");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.StyledForm, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.TextField, {
      value: text,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: "submit",
      onClick: handleSubmit,
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(CommentText, "M8VhbSOru85VOsk7T2j5DvKRp+M=");

_c = CommentText;
/* harmony default export */ __webpack_exports__["default"] = (CommentText);

var _c;

$RefreshReg$(_c, "CommentText");

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

/***/ "./components/CommentText/styled.ts":
/*!******************************************!*\
  !*** ./components/CommentText/styled.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledForm": function() { return /* binding */ StyledForm; },
/* harmony export */   "TextField": function() { return /* binding */ TextField; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.form.withConfig({
  displayName: "styled__StyledForm",
  componentId: "sc-1nipzyv-0"
})(["width:100%;"]);
var TextField = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.textarea.withConfig({
  displayName: "styled__TextField",
  componentId: "sc-1nipzyv-1"
})(["width:50%;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uN2E2Y2I3YjFhNWUwMDMxMjE3MDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsa0JBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPSSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUIsUUFBTUMsTUFBTSxHQUFHRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQUosSUFBQUEsT0FBTyxDQUFDRyxNQUFELENBQVA7QUFDRCxHQUhEOztBQUlBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFFRCxHQUhEOztBQUlBLHNCQUNFLDhEQUFDLCtDQUFEO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVyxXQUFLLEVBQUVSLElBQWxCO0FBQXdCLGNBQVEsRUFBRUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVJLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWhCRDs7R0FBTVA7O0tBQUFBO0FBaUJOLCtEQUFlQSxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNPLElBQU1GLFVBQVUsR0FBR1ksc0VBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWhCO0FBR0EsSUFBTVgsU0FBUyxHQUFHVywwRUFBSDtBQUFBO0FBQUE7QUFBQSxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRSw4REFBQyxtRUFBRDtBQUFBLDRCQUNFLDhEQUFDLDZEQUFEO0FBQUEsZ0JBQVFBLElBQUksQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxnREFBRDtBQUFBLGdCQUFjRCxJQUFJLENBQUNFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLHdDQUFEO0FBQUEsOEJBQ0EsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBLDhEQUFDLDZEQUFEO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQUtaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBTDtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFTR1MsSUFBSSxDQUFDRyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLDBCQUNqQjtBQUFBLGtCQUFNQSxPQUFPLENBQUNIO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURpQjtBQUFBLEtBQWxCLENBVEgsZUFZRSw4REFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0FsQkQ7O0tBQU1IO0FBbUJOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudFRleHQvQ29tbWVudFRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRUZXh0L3N0eWxlZC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU3R5bGVkRm9ybSwgVGV4dEZpZWxkIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuXHJcbmNvbnN0IENvbW1lbnRUZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRUZXh0KHRhcmdldCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwi0L3QsNC00ZbRgdC70LDQu9C4XCIpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRm9ybSA+XHJcbiAgICAgIDxUZXh0RmllbGQgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5TZW5kPC9CdXR0b24+XHJcbiAgICA8L1N0eWxlZEZvcm0+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRUZXh0IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUZXh0RmllbGQgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDUwJTtcclxuYCIsImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29tbWVudFRleHQgZnJvbSBcImNvbXBvbmVudHMvQ29tbWVudFRleHQvQ29tbWVudFRleHRcIjtcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIgfSBmcm9tIFwiY29tcG9uZW50cy9MaXN0UG9zdC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiY29tcG9uZW50cy9Qb3N0Q2FyZC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgRGVzY3JpcHRpb24sIFJvdywgQ29tbWVudCB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICA8RGVzY3JpcHRpb24+e3Bvc3QuYm9keX08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICA8Um93PlxyXG4gICAgICA8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PmNvbnNvbGUubG9nKCdBZGQgQ29tbWVudHMnKX0+XHJcbiAgICAgICAgQWRkIENvbW1lbnRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICB7cG9zdC5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8ZGl2Pntjb21tZW50LmJvZHl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8Q29tbWVudFRleHQvPlxyXG5cclxuICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVN0YXRlIiwiU3R5bGVkRm9ybSIsIlRleHRGaWVsZCIsIkNvbW1lbnRUZXh0IiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVkIiwiZm9ybSIsInRleHRhcmVhIiwiTWFpbldyYXBwZXIiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUm93IiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9