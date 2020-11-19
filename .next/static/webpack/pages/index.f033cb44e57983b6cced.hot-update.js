webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Components_PokemonCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/PokemonCard */ "./Components/PokemonCard.js");
/* harmony import */ var _Utils_ApiPokemons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/ApiPokemons */ "./Utils/ApiPokemons.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Github\\Projeto-Pokedex\\pages\\index.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GridWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = GridWrapper;
function index() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      ListaPokemon = _useState[0],
      setListaPokemon = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_Utils_ApiPokemons__WEBPACK_IMPORTED_MODULE_5__["default"])().then(function (success) {
      setListaPokemon(success.results);
    });
  }, []);

  function PokemonSelected(pokemon) {
    setPokemonSelected(pokemon);
    router.push('./details');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GridWrapper, {
    children: ListaPokemon.map(function (pokemon) {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        onClick: function onClick() {
          return PokemonSelected(pokemon);
        },
        children: ["return ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Components_PokemonCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          pokemon: pokemon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 20
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }, this);
}

_s(index, "Fy5RWe48fXp1QIztYbANVJGn8x0=");

var _c;

$RefreshReg$(_c, "GridWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJpbmRleCIsInVzZVN0YXRlIiwiTGlzdGFQb2tlbW9uIiwic2V0TGlzdGFQb2tlbW9uIiwidXNlRWZmZWN0IiwiTGlzdFBva2Vtb24iLCJ0aGVuIiwic3VjY2VzcyIsInJlc3VsdHMiLCJQb2tlbW9uU2VsZWN0ZWQiLCJwb2tlbW9uIiwic2V0UG9rZW1vblNlbGVjdGVkIiwicm91dGVyIiwicHVzaCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFqQjtLQUFNRixXO0FBT1csU0FBU0csS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUN2QkMsWUFEdUI7QUFBQSxNQUNUQyxlQURTOztBQUk5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNFQUFXLEdBQUdDLElBQWQsQ0FBb0IsVUFBQ0MsT0FBRCxFQUFhO0FBQy9CSixxQkFBZSxDQUFDSSxPQUFPLENBQUNDLE9BQVQsQ0FBZjtBQUNPLEtBRlQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFdBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWlDO0FBQy9CQyxzQkFBa0IsQ0FBQ0QsT0FBRCxDQUFsQjtBQUNBRSxVQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsV0FBRDtBQUFBLGNBQ0dYLFlBQVksQ0FBQ1ksR0FBYixDQUFpQixVQUFDSixPQUFELEVBQWE7QUFDN0I7QUFBQTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxlQUFlLENBQUNDLE9BQUQsQ0FBckI7QUFBQSxTQUFkO0FBQUEsMkNBQ1MscUVBQUMsK0RBQUQ7QUFBYSxpQkFBTyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdELEtBSkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0F6QnVCVixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYwMzNjYjQ0ZTU3OTgzYjZjY2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUG9rZW1vblRpbGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvUG9rZW1vbkNhcmRcIjtcclxuaW1wb3J0IExpc3RQb2tlbW9uIGZyb20gXCIuLi9VdGlscy9BcGlQb2tlbW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGA7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgY29uc3QgW0xpc3RhUG9rZW1vbiwgc2V0TGlzdGFQb2tlbW9uXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIExpc3RQb2tlbW9uKCkudGhlbiggKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRMaXN0YVBva2Vtb24oc3VjY2Vzcy5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gUG9rZW1vblNlbGVjdGVkKHBva2Vtb24pe1xyXG4gICAgICBzZXRQb2tlbW9uU2VsZWN0ZWQocG9rZW1vbilcclxuICAgICAgcm91dGVyLnB1c2goJy4vZGV0YWlscycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdyaWRXcmFwcGVyPlxyXG4gICAgICAgIHtMaXN0YVBva2Vtb24ubWFwKChwb2tlbW9uKSA9PiB7XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFBva2Vtb25TZWxlY3RlZChwb2tlbW9uKX0+XHJcbiAgICAgICAgICAgIHJldHVybiA8UG9rZW1vblRpbGUgcG9rZW1vbj17cG9rZW1vbn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICA8L0dyaWRXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==