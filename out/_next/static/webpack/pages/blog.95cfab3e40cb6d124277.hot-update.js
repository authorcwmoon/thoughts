webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ \"./components/Container.js\");\n/* harmony import */ var _components_BlogPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogPost */ \"./components/BlogPost.js\");\n/* harmony import */ var _Users_christian_thoughts_mdx_data_9d369386cc160395f03a9c4f52058956_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.mdx-data/9d369386cc160395f03a9c4f52058956.json */ \"./.mdx-data/9d369386cc160395f03a9c4f52058956.json\");\nvar _Users_christian_thoughts_mdx_data_9d369386cc160395f03a9c4f52058956_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./.mdx-data/9d369386cc160395f03a9c4f52058956.json */ \"./.mdx-data/9d369386cc160395f03a9c4f52058956.json\", 1);\n/* harmony import */ var _Users_christian_thoughts_mdx_data_5de68e6bcdac6c5a2fa80370187f47ac_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./.mdx-data/5de68e6bcdac6c5a2fa80370187f47ac.json */ \"./.mdx-data/5de68e6bcdac6c5a2fa80370187f47ac.json\");\nvar _Users_christian_thoughts_mdx_data_5de68e6bcdac6c5a2fa80370187f47ac_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./.mdx-data/5de68e6bcdac6c5a2fa80370187f47ac.json */ \"./.mdx-data/5de68e6bcdac6c5a2fa80370187f47ac.json\", 1);\n/* harmony import */ var _Users_christian_thoughts_mdx_data_da497eddcedc9570facedf20ad7b4845_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./.mdx-data/da497eddcedc9570facedf20ad7b4845.json */ \"./.mdx-data/da497eddcedc9570facedf20ad7b4845.json\");\nvar _Users_christian_thoughts_mdx_data_da497eddcedc9570facedf20ad7b4845_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./.mdx-data/da497eddcedc9570facedf20ad7b4845.json */ \"./.mdx-data/da497eddcedc9570facedf20ad7b4845.json\", 1);\n/* harmony import */ var _Users_christian_thoughts_mdx_data_f18a8d7df703c61e18eddfae9b18f650_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.mdx-data/f18a8d7df703c61e18eddfae9b18f650.json */ \"./.mdx-data/f18a8d7df703c61e18eddfae9b18f650.json\");\nvar _Users_christian_thoughts_mdx_data_f18a8d7df703c61e18eddfae9b18f650_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./.mdx-data/f18a8d7df703c61e18eddfae9b18f650.json */ \"./.mdx-data/f18a8d7df703c61e18eddfae9b18f650.json\", 1);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/christian/thoughts/pages/blog.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n // eslint-disable-next-line import/no-unresolved, import/extensions\n\n\nvar blogPosts = [_Users_christian_thoughts_mdx_data_9d369386cc160395f03a9c4f52058956_json__WEBPACK_IMPORTED_MODULE_6__];\n\n\n\nvar url = 'https://cwmoon.com/journal';\nvar title = 'Journal – C.W. Moon';\nvar description = 'Small thoughts, big stories.';\n\nvar Blog = function Blog() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      searchValue = _useState[0],\n      setSearchValue = _useState[1];\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var secondaryTextColor = {\n    light: 'gray.700',\n    dark: 'gray.400'\n  };\n  var filteredBlogPosts = blogPosts.sort(function (a, b) {\n    return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));\n  }).filter(function (frontMatter) {\n    return frontMatter.title.toLowerCase().includes(searchValue.toLowerCase());\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__[\"NextSeo\"], {\n    title: title,\n    description: description,\n    canonical: url,\n    maxWidth: \"700px\",\n    openGraph: {\n      url: url,\n      title: title,\n      description: description\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n    as: \"main\",\n    spacing: 8,\n    justifyContent: \"center\",\n    alignItems: \"flex-start\",\n    m: \"0 auto 4rem auto\",\n    maxWidth: \"700px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    flexDirection: \"column\",\n    justifyContent: \"flex-start\",\n    alignItems: \"flex-start\",\n    maxWidth: \"700px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    letterSpacing: \"tight\",\n    mb: 2,\n    as: \"h1\",\n    size: \"2xl\",\n    fontWeight: 100,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Journal\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    color: secondaryTextColor[colorMode],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Test\".concat(blogPosts.length, \" articles on this site.\\n                Use the search below to filter by title.\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"InputGroup\"], {\n    my: 4,\n    mr: 4,\n    w: \"100%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    \"aria-label\": \"Search articles\",\n    onChange: function onChange(e) {\n      return setSearchValue(e.target.value);\n    },\n    placeholder: \"Search articles\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"InputRightElement\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n    name: \"search\",\n    color: \"gray.300\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  })))), !searchValue && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    flexDirection: \"column\",\n    justifyContent: \"space-between\",\n    alignItems: \"flex-start\",\n    maxWidth: \"700px\",\n    mt: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    flexDirection: \"column\",\n    justifyContent: \"flex-start\",\n    alignItems: \"flex-start\",\n    maxWidth: \"700px\",\n    mt: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n    letterSpacing: \"tight\",\n    mb: 4,\n    size: \"xl\",\n    fontWeight: 100,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"Latest\"), !filteredBlogPosts.length && 'No posts found.', filteredBlogPosts.map(function (frontMatter) {\n    return __jsx(_components_BlogPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: frontMatter.title\n    }, frontMatter, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 13\n      }\n    }));\n  })))));\n};\n\n_s(Blog, \"oA9gHpu4HtiDDGmIv/jdzSnxpzE=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"useColorMode\"]];\n});\n\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz82MWI4Il0sIm5hbWVzIjpbInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJCbG9nIiwidXNlU3RhdGUiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwic2Vjb25kYXJ5VGV4dENvbG9yIiwibGlnaHQiLCJkYXJrIiwiZmlsdGVyZWRCbG9nUG9zdHMiLCJibG9nUG9zdHMiLCJzb3J0IiwiYSIsImIiLCJOdW1iZXIiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJmaWx0ZXIiLCJmcm9udE1hdHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBYUE7Q0FHQTs7Ozs7OztBQU1BLElBQU1BLEdBQUcsR0FBRyw0QkFBWjtBQUNBLElBQU1DLEtBQUssR0FBRyxxQkFBZDtBQUNBLElBQU1DLFdBQVcsR0FDZiw4QkFERjs7QUFHQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFBQSxzQkFFS0Msb0VBQVksRUFGakI7QUFBQSxNQUVUQyxTQUZTLGlCQUVUQSxTQUZTOztBQUdqQixNQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsU0FBSyxFQUFFLFVBRGtCO0FBRXpCQyxRQUFJLEVBQUU7QUFGbUIsR0FBM0I7QUFLQSxNQUFNQyxpQkFBaUIsR0FBR0MsU0FBUyxDQUNoQ0MsSUFEdUIsQ0FFdEIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDRUMsTUFBTSxDQUFDLElBQUlDLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxXQUFYLENBQUQsQ0FBTixHQUFr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QUdFLGNBQVUsRUFBQyxZQUhiO0FBSUUsWUFBUSxFQUFDLE9BSlg7QUFLRSxNQUFFLEVBQUUsQ0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyx1REFBRDtBQUFTLGlCQUFhLEVBQUMsT0FBdkI7QUFBK0IsTUFBRSxFQUFFLENBQW5DO0FBQXNDLFFBQUksRUFBQyxJQUEzQztBQUFnRCxjQUFVLEVBQUUsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBVUcsQ0FBQ08saUJBQWlCLENBQUNZLE1BQW5CLElBQTZCLGlCQVZoQyxFQVdHWixpQkFBaUIsQ0FBQ2dCLEdBQWxCLENBQXNCLFVBQUNQLFdBQUQ7QUFBQSxXQUN2QixNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxXQUFXLENBQUNwQjtBQUEzQixPQUFzQ29CLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEdUI7QUFBQSxHQUF0QixDQVhILENBMUNGLENBREYsQ0FaRixDQURGO0FBNEVELENBN0ZEOztHQUFNbEIsSTtVQUVrQkksNEQ7OztLQUZsQkosSTtBQStGU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCB7XG4gIHVzZUNvbG9yTW9kZSxcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgRmxleCxcbiAgU3RhY2ssXG4gIElucHV0LFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dFJpZ2h0RWxlbWVudCxcbiAgSWNvbixcbiAgQm94XG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IEJsb2dQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1Bvc3QnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWQsIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgeyBmcm9udE1hdHRlciBhcyBibG9nUG9zdHMgfSBmcm9tICcuL2Jsb2cvKiovKi5tZHgnO1xuaW1wb3J0IHsgZnJvbnRNYXR0ZXIgYXMgc3R5bGVHdWlkZXMgfSBmcm9tICcuL2Jsb2cvc3R5bGUtZ3VpZGVzLWNvbXBvbmVudC1saWJyYXJpZXMtZGVzaWduLXN5c3RlbXMubWR4JztcbmltcG9ydCB7IGZyb250TWF0dGVyIGFzIHN0cmlwZURlc2lnbiB9IGZyb20gJy4vYmxvZy9ob3ctc3RyaXBlLWRlc2lnbnMtYmVhdXRpZnVsLXdlYnNpdGVzLm1keCc7XG5pbXBvcnQgeyBmcm9udE1hdHRlciBhcyBtb25vcmVwbyB9IGZyb20gJy4vYmxvZy9tb25vcmVwby1sZXJuYS15YXJuLXdvcmtzcGFjZXMubWR4JztcblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vY3dtb29uLmNvbS9qb3VybmFsJztcbmNvbnN0IHRpdGxlID0gJ0pvdXJuYWwg4oCTIEMuVy4gTW9vbic7XG5jb25zdCBkZXNjcmlwdGlvbiA9XG4gICdTbWFsbCB0aG91Z2h0cywgYmlnIHN0b3JpZXMuJztcblxuY29uc3QgQmxvZyA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgY29uc3Qgc2Vjb25kYXJ5VGV4dENvbG9yID0ge1xuICAgIGxpZ2h0OiAnZ3JheS43MDAnLFxuICAgIGRhcms6ICdncmF5LjQwMCdcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZEJsb2dQb3N0cyA9IGJsb2dQb3N0c1xuICAgIC5zb3J0KFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIE51bWJlcihuZXcgRGF0ZShiLnB1Ymxpc2hlZEF0KSkgLSBOdW1iZXIobmV3IERhdGUoYS5wdWJsaXNoZWRBdCkpXG4gICAgKVxuICAgIC5maWx0ZXIoKGZyb250TWF0dGVyKSA9PlxuICAgICAgZnJvbnRNYXR0ZXIudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIGNhbm9uaWNhbD17dXJsfVxuICAgICAgICBtYXhXaWR0aD1cIjcwMHB4XCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgYXM9XCJtYWluXCJcbiAgICAgICAgICBzcGFjaW5nPXs4fVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgbT1cIjAgYXV0byA0cmVtIGF1dG9cIlxuICAgICAgICAgIG1heFdpZHRoPVwiNzAwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIG1heFdpZHRoPVwiNzAwcHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiIG1iPXsyfSBhcz1cImgxXCIgc2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9ezEwMH0+XG4gICAgICAgICAgICAgIEpvdXJuYWxcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtzZWNvbmRhcnlUZXh0Q29sb3JbY29sb3JNb2RlXX0+XG4gICAgICAgICAgICAgIHsgYFRlc3Qke2Jsb2dQb3N0cy5sZW5ndGh9IGFydGljbGVzIG9uIHRoaXMgc2l0ZS5cbiAgICAgICAgICAgICAgICBVc2UgdGhlIHNlYXJjaCBiZWxvdyB0byBmaWx0ZXIgYnkgdGl0bGUuYH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxJbnB1dEdyb3VwIG15PXs0fSBtcj17NH0gdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBhcnRpY2xlc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXJ0aWNsZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SW5wdXRSaWdodEVsZW1lbnQ+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInNlYXJjaFwiIGNvbG9yPVwiZ3JheS4zMDBcIiAvPlxuICAgICAgICAgICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICB7IXNlYXJjaFZhbHVlICYmIChcbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiNzAwcHhcIlxuICAgICAgICAgICAgICBtdD17MH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBtYXhXaWR0aD1cIjcwMHB4XCJcbiAgICAgICAgICAgIG10PXswfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiIG1iPXs0fSBzaXplPVwieGxcIiBmb250V2VpZ2h0PXsxMDB9PlxuICAgICAgICAgICAgICBMYXRlc3RcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIHshZmlsdGVyZWRCbG9nUG9zdHMubGVuZ3RoICYmICdObyBwb3N0cyBmb3VuZC4nfVxuICAgICAgICAgICAge2ZpbHRlcmVkQmxvZ1Bvc3RzLm1hcCgoZnJvbnRNYXR0ZXIpID0+IChcbiAgICAgICAgICAgIDxCbG9nUG9zdCBrZXk9e2Zyb250TWF0dGVyLnRpdGxlfSB7Li4uZnJvbnRNYXR0ZXJ9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgXG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})