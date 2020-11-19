webpackHotUpdate_N_E("pages/teste",{

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

  function PokemonSelected(pokemonInfo) {
    setPokemonSelected(pokemonInfo);
    router.push('./details');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GridWrapper, {
    children: ListaPokemon.map(function (pokemon) {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        onClick: function onClick() {
          return PokemonSelected(pokemonInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR3JpZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJpbmRleCIsInVzZVN0YXRlIiwiTGlzdGFQb2tlbW9uIiwic2V0TGlzdGFQb2tlbW9uIiwidXNlRWZmZWN0IiwiTGlzdFBva2Vtb24iLCJ0aGVuIiwic3VjY2VzcyIsInJlc3VsdHMiLCJQb2tlbW9uU2VsZWN0ZWQiLCJwb2tlbW9uSW5mbyIsInNldFBva2Vtb25TZWxlY3RlZCIsInJvdXRlciIsInB1c2giLCJtYXAiLCJwb2tlbW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0tBQU1GLFc7QUFPVyxTQUFTRyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ3ZCQyxZQUR1QjtBQUFBLE1BQ1RDLGVBRFM7O0FBSTlCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0VBQVcsR0FBR0MsSUFBZCxDQUFvQixVQUFDQyxPQUFELEVBQWE7QUFDL0JKLHFCQUFlLENBQUNJLE9BQU8sQ0FBQ0MsT0FBVCxDQUFmO0FBQ08sS0FGVDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsV0FBU0MsZUFBVCxDQUF5QkMsV0FBekIsRUFBcUM7QUFDbkNDLHNCQUFrQixDQUFDRCxXQUFELENBQWxCO0FBQ0FFLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVo7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxXQUFEO0FBQUEsY0FDR1gsWUFBWSxDQUFDWSxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM3QjtBQUFBO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU1OLGVBQWUsQ0FBQ0MsV0FBRCxDQUFyQjtBQUFBLFNBQWQ7QUFBQSwyQ0FDUyxxRUFBQywrREFBRDtBQUFhLGlCQUFPLEVBQUVLO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0QsS0FKQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQXpCdUJmLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdGUuMGJjNDhkMmM2NDYxNzgyNDM1NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQb2tlbW9uVGlsZSBmcm9tIFwiLi4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZFwiO1xyXG5pbXBvcnQgTGlzdFBva2Vtb24gZnJvbSBcIi4uL1V0aWxzL0FwaVBva2Vtb25zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYDtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBjb25zdCBbTGlzdGFQb2tlbW9uLCBzZXRMaXN0YVBva2Vtb25dID0gdXNlU3RhdGUoW10pXHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgTGlzdFBva2Vtb24oKS50aGVuKCAoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldExpc3RhUG9rZW1vbihzdWNjZXNzLnJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBQb2tlbW9uU2VsZWN0ZWQocG9rZW1vbkluZm8pe1xyXG4gICAgICBzZXRQb2tlbW9uU2VsZWN0ZWQocG9rZW1vbkluZm8pXHJcbiAgICAgIHJvdXRlci5wdXNoKCcuL2RldGFpbHMnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHcmlkV3JhcHBlcj5cclxuICAgICAgICB7TGlzdGFQb2tlbW9uLm1hcCgocG9rZW1vbikgPT4ge1xyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBQb2tlbW9uU2VsZWN0ZWQocG9rZW1vbkluZm8pfT5cclxuICAgICAgICAgICAgcmV0dXJuIDxQb2tlbW9uVGlsZSBwb2tlbW9uPXtwb2tlbW9ufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvR3JpZFdyYXBwZXI+XHJcbiAgICApO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9