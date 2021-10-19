"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./components/Button/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\Button\\Button.tsx",
    _this = undefined;




var Button = function Button(_ref) {
  var bgColor = _ref.bgColor,
      color = _ref.color,
      children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_0__.StyledButton, {
    $bgColor: bgColor,
    $color: color,
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

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

/***/ "./components/Button/styled.ts":
/*!*************************************!*\
  !*** ./components/Button/styled.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-v1e4p2-0"
})(["font-family:'Open Sans',sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:160%;text-align:center;letter-spacing:0.05em;cursor:pointer;justify-content:center;align-items:center;text-transform:uppercase;padding:12px 30px;color:", ";background-color:", ";"], function (_ref) {
  var $color = _ref.$color;
  return $color || "white";
}, function (_ref2) {
  var $bgColor = _ref2.$bgColor;
  return $bgColor || "green";
});

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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_2__.Title, {
      children: "Comments:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), post.comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: comment.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RJZF0uNjYwOWY2NzRlZjdkM2Y1Njk0MGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyQztBQUFBLE1BQXhDQyxPQUF3QyxRQUF4Q0EsT0FBd0M7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN4RCxzQkFDRSw4REFBQyxpREFBRDtBQUFjLFlBQVEsRUFBRUgsT0FBeEI7QUFBaUMsVUFBTSxFQUFFQyxLQUF6QztBQUFnRCxXQUFPLEVBQUVFLE9BQXpEO0FBQUEsY0FDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNSDtBQU9OLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDTyxJQUFNRCxZQUFZLEdBQUdNLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDJSQWdCZDtBQUFBLE1BQUdFLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWdCQSxNQUFNLElBQUksT0FBMUI7QUFBQSxDQWhCYyxFQWlCSDtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFRLElBQUksT0FBOUI7QUFBQSxDQWpCRyxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRSw4REFBQyxtRUFBRDtBQUFBLDRCQUNFLDhEQUFDLDZEQUFEO0FBQUEsZ0JBQVFBLElBQUksQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxnREFBRDtBQUFBLGdCQUFjRCxJQUFJLENBQUNFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFLR0YsSUFBSSxDQUFDRyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLDBCQUNqQjtBQUFBLGtCQUFNQSxPQUFPLENBQUNIO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURpQjtBQUFBLEtBQWxCLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpEOztLQUFNSDtBQWFOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlZC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0eWxlZEJ1dHRvbiB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgYmdDb2xvciwgY29sb3IsIGNoaWxkcmVuLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJ1dHRvbiAkYmdDb2xvcj17YmdDb2xvcn0gJGNvbG9yPXtjb2xvcn0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b248e1xyXG4gICRiZ0NvbG9yOiBzdHJpbmc7IFxyXG4gICRjb2xvcjogc3RyaW5nO1xyXG59PmBcclxuZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubGluZS1oZWlnaHQ6IDE2MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIGNvbG9yOiAkeyh7ICRjb2xvciB9KSA9PiAkY29sb3IgfHwgXCJ3aGl0ZVwifTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7ICRiZ0NvbG9yIH0pID0+ICRiZ0NvbG9yIHx8IFwiZ3JlZW5cIn07XHJcbmA7XHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBNYWluV3JhcHBlciB9IGZyb20gXCJjb21wb25lbnRzL0xpc3RQb3N0L3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gXCJjb21wb25lbnRzL1Bvc3RDYXJkL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICA8RGVzY3JpcHRpb24+e3Bvc3QuYm9keX08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICA8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuICAgICAgPEJ1dHRvbj48L0J1dHRvbj5cclxuICAgICAge3Bvc3QuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXHJcbiAgICAgICAgPGRpdj57Y29tbWVudC5ib2R5fTwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsImJnQ29sb3IiLCJjb2xvciIsImNoaWxkcmVuIiwib25DbGljayIsInN0eWxlZCIsImJ1dHRvbiIsIiRjb2xvciIsIiRiZ0NvbG9yIiwiTWFpbldyYXBwZXIiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiXSwic291cmNlUm9vdCI6IiJ9