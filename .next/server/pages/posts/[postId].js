"use strict";
(() => {
var exports = {};
exports.id = "pages/posts/[postId]";
exports.ids = ["pages/posts/[postId]"];
exports.modules = {

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./components/Button/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\Button\\Button.tsx";



const Button = ({
  bgColor,
  color,
  children,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_0__.StyledButton, {
    $bgColor: bgColor,
    $color: color,
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/Button/styled.ts":
/*!*************************************!*\
  !*** ./components/Button/styled.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": () => (/* binding */ StyledButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-v1e4p2-0"
})(["font-family:'Open Sans',sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:160%;text-align:center;letter-spacing:0.05em;cursor:pointer;justify-content:center;align-items:center;text-transform:uppercase;padding:12px 30px;color:", ";background-color:", ";"], ({
  $color
}) => $color || "white", ({
  $bgColor
}) => $bgColor || "green");

/***/ }),

/***/ "./components/CommentText/CommentText.tsx":
/*!************************************************!*\
  !*** ./components/CommentText/CommentText.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/CommentText/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\CommentText\\CommentText.tsx";





const CommentText = () => {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handleChange = e => {
    const target = e.target.value;
    setText(target);
  };

  const handleSubmit = () => {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
      type: "submit",
      onClick: handleSubmit,
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentText);

/***/ }),

/***/ "./components/CommentText/styled.ts":
/*!******************************************!*\
  !*** ./components/CommentText/styled.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledForm": () => (/* binding */ StyledForm),
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "styled__StyledForm",
  componentId: "sc-1nipzyv-0"
})(["width:100%;"]);
const TextField = styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea.withConfig({
  displayName: "styled__TextField",
  componentId: "sc-1nipzyv-1"
})(["width:50%;resize:none;height:200px;"]);

/***/ }),

/***/ "./components/ListPost/styled.ts":
/*!***************************************!*\
  !*** ./components/ListPost/styled.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainWrapper": () => (/* binding */ MainWrapper),
/* harmony export */   "TitlePage": () => (/* binding */ TitlePage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__MainWrapper",
  componentId: "sc-uuinbp-0"
})(["padding:10px;"]);
const TitlePage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "styled__TitlePage",
  componentId: "sc-uuinbp-1"
})(["font-size:30px;font-weight:800;"]);

/***/ }),

/***/ "./components/PostCard/styled.ts":
/*!***************************************!*\
  !*** ./components/PostCard/styled.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledWrapper": () => (/* binding */ StyledWrapper),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__StyledWrapper",
  componentId: "sc-1ok5lhv-0"
})(["width:100%;min-width:250px;padding:6px;&:hover{box-shadow:1px 1px 8px 6px rgba(34,60,80,0.2);}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "styled__Title",
  componentId: "sc-1ok5lhv-1"
})(["font-size:20px;font-weight:600;"]);
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styled__Body",
  componentId: "sc-1ok5lhv-2"
})([""]);

/***/ }),

/***/ "./components/Post/Post.tsx":
/*!**********************************!*\
  !*** ./components/Post/Post.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_CommentText_CommentText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/CommentText/CommentText */ "./components/CommentText/CommentText.tsx");
/* harmony import */ var components_ListPost_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ListPost/styled */ "./components/ListPost/styled.ts");
/* harmony import */ var components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PostCard/styled */ "./components/PostCard/styled.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./components/Post/styled.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\components\\Post\\Post.tsx";







const Post = ({
  post
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_ListPost_styled__WEBPACK_IMPORTED_MODULE_2__.MainWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__.Title, {
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Description, {
      children: post.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_4__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_PostCard_styled__WEBPACK_IMPORTED_MODULE_3__.Title, {
        children: "Comments:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: () => console.log('Add Comments'),
        children: "Add Comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), post.comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: comment.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(components_CommentText_CommentText__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./components/Post/styled.ts":
/*!***********************************!*\
  !*** ./components/Post/styled.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styled__Description",
  componentId: "sc-n53ij2-0"
})(["font-size:14px;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Row",
  componentId: "sc-n53ij2-1"
})(["display:flex;justify-content:space-between;"]);

/***/ }),

/***/ "./pages/posts/[postId].tsx":
/*!**********************************!*\
  !*** ./pages/posts/[postId].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Post/Post */ "./components/Post/Post.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\projects\\nextjs-posts-comments\\posts-and-comments-nextjs\\pages\\posts\\[postId].tsx";





const PostPage = ({
  post
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    postId: IdPost
  } = router.query;
  console.log('postPost', post);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_Post_Post__WEBPACK_IMPORTED_MODULE_2__.default, {
    post: post
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};

async function getStaticPaths() {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://simple-blog-api.crew.red/posts"); //@ts-ignore

  const posts = await res.data;
  const paths = posts.map(post => ({
    params: {
      postId: `${post.id}`
    }
  }));
  return {
    paths,
    fallback: false
  };
}
const getStaticProps = async ({
  params
}) => {
  console.log('params', params);
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`);
  const post = await res.data;
  return {
    props: {
      post
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postId].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FORDs7QUFRTyxlQUFlYSxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLEdBQUcsR0FBRyxNQUFNUixnREFBQSxDQUFVLHdDQUFWLENBQWxCLENBRHFDLENBRXJDOztBQUNBLFFBQU1VLEtBQWMsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQWpDO0FBRUEsUUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNaLEdBQU4sQ0FBV0osSUFBRCxLQUFXO0FBQ2pDbUIsSUFBQUEsTUFBTSxFQUFFO0FBQUVULE1BQUFBLE1BQU0sRUFBRyxHQUFFVixJQUFJLENBQUNvQixFQUFHO0FBQXJCO0FBRHlCLEdBQVgsQ0FBVixDQUFkO0FBSUEsU0FBTztBQUFFRixJQUFBQSxLQUFGO0FBQVNHLElBQUFBLFFBQVEsRUFBRTtBQUFuQixHQUFQO0FBQ0Q7QUFFTSxNQUFNQyxjQUFjLEdBQUcsT0FBTztBQUFDSCxFQUFBQTtBQUFELENBQVAsS0FBb0I7QUFDaERuQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCa0MsTUFBdEI7QUFFQSxRQUFNTCxHQUFHLEdBQUcsTUFBTVIsZ0RBQUEsQ0FDZiwwQ0FBeUNhLE1BQU0sQ0FBQ1QsTUFBTyxrQkFEeEMsQ0FBbEI7QUFHQSxRQUFNVixJQUFJLEdBQUcsTUFBTWMsR0FBRyxDQUFDRyxJQUF2QjtBQUNBLFNBQU87QUFDTE0sSUFBQUEsS0FBSyxFQUFFO0FBQ0x2QixNQUFBQTtBQURLO0FBREYsR0FBUDtBQUtELENBWk07QUFhUCxpRUFBZVEsUUFBZjs7Ozs7Ozs7OztBQ3JDQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9zdHMtYW5kLWNvbW1lbnRzLW5leHRqcy8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcG9zdHMtYW5kLWNvbW1lbnRzLW5leHRqcy8uL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlZC50cyIsIndlYnBhY2s6Ly9wb3N0cy1hbmQtY29tbWVudHMtbmV4dGpzLy4vY29tcG9uZW50cy9Db21tZW50VGV4dC9Db21tZW50VGV4dC50c3giLCJ3ZWJwYWNrOi8vcG9zdHMtYW5kLWNvbW1lbnRzLW5leHRqcy8uL2NvbXBvbmVudHMvQ29tbWVudFRleHQvc3R5bGVkLnRzIiwid2VicGFjazovL3Bvc3RzLWFuZC1jb21tZW50cy1uZXh0anMvLi9jb21wb25lbnRzL0xpc3RQb3N0L3N0eWxlZC50cyIsIndlYnBhY2s6Ly9wb3N0cy1hbmQtY29tbWVudHMtbmV4dGpzLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vcG9zdHMtYW5kLWNvbW1lbnRzLW5leHRqcy8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnRzeCIsIndlYnBhY2s6Ly9wb3N0cy1hbmQtY29tbWVudHMtbmV4dGpzLy4vY29tcG9uZW50cy9Qb3N0L3N0eWxlZC50cyIsIndlYnBhY2s6Ly9wb3N0cy1hbmQtY29tbWVudHMtbmV4dGpzLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0udHN4Iiwid2VicGFjazovL3Bvc3RzLWFuZC1jb21tZW50cy1uZXh0anMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Bvc3RzLWFuZC1jb21tZW50cy1uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Bvc3RzLWFuZC1jb21tZW50cy1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Bvc3RzLWFuZC1jb21tZW50cy1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3N0cy1hbmQtY29tbWVudHMtbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZWRCdXR0b24gfSBmcm9tIFwiLi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUJ1dHRvbiB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5jb25zdCBCdXR0b246IEZDPElCdXR0b24+ID0gKHsgYmdDb2xvciwgY29sb3IsIGNoaWxkcmVuLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJ1dHRvbiAkYmdDb2xvcj17YmdDb2xvcn0gJGNvbG9yPXtjb2xvcn0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b248e1xyXG4gICRiZ0NvbG9yOiBzdHJpbmc7IFxyXG4gICRjb2xvcjogc3RyaW5nO1xyXG59PmBcclxuZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubGluZS1oZWlnaHQ6IDE2MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIGNvbG9yOiAkeyh7ICRjb2xvciB9KSA9PiAkY29sb3IgfHwgXCJ3aGl0ZVwifTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7ICRiZ0NvbG9yIH0pID0+ICRiZ0NvbG9yIHx8IFwiZ3JlZW5cIn07XHJcbmA7XHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU3R5bGVkRm9ybSwgVGV4dEZpZWxkIH0gZnJvbSBcIi4vc3R5bGVkXCJcclxuXHJcbmNvbnN0IENvbW1lbnRUZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRUZXh0KHRhcmdldCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwi0L3QsNC00ZbRgdC70LDQu9C4XCIsIHRleHQpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRm9ybSA+XHJcbiAgICAgIDxUZXh0RmllbGQgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5TZW5kPC9CdXR0b24+XHJcbiAgICA8L1N0eWxlZEZvcm0+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRUZXh0IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUZXh0RmllbGQgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDUwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVQYWdlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG5gOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDZweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5wYGA7XHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29tbWVudFRleHQgZnJvbSBcImNvbXBvbmVudHMvQ29tbWVudFRleHQvQ29tbWVudFRleHRcIjtcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIgfSBmcm9tIFwiY29tcG9uZW50cy9MaXN0UG9zdC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiY29tcG9uZW50cy9Qb3N0Q2FyZC9zdHlsZWRcIjtcclxuaW1wb3J0IHsgRGVzY3JpcHRpb24sIFJvdyB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxyXG4gICAgICA8RGVzY3JpcHRpb24+e3Bvc3QuYm9keX08L0Rlc2NyaXB0aW9uPlxyXG4gICAgICA8Um93PlxyXG4gICAgICA8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PmNvbnNvbGUubG9nKCdBZGQgQ29tbWVudHMnKX0+XHJcbiAgICAgICAgQWRkIENvbW1lbnRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICB7cG9zdC5jb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICA8ZGl2Pntjb21tZW50LmJvZHl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8Q29tbWVudFRleHQvPlxyXG4gICAgPC9NYWluV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcclxuZm9udC1zaXplOiAxNHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcImNvbXBvbmVudHMvUG9zdC9Qb3N0XCI7XHJcblxyXG5jb25zdCBQb3N0UGFnZSA9ICh7cG9zdH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHBvc3RJZDogSWRQb3N0IH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coJ3Bvc3RQb3N0JywgcG9zdCk7XHJcbiAgXHJcbiAgcmV0dXJuIDxQb3N0IHBvc3Q9e3Bvc3R9Lz47XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNcIik7XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3QgcG9zdHM6IElQb3N0W10gPSBhd2FpdCByZXMuZGF0YTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgcG9zdElkOiBgJHtwb3N0LmlkfWAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhcmFtcyk7XHJcbiAgXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLyR7cGFyYW1zLnBvc3RJZH0/X2VtYmVkPWNvbW1lbnRzYFxyXG4gICk7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsImJnQ29sb3IiLCJjb2xvciIsImNoaWxkcmVuIiwib25DbGljayIsInN0eWxlZCIsImJ1dHRvbiIsIiRjb2xvciIsIiRiZ0NvbG9yIiwidXNlU3RhdGUiLCJTdHlsZWRGb3JtIiwiVGV4dEZpZWxkIiwiQ29tbWVudFRleHQiLCJ0ZXh0Iiwic2V0VGV4dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwidGV4dGFyZWEiLCJNYWluV3JhcHBlciIsImRpdiIsIlRpdGxlUGFnZSIsImgxIiwiU3R5bGVkV3JhcHBlciIsIlRpdGxlIiwiaDIiLCJCb2R5IiwicCIsIkRlc2NyaXB0aW9uIiwiUm93IiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJheGlvcyIsInVzZVJvdXRlciIsIlBvc3RQYWdlIiwicm91dGVyIiwicG9zdElkIiwiSWRQb3N0IiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImdldCIsInBvc3RzIiwiZGF0YSIsInBhdGhzIiwicGFyYW1zIiwiaWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9