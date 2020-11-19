module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/PokemonCard.js":
/*!***********************************!*\
  !*** ./Components/PokemonCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PokemonTile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils_GetPokemonData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/GetPokemonData */ "./Utils/GetPokemonData.js");

var _jsxFileName = "C:\\Github\\Projeto-Pokedex\\Components\\PokemonCard.js";

const {
  useState,
  useEffect
} = __webpack_require__(/*! react */ "react");



const TileHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
const TileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    background-color: white;
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid #C1BFC2;
    width: 200px;
    height: 200px;
    margin: 15px;
    transition: all 0,3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    img{
        width:150px;
        height:150px;
    }
    `;
const PokemonName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
        background: #C1BFC2;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        text-align: center;
        font-size: 20px;
        height: 30px;
        `;
const PokemonTypes = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
         background: #adadad;
         width: 30px;
         position: absolute;
         top: 0;
         right: 0;
         color: black;
         text-align: center;
         height: 30px;

        `;
function PokemonTile({
  pokemon
}) {
  const [PokemonInfo, setPokemonInfo] = useState({});
  useEffect(() => {
    Object(_Utils_GetPokemonData__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon.url).then(success => {
      console.log("Deu Bom", success);
      setPokemonInfo(success);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileHolder, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: PokemonInfo.sprites ? PokemonInfo.sprites.front_default : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PokemonName, {
        children: pokemon.name ? pokemon.name : "unknown"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PokemonTypes, {
        children: pokemon.id ? pokemon.id : "alo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 17
  }, this);
}

/***/ }),

/***/ "./Utils/ApiPokemons.js":
/*!******************************!*\
  !*** ./Utils/ApiPokemons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListPokemon; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function ListPokemon() {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://pokeapi.co/api/v2/pokemon?limit=40").then(res => resolve(res.data)).catch(error => reject(error));
  });
}

/***/ }),

/***/ "./Utils/GetPokemonData.js":
/*!*********************************!*\
  !*** ./Utils/GetPokemonData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetPokemonData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function GetPokemonData(url) {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => resolve(res.data)).catch(error => reject(error));
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_PokemonCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/PokemonCard */ "./Components/PokemonCard.js");
/* harmony import */ var _Utils_ApiPokemons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/ApiPokemons */ "./Utils/ApiPokemons.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Github\\Projeto-Pokedex\\pages\\index.js";





const GridWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;
function index() {
  const {
    0: ListaPokemon,
    1: setListaPokemon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_Utils_ApiPokemons__WEBPACK_IMPORTED_MODULE_4__["default"])().then(success => {
      setListaPokemon(success.results);
    });
  }, []);

  function PokemonSelected(pokemonInfo) {
    setPokemonSelected(pokemonInfo);
    router.push('./details');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GridWrapper, {
    children: ListaPokemon.map(pokemon => {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => PokemonSelected(pokemonInfo),
        children: ["return ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_PokemonCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          pokemon: pokemon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9VdGlscy9BcGlQb2tlbW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9VdGlscy9HZXRQb2tlbW9uRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVxdWlyZSIsIlRpbGVIb2xkZXIiLCJzdHlsZWQiLCJkaXYiLCJUaWxlV3JhcHBlciIsIlBva2Vtb25OYW1lIiwiUG9rZW1vblR5cGVzIiwiUG9rZW1vblRpbGUiLCJwb2tlbW9uIiwiUG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uSW5mbyIsIkdldFBva2Vtb25EYXRhIiwidXJsIiwidGhlbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwibmFtZSIsImlkIiwiTGlzdFBva2Vtb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsIkdyaWRXcmFwcGVyIiwiaW5kZXgiLCJMaXN0YVBva2Vtb24iLCJzZXRMaXN0YVBva2Vtb24iLCJyZXN1bHRzIiwiUG9rZW1vblNlbGVjdGVkIiwicG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uU2VsZWN0ZWQiLCJyb3V0ZXIiLCJwdXNoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztR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Q3FCLE9BQVQsQ0FBZjtBQUNPLEtBRlQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFdBQVNDLGVBQVQsQ0FBeUJDLFdBQXpCLEVBQXFDO0FBQ25DQyxzQkFBa0IsQ0FBQ0QsV0FBRCxDQUFsQjtBQUNBRSxVQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsV0FBRDtBQUFBLGNBQ0dQLFlBQVksQ0FBQ1EsR0FBYixDQUFrQmpDLE9BQUQsSUFBYTtBQUM3QjtBQUFBO0FBQUssZUFBTyxFQUFFLE1BQU00QixlQUFlLENBQUNDLFdBQUQsQ0FBbkM7QUFBQSwyQ0FDUyxxRUFBQywrREFBRDtBQUFhLGlCQUFPLEVBQUU3QjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdELEtBSkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCxDOzs7Ozs7Ozs7OztBQ3RDSCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKVxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgR2V0UG9rZW1vbkRhdGEgZnJvbSBcIi4uL1V0aWxzL0dldFBva2Vtb25EYXRhXCI7XHJcblxyXG5jb25zdCBUaWxlSG9sZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYDtcclxuXHJcbmNvbnN0IFRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MxQkZDMjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMCwzcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBQb2tlbW9uTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgYmFja2dyb3VuZDogI0MxQkZDMjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc3QgUG9rZW1vblR5cGVzID0gc3R5bGVkLmRpdmBcclxuICAgICAgICAgYmFja2dyb3VuZDogI2FkYWRhZDtcclxuICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vblRpbGUoeyBwb2tlbW9uIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgW1Bva2Vtb25JbmZvLCBzZXRQb2tlbW9uSW5mb10gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgR2V0UG9rZW1vbkRhdGEocG9rZW1vbi51cmwpXHJcbiAgICAgICAgICAgIC50aGVuKCggc3VjY2VzcyApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV1IEJvbVwiLCBzdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgc2V0UG9rZW1vbkluZm8oc3VjY2VzcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUaWxlSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17UG9rZW1vbkluZm8uc3ByaXRlcyA/IFBva2Vtb25JbmZvLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCA6IFwiaHR0cHM6Ly9wbmdpbWcuY29tL3VwbG9hZHMvcG9rZWJhbGwvcG9rZWJhbGxfUE5HMjEucG5nXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25OYW1lPntwb2tlbW9uLm5hbWUgPyBwb2tlbW9uLm5hbWUgOiBcInVua25vd25cIn08L1Bva2Vtb25OYW1lPlxyXG4gICAgICAgICAgICAgICAgPFBva2Vtb25UeXBlcz57cG9rZW1vbi5pZCA/IHBva2Vtb24uaWQgOiBcImFsb1wifTwvUG9rZW1vblR5cGVzPlxyXG4gICAgICAgICAgICAgICAgPC9UaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvVGlsZUhvbGRlcj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTGlzdFBva2Vtb24oKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PntcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTQwXCIpXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHJlc29sdmUocmVzLmRhdGEpKVxyXG4gICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBHZXRQb2tlbW9uRGF0YSh1cmwpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcy5kYXRhKSlcclxuICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUG9rZW1vblRpbGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvUG9rZW1vbkNhcmRcIjtcclxuaW1wb3J0IExpc3RQb2tlbW9uIGZyb20gXCIuLi9VdGlscy9BcGlQb2tlbW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEdyaWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGA7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgY29uc3QgW0xpc3RhUG9rZW1vbiwgc2V0TGlzdGFQb2tlbW9uXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIExpc3RQb2tlbW9uKCkudGhlbiggKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICBzZXRMaXN0YVBva2Vtb24oc3VjY2Vzcy5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gUG9rZW1vblNlbGVjdGVkKHBva2Vtb25JbmZvKXtcclxuICAgICAgc2V0UG9rZW1vblNlbGVjdGVkKHBva2Vtb25JbmZvKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLi9kZXRhaWxzJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZFdyYXBwZXI+XHJcbiAgICAgICAge0xpc3RhUG9rZW1vbi5tYXAoKHBva2Vtb24pID0+IHtcclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gUG9rZW1vblNlbGVjdGVkKHBva2Vtb25JbmZvKX0+XHJcbiAgICAgICAgICAgIHJldHVybiA8UG9rZW1vblRpbGUgcG9rZW1vbj17cG9rZW1vbn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICA8L0dyaWRXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=