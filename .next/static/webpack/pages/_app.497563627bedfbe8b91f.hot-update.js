webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header.js */ "./Components/Header.js");





var _jsxFileName = "C:\\Github\\Projeto-Pokedex\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-image: \"../Public/Backgrund.png\";\n    font-family: 'Goldman', cursive;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
_c = GlobalStyle;
function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      PokemonEndPoint = _useState[0],
      setPokemonEndPoint = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      PokemonSelected = _useState2[0],
      setPokemonSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      PokemonFullData = _useState3[0],
      setPokemonFullData = _useState3[1];

  var PokemonStaticDataArray = [];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    PokemonEndPoint().then(function (resolve) {
      setPokemonEndPoint(resolve.data.results);
      resolve.data.results.map(function (Pokemon) {
        PokemonEndPointUrl(Pokemon.url).then(function (success) {
          PokemonSelectedArray.push({
            name: Pokemon.name,
            data: success
          });
        });
      });
      setPokemonFullData(PokemonStaticDataArray);
    });
  }, {});

  var changedProps = _objectSpread(_objectSpread({}, pageProps), {}, {
    PokemonEndPoint: PokemonEndPoint,
    PokemonSelected: PokemonSelected,
    setPokemonSelected: setPokemonSelected,
    PokemonFullData: PokemonFullData
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, changedProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(App, "LGCFVBeY2hlNm8iLVGytU1QLgtg=");

_c2 = App;

var _c, _c2;

$RefreshReg$(_c, "GlobalStyle");
$RefreshReg$(_c2, "App");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJQb2tlbW9uRW5kUG9pbnQiLCJzZXRQb2tlbW9uRW5kUG9pbnQiLCJQb2tlbW9uU2VsZWN0ZWQiLCJzZXRQb2tlbW9uU2VsZWN0ZWQiLCJQb2tlbW9uRnVsbERhdGEiLCJzZXRQb2tlbW9uRnVsbERhdGEiLCJQb2tlbW9uU3RhdGljRGF0YUFycmF5IiwidXNlRWZmZWN0IiwidGhlbiIsInJlc29sdmUiLCJkYXRhIiwicmVzdWx0cyIsIm1hcCIsIlBva2Vtb24iLCJQb2tlbW9uRW5kUG9pbnRVcmwiLCJ1cmwiLCJzdWNjZXNzIiwiUG9rZW1vblNlbGVjdGVkQXJyYXkiLCJwdXNoIiwibmFtZSIsImNoYW5nZWRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDJFQUFILG1CQUFqQjtLQUFNRCxXO0FBU1csU0FBU0UsR0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDNUNDLGVBRDRDO0FBQUEsTUFDM0JDLGtCQUQyQjs7QUFBQSxtQkFFTEYsc0RBQVEsRUFGSDtBQUFBLE1BRTVDRyxlQUY0QztBQUFBLE1BRTNCQyxrQkFGMkI7O0FBQUEsbUJBR0xKLHNEQUFRLEVBSEg7QUFBQSxNQUc1Q0ssZUFINEM7QUFBQSxNQUczQkMsa0JBSDJCOztBQUtuRCxNQUFJQyxzQkFBc0IsR0FBRyxFQUE3QjtBQUVKQyx5REFBUyxDQUFDLFlBQU07QUFDZlAsbUJBQWUsR0FBR1EsSUFBbEIsQ0FBdUIsVUFBQ0MsT0FBRCxFQUFhO0FBQ2xDUix3QkFBa0IsQ0FBQ1EsT0FBTyxDQUFDQyxJQUFSLENBQWFDLE9BQWQsQ0FBbEI7QUFDQUYsYUFBTyxDQUFDQyxJQUFSLENBQWFDLE9BQWIsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLE9BQUQsRUFBYTtBQUNwQ0MsMEJBQWtCLENBQUNELE9BQU8sQ0FBQ0UsR0FBVCxDQUFsQixDQUFnQ1AsSUFBaEMsQ0FBcUMsVUFBQ1EsT0FBRCxFQUFhO0FBQ2hEQyw4QkFBb0IsQ0FBQ0MsSUFBckIsQ0FBMEI7QUFBQ0MsZ0JBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUFmO0FBQXFCVCxnQkFBSSxFQUFFTTtBQUEzQixXQUExQjtBQUNELFNBRkQ7QUFHRCxPQUpEO0FBTUFYLHdCQUFrQixDQUFDQyxzQkFBRCxDQUFsQjtBQUVELEtBVkQ7QUFXQSxHQVpRLEVBWU4sRUFaTSxDQUFUOztBQWNLLE1BQU1jLFlBQVksbUNBQ2J0QixTQURhO0FBRWhCRSxtQkFBZSxFQUFFQSxlQUZEO0FBR2hCRSxtQkFBZSxFQUFFQSxlQUhEO0FBSWhCQyxzQkFBa0IsRUFBbEJBLGtCQUpnQjtBQUtoQkMsbUJBQWUsRUFBRUE7QUFMRCxJQUFsQjs7QUFRRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUUscUVBQUMsU0FBRCxvQkFBZWdCLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFTRDs7R0F0Q3VCeEIsRzs7TUFBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ5NzU2MzYyN2JlZGZiZThiOTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlci5qcydcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogXCIuLi9QdWJsaWMvQmFja2dydW5kLnBuZ1wiO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb2xkbWFuJywgY3Vyc2l2ZTtcclxuICB9XHJcbmA7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSkge1xyXG4gICAgY29uc3QgW1Bva2Vtb25FbmRQb2ludCwgc2V0UG9rZW1vbkVuZFBvaW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtQb2tlbW9uU2VsZWN0ZWQsIHNldFBva2Vtb25TZWxlY3RlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW1Bva2Vtb25GdWxsRGF0YSwgc2V0UG9rZW1vbkZ1bGxEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBcclxuICAgIGxldCBQb2tlbW9uU3RhdGljRGF0YUFycmF5ID0gW107XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gUG9rZW1vbkVuZFBvaW50KCkudGhlbigocmVzb2x2ZSkgPT4ge1xyXG4gICBzZXRQb2tlbW9uRW5kUG9pbnQocmVzb2x2ZS5kYXRhLnJlc3VsdHMpO1xyXG4gICByZXNvbHZlLmRhdGEucmVzdWx0cy5tYXAoKFBva2Vtb24pID0+IHtcclxuICAgICBQb2tlbW9uRW5kUG9pbnRVcmwoUG9rZW1vbi51cmwpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgIFBva2Vtb25TZWxlY3RlZEFycmF5LnB1c2goe25hbWU6IFBva2Vtb24ubmFtZSwgZGF0YTogc3VjY2Vzc30pO1xyXG4gICAgIH0pO1xyXG4gICB9KTtcclxuXHJcbiAgIHNldFBva2Vtb25GdWxsRGF0YShQb2tlbW9uU3RhdGljRGF0YUFycmF5KTtcclxuICAgXHJcbiB9KTtcclxufSwge30pO1xyXG4gIFxyXG4gICAgIGNvbnN0IGNoYW5nZWRQcm9wcyA9IHtcclxuICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgIFBva2Vtb25FbmRQb2ludDogUG9rZW1vbkVuZFBvaW50LFxyXG4gICAgICAgUG9rZW1vblNlbGVjdGVkOiBQb2tlbW9uU2VsZWN0ZWQsXHJcbiAgICAgICBzZXRQb2tlbW9uU2VsZWN0ZWQsXHJcbiAgICAgICBQb2tlbW9uRnVsbERhdGE6IFBva2Vtb25GdWxsRGF0YSxcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICBcclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5jaGFuZ2VkUHJvcHN9IC8+XHJcbiAgICAgIFxyXG4gICAgICA8Lz4gIFxyXG4gICAgKVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9