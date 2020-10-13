webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/christian/thoughts/components/BlogPost.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import format from 'comma-number';\n\n\n\n\n\nvar BlogPost = function BlogPost(frontMatter) {\n  _s();\n\n  var title = frontMatter.title,\n      summary = frontMatter.summary;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var secondaryTextColor = {\n    light: 'gray.700',\n    dark: 'gray.400'\n  };\n\n  var slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/page-views?id=\".concat(slug), _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      data = _useSWR.data;\n\n  var views = data === null || data === void 0 ? void 0 : data.total;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"blog/\".concat(slug),\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    w: \"100%\",\n    _hover: {\n      textDecoration: 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    mb: 8,\n    display: \"block\",\n    width: \"100%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    width: \"100%\",\n    align: \"flex-start\",\n    justifyContent: \"space-between\",\n    flexDirection: ['column', 'row'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    size: \"md\",\n    as: \"h3\",\n    mb: 2,\n    fontWeight: \"medium\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"gray.500\",\n    minWidth: \"105px\",\n    textAlign: ['left', 'right'],\n    mb: [4, 0],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"--\", Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"parseISO\"])(frontMatter.publishedAt), 'MMMM dd, yyyy'))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    width: \"100%\",\n    align: \"flex-start\",\n    justifyContent: \"space-between\",\n    flexDirection: ['column', 'row'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \">\", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: \"gray.500\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, frontMatter.by, \" \", 'C.W. Moon ', \" \"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    mt: 2,\n    mb: 2,\n    color: secondaryTextColor[colorMode],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, frontMatter.readingTime.text)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: secondaryTextColor[colorMode],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, summary))));\n};\n\n_s(BlogPost, \"bP6tT1v8EU/bU+nWF1mKKjSfigg=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"], swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qcz8zZWZmIl0sIm5hbWVzIjpbIkJsb2dQb3N0IiwiZnJvbnRNYXR0ZXIiLCJ0aXRsZSIsInN1bW1hcnkiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJzZWNvbmRhcnlUZXh0Q29sb3IiLCJsaWdodCIsImRhcmsiLCJzbHVnIiwiX19yZXNvdXJjZVBhdGgiLCJyZXBsYWNlIiwidXNlU1dSIiwiZmV0Y2hlciIsImRhdGEiLCJ2aWV3cyIsInRvdGFsIiwidGV4dERlY29yYXRpb24iLCJmb3JtYXQiLCJwYXJzZUlTTyIsInB1Ymxpc2hlZEF0IiwiYnkiLCJyZWFkaW5nVGltZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxXQUFELEVBQWlCO0FBQUE7O0FBQUEsTUFDeEJDLEtBRHdCLEdBQ0xELFdBREssQ0FDeEJDLEtBRHdCO0FBQUEsTUFDakJDLE9BRGlCLEdBQ0xGLFdBREssQ0FDakJFLE9BRGlCOztBQUFBLHNCQUVWQyxvRUFBWSxFQUZGO0FBQUEsTUFFeEJDLFNBRndCLGlCQUV4QkEsU0FGd0I7O0FBR2hDLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCQyxTQUFLLEVBQUUsVUFEa0I7QUFFekJDLFFBQUksRUFBRTtBQUZtQixHQUEzQjs7QUFLQSxNQUFNQyxJQUFJLEdBQUdSLFdBQVcsQ0FBQ1MsY0FBWixDQUNWQyxPQURVLENBQ0YsT0FERSxFQUNPLEVBRFAsRUFFVkEsT0FGVSxDQUVGLE1BRkUsRUFFTSxFQUZOLENBQWI7O0FBUmdDLGdCQVlmQyxtREFBTSw4QkFBdUJILElBQXZCLEdBQStCSSxvREFBL0IsQ0FaUztBQUFBLE1BWXhCQyxJQVp3QixXQVl4QkEsSUFad0I7O0FBYWhDLE1BQU1DLEtBQUssR0FBR0QsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVFLEtBQXBCO0FBRUEsU0FDRSxNQUFDLGdEQUFEO0FBQVUsUUFBSSxpQkFBVVAsSUFBVixDQUFkO0FBQWdDLFlBQVEsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxLQUFDLEVBQUMsTUFBUjtBQUFlLFVBQU0sRUFBRTtBQUFFUSxvQkFBYyxFQUFFO0FBQWxCLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFDLE1BRFI7QUFFRSxTQUFLLEVBQUMsWUFGUjtBQUdFLGtCQUFjLEVBQUMsZUFIakI7QUFJRSxpQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsQ0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsdURBQUQ7QUFBUyxRQUFJLEVBQUMsSUFBZDtBQUFtQixNQUFFLEVBQUMsSUFBdEI7QUFBMkIsTUFBRSxFQUFFLENBQS9CO0FBQWtDLGNBQVUsRUFBQyxRQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dmLEtBREgsQ0FORixFQVNFLE1BQUMsb0RBQUQ7QUFDRSxTQUFLLEVBQUMsVUFEUjtBQUVFLFlBQVEsRUFBQyxPQUZYO0FBR0UsYUFBUyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FIYjtBQUlFLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU1LZ0IsdURBQU0sQ0FBQ0MseURBQVEsQ0FBQ2xCLFdBQVcsQ0FBQ21CLFdBQWIsQ0FBVCxFQUFvQyxlQUFwQyxDQU5YLENBVEYsQ0FERixFQW9CRSxNQUFDLG9EQUFEO0FBQ0MsU0FBSyxFQUFDLE1BRFA7QUFFQyxTQUFLLEVBQUMsWUFGUDtBQUdDLGtCQUFjLEVBQUMsZUFIaEI7QUFJQyxpQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVgsQ0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1BLE1BQUMsb0RBQUQ7QUFBTyxTQUFLLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCbkIsV0FBVyxDQUFDb0IsRUFBckMsT0FBMEMsWUFBMUMsTUFOQSxFQU9BLE1BQUMsb0RBQUQ7QUFBTSxNQUFFLEVBQUUsQ0FBVjtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFvQixTQUFLLEVBQUVmLGtCQUFrQixDQUFDRCxTQUFELENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkRKLFdBQVcsQ0FBQ3FCLFdBQVosQ0FBd0JDLElBQW5GLENBUEEsQ0FwQkYsRUE2QkUsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRWpCLGtCQUFrQixDQUFDRCxTQUFELENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNGLE9BQTdDLENBN0JGLENBREYsQ0FERixDQURGO0FBcUNELENBcEREOztHQUFNSCxRO1VBRWtCSSw0RCxFQVVMUSwyQzs7O0tBWmJaLFE7QUFzRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbG9nUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbi8vIGltcG9ydCBmb3JtYXQgZnJvbSAnY29tbWEtbnVtYmVyJztcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSwgSGVhZGluZywgVGV4dCwgRmxleCwgQm94LCBMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cblxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vbGliL2ZldGNoZXInO1xuXG5jb25zdCBCbG9nUG9zdCA9IChmcm9udE1hdHRlcikgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBzdW1tYXJ5IH0gPSBmcm9udE1hdHRlcjtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBzZWNvbmRhcnlUZXh0Q29sb3IgPSB7XG4gICAgbGlnaHQ6ICdncmF5LjcwMCcsXG4gICAgZGFyazogJ2dyYXkuNDAwJ1xuICB9O1xuXG4gIGNvbnN0IHNsdWcgPSBmcm9udE1hdHRlci5fX3Jlc291cmNlUGF0aFxuICAgIC5yZXBsYWNlKCdibG9nLycsICcnKVxuICAgIC5yZXBsYWNlKCcubWR4JywgJycpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGAvYXBpL3BhZ2Utdmlld3M/aWQ9JHtzbHVnfWAsIGZldGNoZXIpO1xuICBjb25zdCB2aWV3cyA9IGRhdGE/LnRvdGFsO1xuXG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e2BibG9nLyR7c2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgIDxMaW5rIHc9XCIxMDAlXCIgX2hvdmVyPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgIDxCb3ggbWI9ezh9IGRpc3BsYXk9XCJibG9ja1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgYWxpZ249XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIiBhcz1cImgzXCIgbWI9ezJ9IGZvbnRXZWlnaHQ9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXG4gICAgICAgICAgICAgIG1pbldpZHRoPVwiMTA1cHhcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249e1snbGVmdCcsICdyaWdodCddfVxuICAgICAgICAgICAgICBtYj17WzQsIDBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAtLXtmb3JtYXQocGFyc2VJU08oZnJvbnRNYXR0ZXIucHVibGlzaGVkQXQpLCAnTU1NTSBkZCwgeXl5eScpfVxuICAgICAgICAgICAgICB7Lyoge2Ake3ZpZXdzID8gZm9ybWF0KHZpZXdzKSA6ICfigJPigJPigJMnfSB2aWV3c2B9ICovfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICBhbGlnbj1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX1cbiAgICAgICAgID4+XG4gICAgICAgICAgPFRleHQgIGNvbG9yPVwiZ3JheS41MDBcIj57ZnJvbnRNYXR0ZXIuYnl9IHsnQy5XLiBNb29uICd9IDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBtdD17Mn0gbWI9ezJ9IGNvbG9yPXtzZWNvbmRhcnlUZXh0Q29sb3JbY29sb3JNb2RlXX0+e2Zyb250TWF0dGVyLnJlYWRpbmdUaW1lLnRleHR9PC9UZXh0PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8VGV4dCBjb2xvcj17c2Vjb25kYXJ5VGV4dENvbG9yW2NvbG9yTW9kZV19PntzdW1tYXJ5fTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0xpbms+XG4gICAgPC9OZXh0TGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlogPost.js\n");

/***/ })

})