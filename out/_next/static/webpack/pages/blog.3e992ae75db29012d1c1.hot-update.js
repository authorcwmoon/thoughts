webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/christian/thoughts/components/BlogPost.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import format from 'comma-number';\n\n\n\n\n\nvar BlogPost = function BlogPost(frontMatter) {\n  _s();\n\n  var title = frontMatter.title,\n      summary = frontMatter.summary;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var secondaryTextColor = {\n    light: 'gray.700',\n    dark: 'gray.400'\n  };\n\n  var slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/page-views?id=\".concat(slug), _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useSWR.data;\n\n  var views = data === null || data === void 0 ? void 0 : data.total;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"blog/\".concat(slug),\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    w: \"100%\",\n    _hover: {\n      textDecoration: 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mb: 8,\n    display: \"block\",\n    width: \"100%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    width: \"100%\",\n    align: \"flex-start\",\n    justifyContent: \"space-between\",\n    flexDirection: ['column', 'row'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    size: \"md\",\n    as: \"h3\",\n    mb: 2,\n    fontWeight: \"medium\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"gray.500\",\n    minWidth: \"300px\",\n    textAlign: ['left', 'right'],\n    mb: [4, 0],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"--\", Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"parseISO\"])(frontMatter.publishedAt), 'MMMM dd, yyyy'))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: secondaryTextColor[colorMode],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, summary))));\n};\n\n_s(BlogPost, \"bP6tT1v8EU/bU+nWF1mKKjSfigg=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"], swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qcz8zZWZmIl0sIm5hbWVzIjpbIkJsb2dQb3N0IiwiZnJvbnRNYXR0ZXIiLCJ0aXRsZSIsInN1bW1hcnkiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJzZWNvbmRhcnlUZXh0Q29sb3IiLCJsaWdodCIsImRhcmsiLCJzbHVnIiwiX19yZXNvdXJjZVBhdGgiLCJyZXBsYWNlIiwidXNlU1dSIiwiZmV0Y2hlciIsImRhdGEiLCJ2aWV3cyIsInRvdGFsIiwidGV4dERlY29yYXRpb24iLCJmb3JtYXQiLCJwYXJzZUlTTyIsInB1Ymxpc2hlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsV0FBRCxFQUFpQjtBQUFBOztBQUFBLE1BQ3hCQyxLQUR3QixHQUNMRCxXQURLLENBQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxPQURpQixHQUNMRixXQURLLENBQ2pCRSxPQURpQjs7QUFBQSxzQkFFVkMsb0VBQVksRUFGRjtBQUFBLE1BRXhCQyxTQUZ3QixpQkFFeEJBLFNBRndCOztBQUdoQyxNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsU0FBSyxFQUFFLFVBRGtCO0FBRXpCQyxRQUFJLEVBQUU7QUFGbUIsR0FBM0I7O0FBS0EsTUFBTUMsSUFBSSxHQUFHUixXQUFXLENBQUNTLGNBQVosQ0FDVkMsT0FEVSxDQUNGLE9BREUsRUFDTyxFQURQLEVBRVZBLE9BRlUsQ0FFRixNQUZFLEVBRU0sRUFGTixDQUFiOztBQVJnQyxnQkFZZkMsbURBQU0sOEJBQXVCSCxJQUF2QixHQUErQkksb0RBQS9CLENBWlM7QUFBQSxNQVl4QkMsSUFad0IsV0FZeEJBLElBWndCOztBQWFoQyxNQUFNQyxLQUFLLEdBQUdELElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFRSxLQUFwQjtBQUVBLFNBQ0UsTUFBQyxnREFBRDtBQUFVLFFBQUksaUJBQVVQLElBQVYsQ0FBZDtBQUFnQyxZQUFRLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sS0FBQyxFQUFDLE1BQVI7QUFBZSxVQUFNLEVBQUU7QUFBRVEsb0JBQWMsRUFBRTtBQUFsQixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBQyxNQURSO0FBRUUsU0FBSyxFQUFDLFlBRlI7QUFHRSxrQkFBYyxFQUFDLGVBSGpCO0FBSUUsaUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLENBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHVEQUFEO0FBQVMsUUFBSSxFQUFDLElBQWQ7QUFBbUIsTUFBRSxFQUFDLElBQXRCO0FBQTJCLE1BQUUsRUFBRSxDQUEvQjtBQUFrQyxjQUFVLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixLQURILENBTkYsRUFTRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxZQUFRLEVBQUMsT0FGWDtBQUdFLGFBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULENBSGI7QUFJRSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNS2dCLHVEQUFNLENBQUNDLHlEQUFRLENBQUNsQixXQUFXLENBQUNtQixXQUFiLENBQVQsRUFBb0MsZUFBcEMsQ0FOWCxDQVRGLENBREYsRUFvQkUsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRWQsa0JBQWtCLENBQUNELFNBQUQsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Q0YsT0FBN0MsQ0FwQkYsQ0FERixDQURGLENBREY7QUE0QkQsQ0EzQ0Q7O0dBQU1ILFE7VUFFa0JJLDRELEVBVUxRLDJDOzs7S0FaYlosUTtBQTZDU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dQb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuLy8gaW1wb3J0IGZvcm1hdCBmcm9tICdjb21tYS1udW1iZXInO1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlLCBIZWFkaW5nLCBUZXh0LCBGbGV4LCBCb3gsIExpbmsgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcic7XG5cbmNvbnN0IEJsb2dQb3N0ID0gKGZyb250TWF0dGVyKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHN1bW1hcnkgfSA9IGZyb250TWF0dGVyO1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gIGNvbnN0IHNlY29uZGFyeVRleHRDb2xvciA9IHtcbiAgICBsaWdodDogJ2dyYXkuNzAwJyxcbiAgICBkYXJrOiAnZ3JheS40MDAnXG4gIH07XG5cbiAgY29uc3Qgc2x1ZyA9IGZyb250TWF0dGVyLl9fcmVzb3VyY2VQYXRoXG4gICAgLnJlcGxhY2UoJ2Jsb2cvJywgJycpXG4gICAgLnJlcGxhY2UoJy5tZHgnLCAnJyk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoYC9hcGkvcGFnZS12aWV3cz9pZD0ke3NsdWd9YCwgZmV0Y2hlcik7XG4gIGNvbnN0IHZpZXdzID0gZGF0YT8udG90YWw7XG5cbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17YGJsb2cvJHtzbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgPExpbmsgdz1cIjEwMCVcIiBfaG92ZXI9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgPEJveCBtYj17OH0gZGlzcGxheT1cImJsb2NrXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBhbGlnbj1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e1snY29sdW1uJywgJ3JvdyddfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiIGFzPVwiaDNcIiBtYj17Mn0gZm9udFdlaWdodD1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBjb2xvcj1cImdyYXkuNTAwXCJcbiAgICAgICAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj17WydsZWZ0JywgJ3JpZ2h0J119XG4gICAgICAgICAgICAgIG1iPXtbNCwgMF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIC0te2Zvcm1hdChwYXJzZUlTTyhmcm9udE1hdHRlci5wdWJsaXNoZWRBdCksICdNTU1NIGRkLCB5eXl5Jyl9XG4gICAgICAgICAgICAgIHsvKiB7YCR7dmlld3MgPyBmb3JtYXQodmlld3MpIDogJ+KAk+KAk+KAkyd9IHZpZXdzYH0gKi99XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPXtzZWNvbmRhcnlUZXh0Q29sb3JbY29sb3JNb2RlXX0+e3N1bW1hcnl9PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTGluaz5cbiAgICA8L05leHRMaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlogPost.js\n");

/***/ })

})