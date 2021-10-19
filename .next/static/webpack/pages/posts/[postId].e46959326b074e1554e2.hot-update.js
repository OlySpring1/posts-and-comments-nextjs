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
    console.log("надіслали", text);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.StyledForm, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.TextField, {
      value: text,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: "submit",
      onClick: handleSubmit,
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
})(["width:50%;resize:none;height:200px;"]);

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
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Description, {
      children: post.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__.Title, {
        children: "Comments:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {
          return console.log('Add Comments');
        },
        children: "Add Comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), post.comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: comment.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_CommentText_CommentText__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uZTQ2OTU5MzI2YjA3NGUxNTU0ZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsa0JBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPSSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUIsUUFBTUMsTUFBTSxHQUFHRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQUosSUFBQUEsT0FBTyxDQUFDRyxNQUFELENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJSLElBQXpCO0FBRUQsR0FIRDs7QUFJQSxzQkFDRSw4REFBQywrQ0FBRDtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVcsV0FBSyxFQUFFQSxJQUFsQjtBQUF3QixjQUFRLEVBQUVFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLDZEQUFEO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFSSxZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FqQkQ7O0dBQU1QOztLQUFBQTtBQWtCTiwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDTyxJQUFNRixVQUFVLEdBQUdZLHNFQUFIO0FBQUE7QUFBQTtBQUFBLG1CQUFoQjtBQUdBLElBQU1YLFNBQVMsR0FBR1csMEVBQUg7QUFBQTtBQUFBO0FBQUEsMkNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1PLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFekIsc0JBQ0UsOERBQUMsbUVBQUQ7QUFBQSw0QkFDRSw4REFBQyw2REFBRDtBQUFBLGdCQUFRQSxJQUFJLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBQSxnQkFBY0QsSUFBSSxDQUFDRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyx3Q0FBRDtBQUFBLDhCQUNBLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQSw4REFBQyw2REFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFLWixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQUw7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBU0dTLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSwwQkFDakI7QUFBQSxrQkFBTUEsT0FBTyxDQUFDSDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUI7QUFBQSxLQUFsQixDQVRILGVBWUUsOERBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBbEJEOztLQUFNSDtBQW1CTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRUZXh0L0NvbW1lbnRUZXh0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VGV4dC9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFN0eWxlZEZvcm0sIFRleHRGaWVsZCB9IGZyb20gXCIuL3N0eWxlZFwiXHJcblxyXG5jb25zdCBDb21tZW50VGV4dCA9ICgpID0+IHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0VGV4dCh0YXJnZXQpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcItC90LDQtNGW0YHQu9Cw0LvQuFwiLCB0ZXh0KTtcclxuICAgIFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZvcm0gPlxyXG4gICAgICA8VGV4dEZpZWxkIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2VuZDwvQnV0dG9uPlxyXG4gICAgPC9TdHlsZWRGb3JtPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50VGV4dCIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGV4dEZpZWxkID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbmAiLCJpbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IENvbW1lbnRUZXh0IGZyb20gXCJjb21wb25lbnRzL0NvbW1lbnRUZXh0L0NvbW1lbnRUZXh0XCI7XHJcbmltcG9ydCB7IE1haW5XcmFwcGVyIH0gZnJvbSBcImNvbXBvbmVudHMvTGlzdFBvc3Qvc3R5bGVkXCI7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcImNvbXBvbmVudHMvUG9zdENhcmQvc3R5bGVkXCI7XHJcbmltcG9ydCB7IERlc2NyaXB0aW9uLCBSb3cgfSBmcm9tIFwiLi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5XcmFwcGVyPlxyXG4gICAgICA8VGl0bGU+e3Bvc3QudGl0bGV9PC9UaXRsZT5cclxuICAgICAgPERlc2NyaXB0aW9uPntwb3N0LmJvZHl9PC9EZXNjcmlwdGlvbj5cclxuICAgICAgPFJvdz5cclxuICAgICAgPFRpdGxlPkNvbW1lbnRzOjwvVGl0bGU+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT5jb25zb2xlLmxvZygnQWRkIENvbW1lbnRzJyl9PlxyXG4gICAgICAgIEFkZCBDb21tZW50XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAge3Bvc3QuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgPGRpdj57Y29tbWVudC5ib2R5fTwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPENvbW1lbnRUZXh0Lz5cclxuICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVN0YXRlIiwiU3R5bGVkRm9ybSIsIlRleHRGaWVsZCIsIkNvbW1lbnRUZXh0IiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVkIiwiZm9ybSIsInRleHRhcmVhIiwiTWFpbldyYXBwZXIiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUm93IiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9