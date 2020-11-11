exports.ids = [0];
exports.modules = {

/***/ "./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDb; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet firebaseDb = null;\nfunction getDb() {\n  if (firebaseDb === null) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({\n      databaseURL: \"https://cwmoon-cd3ec.firebaseio.com/\"\n    });\n    firebaseDb = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();\n  }\n\n  return firebaseDb;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RiLnRzPzFlOTMiXSwibmFtZXMiOlsiZmlyZWJhc2VEYiIsImdldERiIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZGF0YWJhc2VVUkwiLCJkYXRhYmFzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxJQUFqQjtBQUVlLFNBQVNDLEtBQVQsR0FBaUI7QUFDOUIsTUFBSUQsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCRSx1REFBUSxDQUFDQyxhQUFULENBQXVCO0FBQ3JCQyxpQkFBVyxFQUFFO0FBRFEsS0FBdkI7QUFHQUosY0FBVSxHQUFHRSxtREFBUSxDQUFDRyxRQUFULEVBQWI7QUFDRDs7QUFDRCxTQUFPTCxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvbGliL2RiLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbmxldCBmaXJlYmFzZURiID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGIoKSB7XG4gIGlmIChmaXJlYmFzZURiID09PSBudWxsKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XG4gICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2N3bW9vbi1jZDNlYy5maXJlYmFzZWlvLmNvbS9cIixcbiAgICB9KTtcbiAgICBmaXJlYmFzZURiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgfVxuICByZXR1cm4gZmlyZWJhc2VEYjtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/db.ts\n");

/***/ })

};;