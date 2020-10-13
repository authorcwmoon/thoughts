webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var comma_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comma-number */ \"./node_modules/comma-number/lib/index.js\");\n/* harmony import */ var comma_number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(comma_number__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/christian/thoughts/components/BlogPost.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar BlogPost = function BlogPost(frontMatter) {\n  _s();\n\n  var title = frontMatter.title,\n      summary = frontMatter.summary;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var secondaryTextColor = {\n    light: 'gray.700',\n    dark: 'gray.400'\n  };\n\n  var slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/page-views?id=\".concat(slug), _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useSWR.data;\n\n  var views = data === null || data === void 0 ? void 0 : data.total;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"blog/\".concat(slug),\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    w: \"100%\",\n    _hover: {\n      textDecoration: 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    mb: 8,\n    display: \"block\",\n    width: \"100%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    width: \"100%\",\n    align: \"flex-start\",\n    justifyContent: \"space-between\",\n    flexDirection: ['column', 'row'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    size: \"md\",\n    as: \"h3\",\n    mb: 2,\n    fontWeight: \"medium\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    color: \"gray.500\",\n    minWidth: \"105px\",\n    textAlign: ['left', 'right'],\n    mb: [4, 0],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, comma_number__WEBPACK_IMPORTED_MODULE_3___default()(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy'))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    color: secondaryTextColor[colorMode],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, summary))));\n};\n\n_s(BlogPost, \"bP6tT1v8EU/bU+nWF1mKKjSfigg=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"useColorMode\"], swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qcz8zZWZmIl0sIm5hbWVzIjpbIkJsb2dQb3N0IiwiZnJvbnRNYXR0ZXIiLCJ0aXRsZSIsInN1bW1hcnkiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJzZWNvbmRhcnlUZXh0Q29sb3IiLCJsaWdodCIsImRhcmsiLCJzbHVnIiwiX19yZXNvdXJjZVBhdGgiLCJyZXBsYWNlIiwidXNlU1dSIiwiZmV0Y2hlciIsImRhdGEiLCJ2aWV3cyIsInRvdGFsIiwidGV4dERlY29yYXRpb24iLCJmb3JtYXQiLCJwYXJzZUlTTyIsInB1Ymxpc2hlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsV0FBRCxFQUFpQjtBQUFBOztBQUFBLE1BQ3hCQyxLQUR3QixHQUNMRCxXQURLLENBQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxPQURpQixHQUNMRixXQURLLENBQ2pCRSxPQURpQjs7QUFBQSxzQkFFVkMsb0VBQVksRUFGRjtBQUFBLE1BRXhCQyxTQUZ3QixpQkFFeEJBLFNBRndCOztBQUdoQyxNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsU0FBSyxFQUFFLFVBRGtCO0FBRXpCQyxRQUFJLEVBQUU7QUFGbUIsR0FBM0I7O0FBS0EsTUFBTUMsSUFBSSxHQUFHUixXQUFXLENBQUNTLGNBQVosQ0FDVkMsT0FEVSxDQUNGLE9BREUsRUFDTyxFQURQLEVBRVZBLE9BRlUsQ0FFRixNQUZFLEVBRU0sRUFGTixDQUFiOztBQVJnQyxnQkFZZkMsbURBQU0sOEJBQXVCSCxJQUF2QixHQUErQkksb0RBQS9CLENBWlM7QUFBQSxNQVl4QkMsSUFad0IsV0FZeEJBLElBWndCOztBQWFoQyxNQUFNQyxLQUFLLEdBQUdELElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFRSxLQUFwQjtBQUVBLFNBQ0UsTUFBQyxnREFBRDtBQUFVLFFBQUksaUJBQVVQLElBQVYsQ0FBZDtBQUFnQyxZQUFRLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sS0FBQyxFQUFDLE1BQVI7QUFBZSxVQUFNLEVBQUU7QUFBRVEsb0JBQWMsRUFBRTtBQUFsQixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFNBQUssRUFBQyxNQURSO0FBRUUsU0FBSyxFQUFDLFlBRlI7QUFHRSxrQkFBYyxFQUFDLGVBSGpCO0FBSUUsaUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLENBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHVEQUFEO0FBQVMsUUFBSSxFQUFDLElBQWQ7QUFBbUIsTUFBRSxFQUFDLElBQXRCO0FBQTJCLE1BQUUsRUFBRSxDQUEvQjtBQUFrQyxjQUFVLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixLQURILENBTkYsRUFTRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxZQUFRLEVBQUMsT0FGWDtBQUdFLGFBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULENBSGI7QUFJRSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRWdCLG1EQUFNLENBQUNDLFFBQVEsQ0FBQ2xCLFdBQVcsQ0FBQ21CLFdBQWIsQ0FBVCxFQUFvQyxlQUFwQyxDQUxSLENBVEYsQ0FERixFQW1CRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFZCxrQkFBa0IsQ0FBQ0QsU0FBRCxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDRixPQUE3QyxDQW5CRixDQURGLENBREYsQ0FERjtBQTJCRCxDQTFDRDs7R0FBTUgsUTtVQUVrQkksNEQsRUFVTFEsMkM7OztLQVpiWixRO0FBNENTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmxvZ1Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2NvbW1hLW51bWJlcic7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGUsIEhlYWRpbmcsIFRleHQsIEZsZXgsIEJveCwgTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2xpYi9mZXRjaGVyJztcblxuY29uc3QgQmxvZ1Bvc3QgPSAoZnJvbnRNYXR0ZXIpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgc3VtbWFyeSB9ID0gZnJvbnRNYXR0ZXI7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3Qgc2Vjb25kYXJ5VGV4dENvbG9yID0ge1xuICAgIGxpZ2h0OiAnZ3JheS43MDAnLFxuICAgIGRhcms6ICdncmF5LjQwMCdcbiAgfTtcblxuICBjb25zdCBzbHVnID0gZnJvbnRNYXR0ZXIuX19yZXNvdXJjZVBhdGhcbiAgICAucmVwbGFjZSgnYmxvZy8nLCAnJylcbiAgICAucmVwbGFjZSgnLm1keCcsICcnKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihgL2FwaS9wYWdlLXZpZXdzP2lkPSR7c2x1Z31gLCBmZXRjaGVyKTtcbiAgY29uc3Qgdmlld3MgPSBkYXRhPy50b3RhbDtcblxuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtgYmxvZy8ke3NsdWd9YH0gcGFzc0hyZWY+XG4gICAgICA8TGluayB3PVwiMTAwJVwiIF9ob3Zlcj17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICA8Qm94IG1iPXs4fSBkaXNwbGF5PVwiYmxvY2tcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGFsaWduPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17Wydjb2x1bW4nLCAncm93J119XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgYXM9XCJoM1wiIG1iPXsyfSBmb250V2VpZ2h0PVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgICAgICBtaW5XaWR0aD1cIjEwNXB4XCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPXtbJ2xlZnQnLCAncmlnaHQnXX1cbiAgICAgICAgICAgICAgbWI9e1s0LCAwXX1cbiAgICAgICAgICAgID57Zm9ybWF0KHBhcnNlSVNPKGZyb250TWF0dGVyLnB1Ymxpc2hlZEF0KSwgJ01NTU0gZGQsIHl5eXknKX1cbiAgICAgICAgICAgICAgey8qIHtgJHt2aWV3cyA/IGZvcm1hdCh2aWV3cykgOiAn4oCT4oCT4oCTJ30gdmlld3NgfSAqL31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPFRleHQgY29sb3I9e3NlY29uZGFyeVRleHRDb2xvcltjb2xvck1vZGVdfT57c3VtbWFyeX08L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogPost.js\n");

/***/ })

})