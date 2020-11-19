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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/teste.js");
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

/***/ "./pages/teste.js":
/*!************************!*\
  !*** ./pages/teste.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Teste; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./pages/index.js");

var _jsxFileName = "C:\\Github\\Projeto-Pokedex\\pages\\teste.js";



const TileHolder = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
display: table-row;
align-items: center;
flex-wrap: wrap;
justify-content: center;
margin: 15px;
`;
const TileImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
img{
    width:400px;
    height:400px;
}
`;
const TileName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
margin: 15px;
top: 0;
`;
const Types = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
display: flex;
align-items: center;
background-color: #C1BFC2;
margin: 5px;
height: 20px;
`;
const Weight = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
align-items: center;
background-color: #C1BFC2;
margin: 5px;
height: 20px;
`;
const Height = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
align-items: center;
background-color: #C1BFC2;
margin: 5px;
height: 20px;
`;
function Teste() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileHolder, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileImage, {
        scr: _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected ? _index__WEBPACK_IMPORTED_MODULE_3__["default"].data.sprites.front_default : '../Public/Rocket.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileName, {
          children: _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected ? _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected.name : "Informação roubada pela Equipe Rocket"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Types, {
        children: _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected ? _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected.data.types.map(tipos => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: tipos.type && tipos.type.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, this);
        }) : "Desconhecido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Weight, {
        children: _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected ? _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected.data.weight : "Desconhecido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Height, {
        children: _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected ? _index__WEBPACK_IMPORTED_MODULE_3__["default"].PokemonSelected.data.height : "Desconhecido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9VdGlscy9BcGlQb2tlbW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9VdGlscy9HZXRQb2tlbW9uRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVxdWlyZSIsIlRpbGVIb2xkZXIiLCJzdHlsZWQiLCJkaXYiLCJUaWxlV3JhcHBlciIsIlBva2Vtb25OYW1lIiwiUG9rZW1vblR5cGVzIiwiUG9rZW1vblRpbGUiLCJwb2tlbW9uIiwiUG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uSW5mbyIsIkdldFBva2Vtb25EYXRhIiwidXJsIiwidGhlbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwibmFtZSIsImlkIiwiTGlzdFBva2Vtb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiZGF0YSIsIkdyaWRXcmFwcGVyIiwiaW5kZXgiLCJMaXN0YVBva2Vtb24iLCJzZXRMaXN0YVBva2Vtb24iLCJyZXN1bHRzIiwiUG9rZW1vblNlbGVjdGVkIiwicG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uU2VsZWN0ZWQiLCJyb3V0ZXIiLCJwdXNoIiwibWFwIiwiVGlsZUltYWdlIiwiVGlsZU5hbWUiLCJUeXBlcyIsIldlaWdodCIsIkhlaWdodCIsIlRlc3RlIiwidHlwZXMiLCJ0aXBvcyIsInR5cGUiLCJ3ZWlnaHQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBLE1BQU07QUFBRUEsVUFBRjtBQUFZQztBQUFaLElBQTBCQyxtQkFBTyxDQUFDLG9CQUFELENBQXZDOztBQUNBO0FBQ0E7QUFFQSxNQUFNQyxVQUFVLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBT0EsTUFBTUMsV0FBVyxHQUFHRix3REFBTSxDQUFDQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUQ7QUFBQSxrQkFDS2UsOENBQWUsQ0FBQ0EsZUFBaEIsR0FBa0NBLDhDQUFlLENBQUNBLGVBQWhCLENBQWdDTixJQUFoQyxDQUFxQ3FCLE1BQXZFLEdBQWdGO0FBRHJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKLGVBd0JJO0FBQUEsNkJBQ0kscUVBQUMsTUFBRDtBQUFBLGtCQUNLZiw4Q0FBZSxDQUFDQSxlQUFoQixHQUFrQ0EsOENBQWUsQ0FBQ0EsZUFBaEIsQ0FBZ0NOLElBQWhDLENBQXFDc0IsTUFBdkUsR0FBZ0Y7QUFEckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0gsQzs7Ozs7Ozs7Ozs7QUNuRkQsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvdGVzdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Rlc3RlLmpzXCIpO1xuIiwiY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSByZXF1aXJlKFwicmVhY3RcIilcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEdldFBva2Vtb25EYXRhIGZyb20gXCIuLi9VdGlscy9HZXRQb2tlbW9uRGF0YVwiO1xyXG5cclxuY29uc3QgVGlsZUhvbGRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGA7XHJcblxyXG5jb25zdCBUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMUJGQzI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAsM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgIGhlaWdodDoxNTBweDtcclxuICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgUG9rZW1vbk5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDMUJGQzI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IFBva2Vtb25UeXBlcyA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgIGJhY2tncm91bmQ6ICNhZGFkYWQ7XHJcbiAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb25UaWxlKHsgcG9rZW1vbiB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtQb2tlbW9uSW5mbywgc2V0UG9rZW1vbkluZm9dID0gdXNlU3RhdGUoe30pXHJcblxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdldFBva2Vtb25EYXRhKHBva2Vtb24udXJsKVxyXG4gICAgICAgICAgICAudGhlbigoIHN1Y2Nlc3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldSBCb21cIiwgc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIHNldFBva2Vtb25JbmZvKHN1Y2Nlc3MpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGlsZUhvbGRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1Bva2Vtb25JbmZvLnNwcml0ZXMgPyBQb2tlbW9uSW5mby5zcHJpdGVzLmZyb250X2RlZmF1bHQgOiBcImh0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL3Bva2ViYWxsL3Bva2ViYWxsX1BORzIxLnBuZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2tlbW9uTmFtZT57cG9rZW1vbi5uYW1lID8gcG9rZW1vbi5uYW1lIDogXCJ1bmtub3duXCJ9PC9Qb2tlbW9uTmFtZT5cclxuICAgICAgICAgICAgICAgIDxQb2tlbW9uVHlwZXM+e3Bva2Vtb24uaWQgPyBwb2tlbW9uLmlkIDogXCJhbG9cIn08L1Bva2Vtb25UeXBlcz5cclxuICAgICAgICAgICAgICAgIDwvVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L1RpbGVIb2xkZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIExpc3RQb2tlbW9uKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT57XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgLmdldChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD00MFwiKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcy5kYXRhKSlcclxuICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR2V0UG9rZW1vbkRhdGEodXJsKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PntcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMuZGF0YSkpXHJcbiAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFBva2Vtb25UaWxlIGZyb20gXCIuLi9Db21wb25lbnRzL1Bva2Vtb25DYXJkXCI7XHJcbmltcG9ydCBMaXN0UG9rZW1vbiBmcm9tIFwiLi4vVXRpbHMvQXBpUG9rZW1vbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBHcmlkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBgO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICAgIGNvbnN0IFtMaXN0YVBva2Vtb24sIHNldExpc3RhUG9rZW1vbl0gPSB1c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBMaXN0UG9rZW1vbigpLnRoZW4oIChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0TGlzdGFQb2tlbW9uKHN1Y2Nlc3MucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIFBva2Vtb25TZWxlY3RlZChwb2tlbW9uSW5mbyl7XHJcbiAgICAgIHNldFBva2Vtb25TZWxlY3RlZChwb2tlbW9uSW5mbylcclxuICAgICAgcm91dGVyLnB1c2goJy4vZGV0YWlscycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdyaWRXcmFwcGVyPlxyXG4gICAgICAgIHtMaXN0YVBva2Vtb24ubWFwKChwb2tlbW9uKSA9PiB7XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFBva2Vtb25TZWxlY3RlZChwb2tlbW9uSW5mbyl9PlxyXG4gICAgICAgICAgICByZXR1cm4gPFBva2Vtb25UaWxlIHBva2Vtb249e3Bva2Vtb259IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgPC9HcmlkV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgUG9rZW1vblNlbGVjdGVkIGZyb20gXCIuL2luZGV4XCJcclxuXHJcbmNvbnN0IFRpbGVIb2xkZXIgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiB0YWJsZS1yb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZsZXgtd3JhcDogd3JhcDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm1hcmdpbjogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpbGVJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbmltZ3tcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBUaWxlTmFtZSA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZsZXgtd3JhcDogd3JhcDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm1hcmdpbjogMTVweDtcclxudG9wOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgVHlwZXMgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjQzFCRkMyO1xyXG5tYXJnaW46IDVweDtcclxuaGVpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgV2VpZ2h0ID0gc3R5bGVkLmRpdmBcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjogI0MxQkZDMjtcclxubWFyZ2luOiA1cHg7XHJcbmhlaWdodDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlaWdodCA9IHN0eWxlZC5kaXZgXHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6ICNDMUJGQzI7XHJcbm1hcmdpbjogNXB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RlKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFRpbGVIb2xkZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUaWxlSW1hZ2Ugc2NyPXtQb2tlbW9uU2VsZWN0ZWQuUG9rZW1vblNlbGVjdGVkID8gUG9rZW1vblNlbGVjdGVkLmRhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0IDogJy4uL1B1YmxpYy9Sb2NrZXQucG5nJ30+PC9UaWxlSW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPjxUaWxlTmFtZT5cclxuICAgICAgICAgICAgICAgICAgICB7UG9rZW1vblNlbGVjdGVkLlBva2Vtb25TZWxlY3RlZCA/IFBva2Vtb25TZWxlY3RlZC5Qb2tlbW9uU2VsZWN0ZWQubmFtZSA6IFwiSW5mb3JtYcOnw6NvIHJvdWJhZGEgcGVsYSBFcXVpcGUgUm9ja2V0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaWxlTmFtZT48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBlcz5cclxuICAgICAgICAgICAgICAgICAgICB7UG9rZW1vblNlbGVjdGVkLlBva2Vtb25TZWxlY3RlZCA/IFBva2Vtb25TZWxlY3RlZC5Qb2tlbW9uU2VsZWN0ZWQuZGF0YS50eXBlcy5tYXAoKHRpcG9zKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpcG9zLnR5cGUgJiYgdGlwb3MudHlwZS5uYW1lfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk6IFwiRGVzY29uaGVjaWRvXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1R5cGVzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxXZWlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1Bva2Vtb25TZWxlY3RlZC5Qb2tlbW9uU2VsZWN0ZWQgPyBQb2tlbW9uU2VsZWN0ZWQuUG9rZW1vblNlbGVjdGVkLmRhdGEud2VpZ2h0IDogXCJEZXNjb25oZWNpZG9cIn1cclxuICAgICAgICAgICAgICAgIDwvV2VpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1Bva2Vtb25TZWxlY3RlZC5Qb2tlbW9uU2VsZWN0ZWQgPyBQb2tlbW9uU2VsZWN0ZWQuUG9rZW1vblNlbGVjdGVkLmRhdGEuaGVpZ2h0IDogXCJEZXNjb25oZWNpZG9cIn1cclxuICAgICAgICAgICAgICAgIDwvSGVpZ2h0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RpbGVIb2xkZXI+XHJcbiAgICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9