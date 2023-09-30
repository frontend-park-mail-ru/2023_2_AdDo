/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Feed/Feed.js":
/*!*************************************!*\
  !*** ./src/components/Feed/Feed.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Feed: () => (/* binding */ Feed)
/* harmony export */ });
/* harmony import */ var _Feed_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feed.hbs */ "./src/components/Feed/Feed.hbs");
/* harmony import */ var _Feed_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Feed_hbs__WEBPACK_IMPORTED_MODULE_0__);


/** Class representing a Feed. */
class Feed {
  #parent;
  #configFeed;
  #configContent;

  /**
      * Sets parent and config.
      * @param {HTMLElement} parent
      * @param {Object} configFeed 
   * @param {Object} configContent 
      */
  constructor(parent, configFeed, configContent) {
    this.#parent = parent;
    this.#configFeed = configFeed;
    this.#configContent = configContent;
  }

  /**
      * Get the configFeed.
      * @return {Object} configFeed.
      */
  get configFeed() {
    return this.#configFeed;
  }

  /**
      * Get the configContent.
      * @return {Object} configContent.
      */
  get configContent() {
    return this.#configContent;
  }

  /**
      * Get the items.
      * @return {Object} items.
      */
  get items() {
    return Object.entries(this.configFeed).map(([key, {
      href,
      name
    }]) => ({
      key,
      href,
      name
    }));
  }

  /**
      * Get the content.
      * @return {Object} content.
      */
  get content() {
    return Object.entries(this.configContent).map(([key, {
      albumHref,
      artistHref,
      name,
      artist,
      image
    }]) => ({
      key,
      albumHref,
      artistHref,
      name,
      artist,
      image
    }));
  }

  /**
     * Render header.
     */
  render() {
    const items = this.items.map(element => {
      let className = 'feed__item';
      return {
        ...element,
        className
      };
    });
    const content = this.content.map(element => {
      let className = 'content__item';
      return {
        ...element,
        className
      };
    });
    this.#parent.innerHTML = _Feed_hbs__WEBPACK_IMPORTED_MODULE_0___default()({
      items,
      content
    });
  }
}

/***/ }),

/***/ "./src/components/Feed/FeedConst.js":
/*!******************************************!*\
  !*** ./src/components/Feed/FeedConst.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedConfig: () => (/* binding */ FeedConfig)
/* harmony export */ });
/** 
 * 	@constant
    @type {Object}
*/
const FeedConfig = {
  feed: {
    all: {
      href: '/feed/all',
      name: 'Всё'
    },
    new: {
      href: '/feed/new',
      name: 'Новое'
    },
    chart: {
      href: '/feed/chart',
      name: 'Чарт'
    },
    playlists: {
      href: '/feed/playlists',
      name: 'Подборки'
    }
  },
  content: {
    first: {
      albumHref: '/feed/Oba',
      artistHref: '/feed/Mayot',
      name: 'Оба',
      artist: 'Mayot',
      image: './static/img/both.jpg'
    },
    second: {
      albumHref: '/feed/Fantasy_mixtape_vol.1',
      artistHref: '/feed/Skryptonite',
      name: 'Fantasy mixtape, vol.1',
      artist: 'Скриптонит',
      image: './static/img/skryp.jpg'
    },
    third: {
      albumHref: '/feed/LONG_LIVE_812',
      artistHref: '/feed/ALBLAK_52',
      name: 'LONG LIVE 812',
      artist: 'ALBLAK 52',
      image: './static/img/long live.jpg'
    },
    fourth: {
      albumHref: '/feed/PUSSY_BOY',
      artistHref: '/feed/ЕГОР_КРИД',
      name: 'PUSSY BOY',
      artist: 'ЕГОР КРИД',
      image: './static/img/Pussy_Boy.png'
    },
    fifth: {
      albumHref: '/feed/JAZZ_DO_IT',
      artistHref: '/feed/Toxi$',
      name: 'JAZZ DO IT',
      artist: 'Toxi$',
      image: './static/img/Jazz do it.png'
    },
    sixth: {
      albumHref: '/feed/Sense_Of_Human',
      artistHref: '/feed/Markul',
      name: 'Sense Of Human',
      artist: 'Markul',
      image: './static/img/sense of human.png'
    },
    seventh: {
      albumHref: '/feed/california_rocket_fuel_pt_1',
      artistHref: '/feed/Bumble_Beezy',
      name: 'california rocket fuel: pt. 1',
      artist: 'Bumble Beezy',
      image: './static/img/california.jpg'
    },
    eighth: {
      albumHref: '/feed/PHILARMONIA',
      artistHref: '/feed/PHARAOH',
      name: 'PHILARMONIA',
      artist: 'PHARAOH',
      image: './static/img/PHILARMONIA.png'
    }
  }
};

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _Header_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.hbs */ "./src/components/Header/Header.hbs");
/* harmony import */ var _Header_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Header_hbs__WEBPACK_IMPORTED_MODULE_0__);


/** Class representing a Header. */
class Header {
  #parent;
  #config;

  /**
      * Sets parent and config.
      * @param {HTMLElement} parent
      * @param {Object} config 
      */
  constructor(parent, config) {
    this.#parent = parent;
    this.#config = config;
  }

  /**
      * Get the config.
      * @return {Object} config.
      */
  get config() {
    return this.#config;
  }

  /**
      * Get the items.
      * @return {Object} items.
      */
  get items() {
    return Object.entries(this.config).map(([key, {
      href,
      name
    }]) => ({
      key,
      href,
      name
    }));
  }

  /**
     * Render header.
     */
  render(isAuth) {
    const items = this.items.map(element => {
      let className = 'menu__item';
      return {
        ...element,
        className
      };
    });
    this.#parent.innerHTML = _Header_hbs__WEBPACK_IMPORTED_MODULE_0___default()({
      items,
      isAuth
    });
  }
}

/***/ }),

/***/ "./src/components/Header/HeaderConst.js":
/*!**********************************************!*\
  !*** ./src/components/Header/HeaderConst.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderConfig: () => (/* binding */ HeaderConfig)
/* harmony export */ });
/** 
 * 	@constant
    @type {Object}
*/
const HeaderConfig = {
  main: {
    href: '/feed',
    name: 'Главное'
  },
  podcasts: {
    href: '/podcasts',
    name: 'Подкасты'
  },
  collection: {
    href: '/collection',
    name: 'Коллекция'
  }
};

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Login: () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _Login_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.hbs */ "./src/components/Login/Login.hbs");
/* harmony import */ var _Login_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Login_hbs__WEBPACK_IMPORTED_MODULE_0__);


/** Class representing a Login. */
class Login {
  #parent;
  #config;

  /**
      * Sets parent and config.
      * @param {HTMLElement} parent
      * @param {Object} config
      */
  constructor(parent, config) {
    this.#parent = parent;
    this.#config = config;
  }

  /**
      * Get the config.
      * @return {Object} config.
      */
  get config() {
    return this.#config;
  }

  /**
      * Get the items.
      * @return {Object} items.
      */
  get items() {
    return Object.entries(this.config).map(([key, {
      type,
      text,
      name
    }]) => ({
      key,
      type,
      text,
      name
    }));
  }

  /**
     * Render login page.
     */
  render() {
    const items = this.items.map(element => {
      let className = 'login__input';
      return {
        ...element,
        className
      };
    });
    this.#parent.innerHTML = _Login_hbs__WEBPACK_IMPORTED_MODULE_0___default()({
      items
    });
  }
}

/***/ }),

/***/ "./src/components/Login/LoginConst.js":
/*!********************************************!*\
  !*** ./src/components/Login/LoginConst.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginConfig: () => (/* binding */ LoginConfig)
/* harmony export */ });
/**
 *  @constant
*  @type {Object}
*/
const LoginConfig = {
  EmailInput: {
    type: 'email',
    text: 'Email',
    name: 'email'
  },
  PasswordInput: {
    type: 'password',
    text: 'Пароль',
    name: 'password'
  }
};

/***/ }),

/***/ "./src/components/SignUp/SignUp.js":
/*!*****************************************!*\
  !*** ./src/components/SignUp/SignUp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Signup: () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var _SignUp_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.hbs */ "./src/components/SignUp/SignUp.hbs");
/* harmony import */ var _SignUp_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SignUp_hbs__WEBPACK_IMPORTED_MODULE_0__);


/** Class representing a SignUp. */
class Signup {
  #parent;
  #config;

  /**
      * Sets parent and config.
      * @param {HTMLElement} parent
      * @param {Object} config 
      */
  constructor(parent, config) {
    this.#parent = parent;
    this.#config = config;
  }

  /**
      * Get the config.
      * @return {Object} config.
      */
  get config() {
    return this.#config;
  }

  /**
      * Get the items.
      * @return {Object} items.
      */
  get items() {
    return Object.entries(this.config).map(([key, {
      type,
      text,
      name
    }]) => ({
      key,
      type,
      text,
      name
    }));
  }

  /**
      * Render signup page.
      */
  render() {
    const items = this.items.map(element => {
      let className = 'Signup__input';
      return {
        ...element,
        className
      };
    });
    this.#parent.innerHTML = _SignUp_hbs__WEBPACK_IMPORTED_MODULE_0___default()({
      items
    });
  }
}

/***/ }),

/***/ "./src/components/SignUp/SignUpConst.js":
/*!**********************************************!*\
  !*** ./src/components/SignUp/SignUpConst.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpConfig: () => (/* binding */ SignUpConfig)
/* harmony export */ });
/** 
 * 	@constant
    @type {Object}
*/
const SignUpConfig = {
  UsernameInput: {
    type: 'username',
    text: 'Имя пользователя',
    name: 'username'
  },
  EmailInput: {
    type: 'email',
    text: 'Email',
    name: 'email'
  },
  PasswordInput: {
    type: 'password',
    text: 'Пароль',
    name: 'password'
  },
  PasswordCheckInput: {
    type: 'password',
    text: 'Повторите пароль',
    name: 'passwordCheck'
  },
  DateInput: {
    type: 'date',
    text: 'asd',
    name: 'date'
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ajax.js */ "./src/modules/ajax.js");
/* harmony import */ var _modules_ajax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_ajax_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var _components_Feed_Feed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Feed/Feed.js */ "./src/components/Feed/Feed.js");
/* harmony import */ var _components_Login_Login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Login/Login.js */ "./src/components/Login/Login.js");
/* harmony import */ var _components_SignUp_SignUp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SignUp/SignUp.js */ "./src/components/SignUp/SignUp.js");
/* harmony import */ var _components_Feed_FeedConst_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Feed/FeedConst.js */ "./src/components/Feed/FeedConst.js");
/* harmony import */ var _components_Header_HeaderConst_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header/HeaderConst.js */ "./src/components/Header/HeaderConst.js");
/* harmony import */ var _components_Login_LoginConst_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Login/LoginConst.js */ "./src/components/Login/LoginConst.js");
/* harmony import */ var _components_SignUp_SignUpConst_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SignUp/SignUpConst.js */ "./src/components/SignUp/SignUpConst.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/index.css");











/** 
 * @constant
    @type {string}
*/
const HOST = 'http://82.146.45.164';

/** 
 * @constant
    @type {string}
*/
const PORT = ':8080';

/** 
* @constant
* @type {Object}
*/
const routeConfig = {
  '/feed': {
    name: 'Главное',
    render: renderFeed
  },
  '/podcasts': {
    name: 'Подкасты',
    render: renderPodcasts
  },
  '/collection': {
    name: 'Коллекция',
    render: renderCollection
  },
  '/login': {
    name: 'Логин',
    render: renderLogin
  },
  '/signup': {
    name: 'Регистрация',
    render: renderSignUp
  },
  '/signout': {
    name: 'Выйти',
    render: renderSignout
  }
};
const rootElement = document.querySelector('#root');
const menuElement = document.createElement('div');
const pageElement = document.createElement('main');
rootElement.appendChild(menuElement);
rootElement.appendChild(pageElement);
const header = new _components_Header_Header_js__WEBPACK_IMPORTED_MODULE_1__.Header(menuElement, _components_Header_HeaderConst_js__WEBPACK_IMPORTED_MODULE_6__.HeaderConfig);
const feed = new _components_Feed_Feed_js__WEBPACK_IMPORTED_MODULE_2__.Feed(pageElement, _components_Feed_FeedConst_js__WEBPACK_IMPORTED_MODULE_5__.FeedConfig.feed, _components_Feed_FeedConst_js__WEBPACK_IMPORTED_MODULE_5__.FeedConfig.content);
const login = new _components_Login_Login_js__WEBPACK_IMPORTED_MODULE_3__.Login(pageElement, _components_Login_LoginConst_js__WEBPACK_IMPORTED_MODULE_7__.LoginConfig);
const signup = new _components_SignUp_SignUp_js__WEBPACK_IMPORTED_MODULE_4__.Signup(pageElement, _components_SignUp_SignUpConst_js__WEBPACK_IMPORTED_MODULE_8__.SignUpConfig);
let isAuth = false;
renderFeed();

/**
* Renders home page.
*/
function renderFeed() {
  window.Ajax.get({
    url: HOST + PORT + '/home',
    id: localStorage.getItem('id')
  }).then(({
    status,
    parsedJson
  }) => {
    if (status === 200) {
      if (parsedJson.id) {
        isAuth = true;
      }
      return;
    }
    alert('Ошибка при регистрации!');
  });
  header.render(isAuth);
  feed.render();
}

/**
 * Renders Signup page.
 */
function renderSignUp() {
  signup.render();
  const signupForm = document.querySelector('form');
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signupForm.elements.email.value;
    const password = signupForm.elements.password.value;
    const passwordCheck = signupForm.elements.passwordCheck.value;
    const birthDate = signupForm.elements.date.value;
    const username = signupForm.elements.username.value;
    if (password == passwordCheck) {
      document.querySelector('[name="passcheck"]').style = 'visibility: hidden';
      signupForm.elements.password.style = 'border-color: #FFFFFF';
      signupForm.elements.passwordCheck.style = 'border-color: #FFFFFF';
      window.Ajax.post({
        url: HOST + PORT + '/sign_up',
        body: {
          email,
          username,
          password,
          birthDate
        }
      }).then(({
        status,
        parsedJson
      }) => {
        if (status === 200) {
          isAuth = true;
          localStorage.setItem('id', parsedJson.id);
          goToPage(document.getElementsByName('/feed')[0]);
          return;
        } else if (status >= 400) {
          goToPage(document.getElementsByName('/feed')[0]);
          return;
        }
        alert('Ошибка при регистрации!');
      });
    } else {
      document.querySelector('[name="passcheck"]').style = 'visibility: visible';
      signupForm.elements.password.style = 'border-color: #EF5858';
      signupForm.elements.passwordCheck.style = 'border-color: #EF5858';
    }
  });
}

/**
 * Renders Login page.
 */
function renderLogin() {
  login.render();
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;
    window.Ajax.post({
      url: HOST + PORT + '/login',
      body: {
        email,
        password
      }
    }).then(({
      status,
      parsedJson
    }) => {
      if (status === 200) {
        localStorage.setItem('id', parsedJson.id);
        isAuth = true;
        goToPage(document.getElementsByName('/feed')[0]);
        return;
      }
      alert('Неверное имя пользователя или пароль!');
    });
  });
}

/**
 * Renders Podcasts page.
 */
function renderPodcasts() {}

/**
 * Renders Collection page.
 */
function renderCollection() {}

/**
 * Renders Signout page.
 */
function renderSignout() {
  window.Ajax.get({
    url: HOST + PORT + '/signout'
  }).then(({
    status,
    parsedJson
  }) => {
    if (status === 200) {
      isAuth = false;
      localStorage.setItem('id', null);
      goToPage(document.getElementsByName('/feed')[0]);
      return;
    }
    console.log(parsedJson.err);
    alert('Неверное имя пользователя или пароль!');
  });
}

/**
 * Goes to another page
 * @param {HTMLAnchorElement} Link 
 */
function goToPage(Link) {
  menuElement.innerHTML = '';
  pageElement.innerHTML = '';
  for (let href in routeConfig) {
    if (Link.getAttribute('data-section') === href) {
      routeConfig[href].render(isAuth);
    }
  }
}
rootElement.addEventListener('click', e => {
  const {
    target
  } = e;
  if (target instanceof HTMLAnchorElement || target instanceof HTMLButtonElement && target.getAttribute('data-section') === '/login') {
    e.preventDefault();
    goToPage(e.target);
  }
});

/***/ }),

/***/ "./src/modules/ajax.js":
/*!*****************************!*\
  !*** ./src/modules/ajax.js ***!
  \*****************************/
/***/ (() => {

// Демонстрация модулей на IIFE. Это устаревшая концепция, но прекрасно работает до сих пор
(function () {
  /**
  *  @constant
  *  @type {Object}
  */
  const AJAX_METHODS = {
    GET: 'GET',
    POST: 'POST'
  };

  /** Class representing Ajax module. */
  class Ajax {
    /**
     * Makes get request.
     * @async
     * @function get
     * @param {Object} params
     * @return {Object} status and parsedJson
     */
    async get(params = {}) {
      const response = await fetch(params.url, {
        method: AJAX_METHODS.GET,
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
      const parsedBody = await response.json();
      return {
        status: response.status,
        parsedJson: parsedBody
      };
    }

    /**
     * Makes post request.
     * @async
     * @function post
     * @param {Object} params
     * @return {Object} status and parsedJson
     */
    async post(params = {}) {
      const response = await fetch(params.url, {
        method: AJAX_METHODS.POST,
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(params.body)
      });
      const parsedBody = await response.json();
      return {
        status: response.status,
        parsedJson: parsedBody
      };
    }
  }
  window.Ajax = new Ajax();
})();

/***/ }),

/***/ "./src/components/Feed/Feed.hbs":
/*!**************************************!*\
  !*** ./src/components/Feed/Feed.hbs ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n            <a class=\"feeda\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"href") : depth0), depth0))
    + "\" data-section=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"key") : depth0), depth0))
    + "\">\n                "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\n            </a>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"albumHref") : depth0), depth0))
    + "\" >\n                <img class=\"contentPhoto\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image") : depth0), depth0))
    + "\" alt=\"1\">\n                <p class=\"songName\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</p>\n            </a>\n            <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"artistHref") : depth0), depth0))
    + "\" ><p class=\"artistName\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"artist") : depth0), depth0))
    + "</p></a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"feedText\">Главное</div>\n<ul class=\"feed\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n\n<h1>Новые треки, альбомы и сборники</h1>\n\n<ul class=\"content\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n    ";
},"useData":true});

/***/ }),

/***/ "./src/components/Header/Header.hbs":
/*!******************************************!*\
  !*** ./src/components/Header/Header.hbs ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n                <a class=\"headera\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"href") : depth0), depth0))
    + "\" data-section=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"href") : depth0), depth0))
    + "\">\n                    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\n                </a>\n            </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <li class=\"menu__item\">\n            <div class=\"profile\">\n                <a href=\"/profile\"><img class=\"imgAvatar\" src=\"worm.jpg\" alt=\"\"></a>\n                <a class=\"signout\" href=\"/signout\" data-section=\"/signout\">\n                    Выйти\n                </a>\n            </div>\n        </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <li class=\"menu__item\">\n            <a href=\"login\" data-section=\"/login\" ><button class=\"loginButton\" data-section=\"/login\">Войти</button></a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"asd\">\n    <ul class=\"menu\">\n        <li class=\"menu__item\">\n            <a href=\"\"><img class=\"imgLogo\" src=\"./static/img/Logo.svg\" alt=\"\"></a>\n            <div class=\"logoText\">MusicOn</div>    \n        </li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "        <li class=\"menu__item\"><img src=\"./static/img/Loupe.svg\" alt=\"\"></li>\n        <li class=\"menu__item\">\n            <form class=\"input_search\"> \n                <input type=\"text\" data-section=\"text\" class=\"search\" placeholder =\"Введите название песни или альбома\">\n            </form>\n        </li>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAuth") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":33,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./src/components/Login/Login.hbs":
/*!****************************************!*\
  !*** ./src/components/Login/Login.hbs ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"login__item\">\n                <input class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\" placeholder=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"text") : depth0), depth0))
    + "\" required >\n            </li> \n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container\">\n    <ul class=\"login\">\n         <div class=\"container\">\n            <li class=\"login__item\">\n            <a data-section=\"/feed\" href=\"\"><img class=\"imgLogo\" src=\"./static/img/Logo.svg\" alt=\"\"></a>\n            <div class=\"logoText\">MusicOn</div>    \n            </li>\n         </div>\n        <form method=\"post\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "            <li class=\"login__item\">\n                <button class=\"SubmitLoginButton\" type=\"submit\">Войти</button>\n            </li>\n        \n        </form>\n        <li class=\"login__item\">\n            <div class=\"yet\">\n            Ещё нет учётной записи?\n            <a data-section=\"/signup\" class=\"yeta\" href=\"/login\">Зарегистрируйтесь</a>\n            </div>\n        </li>\n        \n        \n    </ul>\n</div>\n\n    ";
},"useData":true});

/***/ }),

/***/ "./src/components/SignUp/SignUp.hbs":
/*!******************************************!*\
  !*** ./src/components/SignUp/SignUp.hbs ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"login__item\">\n                <input class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\" type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" placeholder=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"text") : depth0), depth0))
    + "\" required >\n            </li> \n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container\">\n    <ul class=\"signup\">\n         <div class=\"container\">\n            <li class=\"login__item\">\n            <a data-section=\"/feed\" href=\"\"><img class=\"imgLogo\" src=\"./static/img/Logo.svg\" alt=\"\"></a>\n            <div class=\"logoText\">MusicOn</div>    \n            </li>\n         </div>\n        <form method=\"post\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "            <li class=\"login__item\">\n                <div class=\"passcheck\" data-section=\"passcheck\" >Пароли не совпадают!</div>\n            </li>\n            <li class=\"login__item\">\n                <button class=\"SubmitLoginButton\" type=\"submit\">Зарегистрироваться</button>\n            </li>\n        </form>\n        <li class=\"login__item\">\n            <div class=\"yet\">\n            Уже есть учетная запись?\n            <a data-section=\"/login\" class=\"yeta\" href=\"/login\">Войдите</a>\n            </div>\n        </li>\n    </ul>\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaddo"] = self["webpackChunkaddo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvRmVlZC9GZWVkLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9GZWVkL0ZlZWRDb25zdC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckNvbnN0LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW5Db25zdC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcENvbnN0LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9tb2R1bGVzL2FqYXguanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0ZlZWQvRmVlZC5oYnMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuaGJzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5oYnMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL1NpZ25VcC9TaWduVXAuaGJzIiwid2VicGFjazovL2FkZG8vLi9zcmMvaW5kZXguY3NzP2E0YjciLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FkZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FkZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0ZlZWQuaGJzJztcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIEZlZWQuICovXG5leHBvcnQgY2xhc3MgRmVlZCB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWdGZWVkO1xuXHQjY29uZmlnQ29udGVudDtcblxuXHQvKipcbiAgICAgKiBTZXRzIHBhcmVudCBhbmQgY29uZmlnLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdGZWVkIFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnQ29udGVudCBcbiAgICAgKi9cblx0Y29uc3RydWN0b3IocGFyZW50LCBjb25maWdGZWVkLCBjb25maWdDb250ZW50KSB7XG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI2NvbmZpZ0ZlZWQgPSBjb25maWdGZWVkO1xuXHRcdHRoaXMuI2NvbmZpZ0NvbnRlbnQgPSBjb25maWdDb250ZW50O1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBjb25maWdGZWVkLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnRmVlZC5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZ0ZlZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbmZpZ0ZlZWQ7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZ0NvbnRlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb25maWdDb250ZW50LlxuICAgICAqL1xuXHRnZXQgY29uZmlnQ29udGVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnQ29udGVudDtcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgaXRlbXMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBpdGVtcy5cbiAgICAgKi9cblx0Z2V0IGl0ZW1zKCkge1xuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZ0ZlZWQpLm1hcCgoW2tleSwgeyBocmVmLCBuYW1lfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHRocmVmLFxuXHRcdFx0bmFtZSwgXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBjb250ZW50LlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gY29udGVudC5cbiAgICAgKi9cblx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnQ29udGVudCkubWFwKChba2V5LCB7IGFsYnVtSHJlZiwgYXJ0aXN0SHJlZiwgbmFtZSwgYXJ0aXN0LCBpbWFnZX1dKSA9PiAoe1xuXHRcdFx0a2V5LFxuXHRcdFx0YWxidW1IcmVmLFxuXHRcdFx0YXJ0aXN0SHJlZixcblx0XHRcdG5hbWUsXG5cdFx0XHRhcnRpc3QsXG5cdFx0XHRpbWFnZSxcblx0XHR9KSk7XG5cdH1cblxuXHQvKipcbiAgICAqIFJlbmRlciBoZWFkZXIuXG4gICAgKi9cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdGxldCBjbGFzc05hbWUgPSAnZmVlZF9faXRlbSc7XG5cdFx0XHRyZXR1cm4gey4uLmVsZW1lbnQsIGNsYXNzTmFtZX07XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50Lm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdjb250ZW50X19pdGVtJztcblx0XHRcdHJldHVybiB7Li4uZWxlbWVudCwgY2xhc3NOYW1lfTtcblx0XHR9KTtcblxuXHRcdHRoaXMuI3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7aXRlbXMsIGNvbnRlbnR9KTtcblx0fVxufSIsIi8qKiBcbiAqIFx0QGNvbnN0YW50XG4gICAgQHR5cGUge09iamVjdH1cbiovXG5leHBvcnQgY29uc3QgRmVlZENvbmZpZyA9IHtcblx0ZmVlZDoge1xuXHRcdGFsbDoge1xuXHRcdFx0aHJlZjogJy9mZWVkL2FsbCcsXG5cdFx0XHRuYW1lOiAn0JLRgdGRJyxcblx0XHR9LFxuXHRcdG5ldzoge1xuXHRcdFx0aHJlZjogJy9mZWVkL25ldycsXG5cdFx0XHRuYW1lOiAn0J3QvtCy0L7QtScsXG5cdFx0fSxcblx0XHRjaGFydDoge1xuXHRcdFx0aHJlZjogJy9mZWVkL2NoYXJ0Jyxcblx0XHRcdG5hbWU6ICfQp9Cw0YDRgicsXG5cdFx0fSxcblx0XHRwbGF5bGlzdHM6IHtcblx0XHRcdGhyZWY6ICcvZmVlZC9wbGF5bGlzdHMnLFxuXHRcdFx0bmFtZTogJ9Cf0L7QtNCx0L7RgNC60LgnLFxuXHRcdH1cblx0fSxcblx0Y29udGVudDoge1xuXHRcdGZpcnN0OiB7XG5cdFx0XHRhbGJ1bUhyZWY6ICcvZmVlZC9PYmEnLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL01heW90Jyxcblx0XHRcdG5hbWU6ICfQntCx0LAnLFxuXHRcdFx0YXJ0aXN0OiAnTWF5b3QnLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvYm90aC5qcGcnXG5cdFx0fSxcblx0XHRzZWNvbmQ6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL0ZhbnRhc3lfbWl4dGFwZV92b2wuMScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvU2tyeXB0b25pdGUnLFxuXHRcdFx0bmFtZTogJ0ZhbnRhc3kgbWl4dGFwZSwgdm9sLjEnLFxuXHRcdFx0YXJ0aXN0OiAn0KHQutGA0LjQv9GC0L7QvdC40YInLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvc2tyeXAuanBnJyxcblx0XHR9LFxuXHRcdHRoaXJkOiB7XG5cdFx0XHRhbGJ1bUhyZWY6ICcvZmVlZC9MT05HX0xJVkVfODEyJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC9BTEJMQUtfNTInLFxuXHRcdFx0bmFtZTogJ0xPTkcgTElWRSA4MTInLFxuXHRcdFx0YXJ0aXN0OiAnQUxCTEFLIDUyJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL2xvbmcgbGl2ZS5qcGcnXG5cdFx0fSxcblx0XHRmb3VydGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL1BVU1NZX0JPWScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQv0JXQk9Ce0KBf0JrQoNCY0JQnLFxuXHRcdFx0bmFtZTogJ1BVU1NZIEJPWScsXG5cdFx0XHRhcnRpc3Q6ICfQldCT0J7QoCDQmtCg0JjQlCcsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9QdXNzeV9Cb3kucG5nJ1xuXHRcdH0sXG5cdFx0ZmlmdGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL0pBWlpfRE9fSVQnLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL1RveGkkJyxcblx0XHRcdG5hbWU6ICdKQVpaIERPIElUJyxcblx0XHRcdGFydGlzdDogJ1RveGkkJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL0phenogZG8gaXQucG5nJ1xuXHRcdH0sXG5cdFx0c2l4dGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL1NlbnNlX09mX0h1bWFuJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC9NYXJrdWwnLFxuXHRcdFx0bmFtZTogJ1NlbnNlIE9mIEh1bWFuJyxcblx0XHRcdGFydGlzdDogJ01hcmt1bCcsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9zZW5zZSBvZiBodW1hbi5wbmcnXG5cdFx0fSxcblx0XHRzZXZlbnRoOiB7XG5cdFx0XHRhbGJ1bUhyZWY6ICcvZmVlZC9jYWxpZm9ybmlhX3JvY2tldF9mdWVsX3B0XzEnLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL0J1bWJsZV9CZWV6eScsXG5cdFx0XHRuYW1lOiAnY2FsaWZvcm5pYSByb2NrZXQgZnVlbDogcHQuIDEnLFxuXHRcdFx0YXJ0aXN0OiAnQnVtYmxlIEJlZXp5Jyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL2NhbGlmb3JuaWEuanBnJ1xuXHRcdH0sXG5cdFx0ZWlnaHRoOiB7XG5cdFx0XHRhbGJ1bUhyZWY6ICcvZmVlZC9QSElMQVJNT05JQScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvUEhBUkFPSCcsXG5cdFx0XHRuYW1lOiAnUEhJTEFSTU9OSUEnLFxuXHRcdFx0YXJ0aXN0OiAnUEhBUkFPSCcsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9QSElMQVJNT05JQS5wbmcnXG5cdFx0fSxcblx0fSxcbn07XG4iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9IZWFkZXIuaGJzJztcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIEhlYWRlci4gKi9cbmV4cG9ydCBjbGFzcyBIZWFkZXIge1xuXHQjcGFyZW50O1xuXHQjY29uZmlnO1xuXG5cdC8qKlxuICAgICAqIFNldHMgcGFyZW50IGFuZCBjb25maWcuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBcbiAgICAgKi9cblx0Y29uc3RydWN0b3IocGFyZW50LCBjb25maWcpIHtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy4jY29uZmlnID0gY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBjb25maWcuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb25maWcuXG4gICAgICovXG5cdGdldCBjb25maWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbmZpZztcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgaXRlbXMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBpdGVtcy5cbiAgICAgKi9cblx0Z2V0IGl0ZW1zKCkge1xuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZykubWFwKChba2V5LCB7IGhyZWYsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdGhyZWYsXG5cdFx0XHRuYW1lLFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICogUmVuZGVyIGhlYWRlci5cbiAgICAqL1xuXHRyZW5kZXIoaXNBdXRoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdtZW51X19pdGVtJztcblx0XHRcdHJldHVybiB7Li4uZWxlbWVudCwgY2xhc3NOYW1lfTtcblx0XHR9KTtcblxuXHRcdHRoaXMuI3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7aXRlbXMsIGlzQXV0aH0pO1xuXHR9XG59IiwiLyoqIFxuICogXHRAY29uc3RhbnRcbiAgICBAdHlwZSB7T2JqZWN0fVxuKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJDb25maWcgPSB7XG5cdG1haW46IHtcblx0XHRocmVmOiAnL2ZlZWQnLFxuXHRcdG5hbWU6ICfQk9C70LDQstC90L7QtScsXG5cdH0sXG5cdHBvZGNhc3RzOiB7XG5cdFx0aHJlZjogJy9wb2RjYXN0cycsXG5cdFx0bmFtZTogJ9Cf0L7QtNC60LDRgdGC0YsnLFxuXHR9LFxuXHRjb2xsZWN0aW9uOiB7XG5cdFx0aHJlZjogJy9jb2xsZWN0aW9uJyxcblx0XHRuYW1lOiAn0JrQvtC70LvQtdC60YbQuNGPJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9Mb2dpbi5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgTG9naW4uICovXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuXHQjcGFyZW50O1xuXHQjY29uZmlnO1xuXG5cdC8qKlxuICAgICAqIFNldHMgcGFyZW50IGFuZCBjb25maWcuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHt0eXBlLCB0ZXh0LCBuYW1lfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHR0eXBlLFxuXHRcdFx0dGV4dCxcblx0XHRcdG5hbWUsIFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICogUmVuZGVyIGxvZ2luIHBhZ2UuXG4gICAgKi9cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdGxldCBjbGFzc05hbWUgPSAnbG9naW5fX2lucHV0Jztcblx0XHRcdHJldHVybiB7Li4uZWxlbWVudCwgY2xhc3NOYW1lfTtcblx0XHR9KTtcblxuXHRcdHRoaXMuI3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7aXRlbXN9KTtcblx0fVxufSIsIi8qKlxuICogIEBjb25zdGFudFxuKiAgQHR5cGUge09iamVjdH1cbiovXG5leHBvcnQgY29uc3QgTG9naW5Db25maWcgPSB7XG5cdEVtYWlsSW5wdXQ6IHtcblx0XHR0eXBlOiAnZW1haWwnLFxuXHRcdHRleHQ6ICdFbWFpbCcsXG5cdFx0bmFtZTogJ2VtYWlsJyxcblx0fSxcblx0UGFzc3dvcmRJbnB1dDoge1xuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dGV4dDogJ9Cf0LDRgNC+0LvRjCcsXG5cdFx0bmFtZTogJ3Bhc3N3b3JkJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9TaWduVXAuaGJzJztcblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIFNpZ25VcC4gKi9cbmV4cG9ydCBjbGFzcyBTaWdudXAge1xuXHQjcGFyZW50O1xuXHQjY29uZmlnO1xuXG5cdC8qKlxuICAgICAqIFNldHMgcGFyZW50IGFuZCBjb25maWcuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBcbiAgICAgKi9cblx0Y29uc3RydWN0b3IocGFyZW50LCBjb25maWcpIHtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy4jY29uZmlnID0gY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBjb25maWcuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb25maWcuXG4gICAgICovXG5cdGdldCBjb25maWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbmZpZztcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgaXRlbXMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBpdGVtcy5cbiAgICAgKi9cblx0Z2V0IGl0ZW1zKCkge1xuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZykubWFwKChba2V5LCB7dHlwZSwgdGV4dCwgbmFtZX1dKSA9PiAoe1xuXHRcdFx0a2V5LFxuXHRcdFx0dHlwZSxcblx0XHRcdHRleHQsXG5cdFx0XHRuYW1lLCBcblx0XHR9KSk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBSZW5kZXIgc2lnbnVwIHBhZ2UuXG4gICAgICovXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gJ1NpZ251cF9faW5wdXQnO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtc30pO1xuXHR9XG59XG4iLCIvKiogXG4gKiBcdEBjb25zdGFudFxuICAgIEB0eXBlIHtPYmplY3R9XG4qL1xuZXhwb3J0IGNvbnN0IFNpZ25VcENvbmZpZyA9IHtcblx0VXNlcm5hbWVJbnB1dDoge1xuXHRcdHR5cGU6ICd1c2VybmFtZScsXG5cdFx0dGV4dDogJ9CY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nLFxuXHRcdG5hbWU6ICd1c2VybmFtZScsXG5cdH0sXG5cdEVtYWlsSW5wdXQ6IHtcblx0XHR0eXBlOiAnZW1haWwnLFxuXHRcdHRleHQ6ICdFbWFpbCcsXG5cdFx0bmFtZTogJ2VtYWlsJyxcblx0fSxcblx0UGFzc3dvcmRJbnB1dDoge1xuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dGV4dDogJ9Cf0LDRgNC+0LvRjCcsXG5cdFx0bmFtZTogJ3Bhc3N3b3JkJyxcblx0fSxcblx0UGFzc3dvcmRDaGVja0lucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QvtCy0YLQvtGA0LjRgtC1INC/0LDRgNC+0LvRjCcsXG5cdFx0bmFtZTogJ3Bhc3N3b3JkQ2hlY2snLFxuXHR9LFxuXHREYXRlSW5wdXQ6IHtcblx0XHR0eXBlOiAnZGF0ZScsXG5cdFx0dGV4dDogJ2FzZCcsXG5cdFx0bmFtZTogJ2RhdGUnLFxuXHR9LFxufTtcbiIsImltcG9ydCAnLi9tb2R1bGVzL2FqYXguanMnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMnO1xuaW1wb3J0IHsgRmVlZCB9IGZyb20gJy4vY29tcG9uZW50cy9GZWVkL0ZlZWQuanMnO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMnO1xuaW1wb3J0IHsgU2lnbnVwIH0gZnJvbSAnLi9jb21wb25lbnRzL1NpZ25VcC9TaWduVXAuanMnO1xuaW1wb3J0IHsgRmVlZENvbmZpZyB9IGZyb20gJy4vY29tcG9uZW50cy9GZWVkL0ZlZWRDb25zdC5qcyc7XG5pbXBvcnQgeyBIZWFkZXJDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckNvbnN0LmpzJztcbmltcG9ydCB7IExvZ2luQ29uZmlnIH0gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29uc3QuanMnO1xuaW1wb3J0IHsgU2lnblVwQ29uZmlnIH0gZnJvbSAnLi9jb21wb25lbnRzL1NpZ25VcC9TaWduVXBDb25zdC5qcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLyoqIFxuICogQGNvbnN0YW50XG4gICAgQHR5cGUge3N0cmluZ31cbiovXG5jb25zdCBIT1NUID0gJ2h0dHA6Ly84Mi4xNDYuNDUuMTY0JztcblxuLyoqIFxuICogQGNvbnN0YW50XG4gICAgQHR5cGUge3N0cmluZ31cbiovXG5jb25zdCBQT1JUID0gJzo4MDgwJztcblxuLyoqIFxuKiBAY29uc3RhbnRcbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCByb3V0ZUNvbmZpZyA9IHtcblx0Jy9mZWVkJzoge1xuXHRcdG5hbWU6ICfQk9C70LDQstC90L7QtScsXG5cdFx0cmVuZGVyOiByZW5kZXJGZWVkLFxuXHR9LFxuXHQnL3BvZGNhc3RzJzoge1xuXHRcdG5hbWU6ICfQn9C+0LTQutCw0YHRgtGLJyxcblx0XHRyZW5kZXI6IHJlbmRlclBvZGNhc3RzLFxuXHR9LFxuXHQnL2NvbGxlY3Rpb24nOiB7XG5cdFx0bmFtZTogJ9Ca0L7Qu9C70LXQutGG0LjRjycsXG5cdFx0cmVuZGVyOiByZW5kZXJDb2xsZWN0aW9uLFxuXHR9LFxuXHQnL2xvZ2luJzoge1xuXHRcdG5hbWU6ICfQm9C+0LPQuNC9Jyxcblx0XHRyZW5kZXI6IHJlbmRlckxvZ2luLFxuXHR9LFxuXHQnL3NpZ251cCc6IHtcblx0XHRuYW1lOiAn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjycsXG5cdFx0cmVuZGVyOiByZW5kZXJTaWduVXAsXG5cdH0sXG5cdCcvc2lnbm91dCc6IHtcblx0XHRuYW1lOiAn0JLRi9C50YLQuCcsXG5cdFx0cmVuZGVyOiByZW5kZXJTaWdub3V0LFxuXHR9LFxufTtcblxuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG5jb25zdCBtZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5yb290RWxlbWVudC5hcHBlbmRDaGlsZChtZW51RWxlbWVudCk7XG5yb290RWxlbWVudC5hcHBlbmRDaGlsZChwYWdlRWxlbWVudCk7XG5cbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIobWVudUVsZW1lbnQsIEhlYWRlckNvbmZpZyk7XG5jb25zdCBmZWVkID0gbmV3IEZlZWQocGFnZUVsZW1lbnQsIEZlZWRDb25maWcuZmVlZCwgRmVlZENvbmZpZy5jb250ZW50KTtcbmNvbnN0IGxvZ2luID0gbmV3IExvZ2luKHBhZ2VFbGVtZW50LCBMb2dpbkNvbmZpZyk7XG5jb25zdCBzaWdudXAgPSBuZXcgU2lnbnVwKHBhZ2VFbGVtZW50LCBTaWduVXBDb25maWcpO1xubGV0IGlzQXV0aCA9IGZhbHNlO1xuXG5yZW5kZXJGZWVkKCk7XG5cblxuLyoqXG4qIFJlbmRlcnMgaG9tZSBwYWdlLlxuKi9cbmZ1bmN0aW9uIHJlbmRlckZlZWQoKSB7XG5cdHdpbmRvdy5BamF4LmdldCh7XG5cdFx0dXJsOiBIT1NUICsgUE9SVCArICcvaG9tZScsXG5cdFx0aWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLFxuXHR9KVxuXHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRpZiAoc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0aWYgKHBhcnNlZEpzb24uaWQpIHtcblx0XHRcdFx0XHRpc0F1dGggPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGFsZXJ0KCfQntGI0LjQsdC60LAg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LghJyk7XG5cdFx0fSk7XG5cdGhlYWRlci5yZW5kZXIoaXNBdXRoKTtcblx0ZmVlZC5yZW5kZXIoKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIFNpZ251cCBwYWdlLlxuICovXG5mdW5jdGlvbiByZW5kZXJTaWduVXAoKSB7XG5cdHNpZ251cC5yZW5kZXIoKTtcblx0Y29uc3Qgc2lnbnVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuXHRzaWdudXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgZW1haWwgPSBzaWdudXBGb3JtLmVsZW1lbnRzLmVtYWlsLnZhbHVlO1xuXHRcdGNvbnN0IHBhc3N3b3JkID0gc2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC52YWx1ZTtcblx0XHRjb25zdCBwYXNzd29yZENoZWNrID0gc2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnZhbHVlO1xuXHRcdGNvbnN0IGJpcnRoRGF0ZSA9IHNpZ251cEZvcm0uZWxlbWVudHMuZGF0ZS52YWx1ZTtcblx0XHRjb25zdCB1c2VybmFtZSA9IHNpZ251cEZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWU7XG5cblx0XHRpZiAocGFzc3dvcmQgPT0gcGFzc3dvcmRDaGVjaykge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzY2hlY2tcIl0nKS5zdHlsZSA9ICd2aXNpYmlsaXR5OiBoaWRkZW4nO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC5zdHlsZSA9ICdib3JkZXItY29sb3I6ICNGRkZGRkYnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0ZGRkZGRic7XG5cblx0XHRcdHdpbmRvdy5BamF4LnBvc3Qoe1xuXHRcdFx0XHR1cmw6IEhPU1QgKyBQT1JUICsgJy9zaWduX3VwJyxcblx0XHRcdFx0Ym9keTogeyBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBiaXJ0aERhdGUgfSxcblx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRpc0F1dGggPSB0cnVlO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcGFyc2VkSnNvbi5pZCk7XG5cdFx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnL2ZlZWQnKVswXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnL2ZlZWQnKVswXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFsZXJ0KCfQntGI0LjQsdC60LAg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LghJyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3NjaGVja1wiXScpLnN0eWxlID0gJ3Zpc2liaWxpdHk6IHZpc2libGUnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC5zdHlsZSA9ICdib3JkZXItY29sb3I6ICNFRjU4NTgnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0VGNTg1OCc7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG4vKipcbiAqIFJlbmRlcnMgTG9naW4gcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTG9naW4oKSB7XG5cdGxvZ2luLnJlbmRlcigpO1xuXG5cdGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuXHRsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbWFpbCA9IGxvZ2luRm9ybS5lbGVtZW50cy5lbWFpbC52YWx1ZTtcblx0XHRjb25zdCBwYXNzd29yZCA9IGxvZ2luRm9ybS5lbGVtZW50cy5wYXNzd29yZC52YWx1ZTtcblxuXHRcdHdpbmRvdy5BamF4LnBvc3Qoe1xuXHRcdFx0dXJsOiBIT1NUICsgUE9SVCArICcvbG9naW4nLFxuXHRcdFx0Ym9keTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHsgc3RhdHVzLCBwYXJzZWRKc29uIH0pID0+IHtcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcGFyc2VkSnNvbi5pZCk7XG5cdFx0XHRcdFx0aXNBdXRoID0gdHJ1ZTtcblx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnL2ZlZWQnKVswXSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFsZXJ0KCfQndC10LLQtdGA0L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQu9C4INC/0LDRgNC+0LvRjCEnKTtcblx0XHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIFBvZGNhc3RzIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclBvZGNhc3RzKCkge1xuXG59XG5cbi8qKlxuICogUmVuZGVycyBDb2xsZWN0aW9uIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbGxlY3Rpb24oKSB7XG5cbn1cblxuLyoqXG4gKiBSZW5kZXJzIFNpZ25vdXQgcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2lnbm91dCgpIHtcblx0d2luZG93LkFqYXguZ2V0KHtcblx0XHR1cmw6IEhPU1QgKyBQT1JUICsgJy9zaWdub3V0Jyxcblx0fSlcblx0XHQudGhlbigoeyBzdGF0dXMsIHBhcnNlZEpzb24gfSkgPT4ge1xuXHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdGlzQXV0aCA9IGZhbHNlO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBudWxsKTtcblx0XHRcdFx0Z29Ub1BhZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJy9mZWVkJylbMF0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhwYXJzZWRKc29uLmVycik7XG5cdFx0XHRhbGVydCgn0J3QtdCy0LXRgNC90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCDQv9Cw0YDQvtC70YwhJyk7XG5cdFx0fSk7XG59XG5cbi8qKlxuICogR29lcyB0byBhbm90aGVyIHBhZ2VcbiAqIEBwYXJhbSB7SFRNTEFuY2hvckVsZW1lbnR9IExpbmsgXG4gKi9cbmZ1bmN0aW9uIGdvVG9QYWdlKExpbmspIHtcblx0bWVudUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdHBhZ2VFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG5cdGZvciAobGV0IGhyZWYgaW4gcm91dGVDb25maWcpIHtcblx0XHRpZiAoTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VjdGlvbicpID09PSBocmVmKSB7XG5cdFx0XHRyb3V0ZUNvbmZpZ1tocmVmXS5yZW5kZXIoaXNBdXRoKTtcblx0XHR9XG5cdH1cbn1cblxucm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRjb25zdCB7IHRhcmdldCB9ID0gZTtcblxuXHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VjdGlvbicpID09PSAnL2xvZ2luJykpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Z29Ub1BhZ2UoZS50YXJnZXQpO1xuXHR9XG59KTtcbiIsIi8vINCU0LXQvNC+0L3RgdGC0YDQsNGG0LjRjyDQvNC+0LTRg9C70LXQuSDQvdCwIElJRkUuINCt0YLQviDRg9GB0YLQsNGA0LXQstGI0LDRjyDQutC+0L3RhtC10L/RhtC40Y8sINC90L4g0L/RgNC10LrRgNCw0YHQvdC+INGA0LDQsdC+0YLQsNC10YIg0LTQviDRgdC40YUg0L/QvtGAXG4oZnVuY3Rpb24gKCkge1xuXHRcblx0LyoqXG5cdCogIEBjb25zdGFudFxuXHQqICBAdHlwZSB7T2JqZWN0fVxuXHQqL1xuXHRjb25zdCBBSkFYX01FVEhPRFMgPSB7XG5cdFx0R0VUOiAnR0VUJyxcblx0XHRQT1NUOiAnUE9TVCcsXG5cdH07XG5cblx0LyoqIENsYXNzIHJlcHJlc2VudGluZyBBamF4IG1vZHVsZS4gKi9cblx0Y2xhc3MgQWpheCB7XG5cblx0XHQvKipcblx0XHQgKiBNYWtlcyBnZXQgcmVxdWVzdC5cblx0XHQgKiBAYXN5bmNcblx0XHQgKiBAZnVuY3Rpb24gZ2V0XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gc3RhdHVzIGFuZCBwYXJzZWRKc29uXG5cdFx0ICovXG5cdFx0YXN5bmMgZ2V0KHBhcmFtcyA9IHt9KSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBhcmFtcy51cmwsIHtcblx0XHRcdFx0bWV0aG9kOiBBSkFYX01FVEhPRFMuR0VULFxuXHRcdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHBhcnNlZEJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0XHRwYXJzZWRKc29uOiBwYXJzZWRCb2R5LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBNYWtlcyBwb3N0IHJlcXVlc3QuXG5cdFx0ICogQGFzeW5jXG5cdFx0ICogQGZ1bmN0aW9uIHBvc3Rcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG5cdFx0ICogQHJldHVybiB7T2JqZWN0fSBzdGF0dXMgYW5kIHBhcnNlZEpzb25cblx0XHQgKi9cblx0XHRhc3luYyBwb3N0KHBhcmFtcyA9IHt9KSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBhcmFtcy51cmwsIHtcblx0XHRcdFx0bWV0aG9kOiBBSkFYX01FVEhPRFMuUE9TVCxcblx0XHRcdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcblx0XHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zLmJvZHkpLFxuXHRcdFx0fSk7XG4gXG5cdFx0XHRjb25zdCBwYXJzZWRCb2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdFx0cGFyc2VkSnNvbjogcGFyc2VkQm9keSxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0d2luZG93LkFqYXggPSBuZXcgQWpheCgpO1xufSkoKTtcbiIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY2xhc3NOYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZmVlZGFcXFwiIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImhyZWZcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGRhdGEtc2VjdGlvbj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwia2V5XCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjbGFzc05hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFsYnVtSHJlZlwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgPlxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJjb250ZW50UGhvdG9cXFwiIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaW1hZ2VcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzb25nTmFtZVxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvcD5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYXJ0aXN0SHJlZlwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgPjxwIGNsYXNzPVxcXCJhcnRpc3ROYW1lXFxcIj5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhcnRpc3RcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L3A+PC9hPlxcbiAgICAgICAgPC9saT5cXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiXFxuPGRpdiBjbGFzcz1cXFwiZmVlZFRleHRcXFwiPtCT0LvQsNCy0L3QvtC1PC9kaXY+XFxuPHVsIGNsYXNzPVxcXCJmZWVkXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpdGVtc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjEwLFwiY29sdW1uXCI6MTN9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC91bD5cXG5cXG48aDE+0J3QvtCy0YvQtSDRgtGA0LXQutC4LCDQsNC70YzQsdC+0LzRiyDQuCDRgdCx0L7RgNC90LjQutC4PC9oMT5cXG5cXG48dWwgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbnRlbnRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MjQsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3VsPlxcbiAgICBcIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJoZWFkZXJhXFxcIiBocmVmPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJocmVmXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBkYXRhLXNlY3Rpb249XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImhyZWZcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgIDxsaSBjbGFzcz1cXFwibWVudV9faXRlbVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9wcm9maWxlXFxcIj48aW1nIGNsYXNzPVxcXCJpbWdBdmF0YXJcXFwiIHNyYz1cXFwid29ybS5qcGdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJzaWdub3V0XFxcIiBocmVmPVxcXCIvc2lnbm91dFxcXCIgZGF0YS1zZWN0aW9uPVxcXCIvc2lnbm91dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICDQktGL0LnRgtC4XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImxvZ2luXFxcIiBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCIgPjxidXR0b24gY2xhc3M9XFxcImxvZ2luQnV0dG9uXFxcIiBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCI+0JLQvtC50YLQuDwvYnV0dG9uPjwvYT5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImFzZFxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICA8L2xpPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTMsXCJjb2x1bW5cIjoxN319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwibWVudV9faXRlbVxcXCI+PGltZyBzcmM9XFxcIi4vc3RhdGljL2ltZy9Mb3VwZS5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiaW5wdXRfc2VhcmNoXFxcIj4gXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLXNlY3Rpb249XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyID1cXFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQv9C10YHQvdC4INC40LvQuCDQsNC70YzQsdC+0LzQsFxcXCI+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9saT5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaXNBdXRoXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjE1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3VsPlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJlcXVpcmVkID5cXG4gICAgICAgICAgICA8L2xpPiBcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcImxvZ2luXFxcIj5cXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cXFwicG9zdFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjIxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJTdWJtaXRMb2dpbkJ1dHRvblxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7QktC+0LnRgtC4PC9idXR0b24+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIFxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJsb2dpbl9faXRlbVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwieWV0XFxcIj5cXG4gICAgICAgICAgICDQldGJ0ZEg0L3QtdGCINGD0YfRkdGC0L3QvtC5INC30LDQv9C40YHQuD9cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9zaWdudXBcXFwiIGNsYXNzPVxcXCJ5ZXRhXFxcIiBocmVmPVxcXCIvbG9naW5cXFwiPtCX0LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Yw8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgPC91bD5cXG48L2Rpdj5cXG5cXG4gICAgXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJsb2dpbl9faXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY2xhc3NOYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0eXBlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0eXBlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBuYW1lPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGV4dFwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcmVxdWlyZWQgPlxcbiAgICAgICAgICAgIDwvbGk+IFxcblwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwic2lnbnVwXFxcIj5cXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cXFwicG9zdFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjIxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYXNzY2hlY2tcXFwiIGRhdGEtc2VjdGlvbj1cXFwicGFzc2NoZWNrXFxcIiA+0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCITwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJsb2dpbl9faXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIlN1Ym1pdExvZ2luQnV0dG9uXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPtCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjzwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ5ZXRcXFwiPlxcbiAgICAgICAgICAgINCj0LbQtSDQtdGB0YLRjCDRg9GH0LXRgtC90LDRjyDQt9Cw0L/QuNGB0Yw/XFxuICAgICAgICAgICAgPGEgZGF0YS1zZWN0aW9uPVxcXCIvbG9naW5cXFwiIGNsYXNzPVxcXCJ5ZXRhXFxcIiBocmVmPVxcXCIvbG9naW5cXFwiPtCS0L7QudC00LjRgtC1PC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgPC91bD5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2FkZG9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rYWRkb1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInRlbXBsYXRlIiwiRmVlZCIsInBhcmVudCIsImNvbmZpZ0ZlZWQiLCJjb25maWdDb250ZW50IiwiY29uc3RydWN0b3IiLCJpdGVtcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJocmVmIiwibmFtZSIsImNvbnRlbnQiLCJhbGJ1bUhyZWYiLCJhcnRpc3RIcmVmIiwiYXJ0aXN0IiwiaW1hZ2UiLCJyZW5kZXIiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiRmVlZENvbmZpZyIsImZlZWQiLCJhbGwiLCJuZXciLCJjaGFydCIsInBsYXlsaXN0cyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsInNpeHRoIiwic2V2ZW50aCIsImVpZ2h0aCIsIkhlYWRlciIsImNvbmZpZyIsImlzQXV0aCIsIkhlYWRlckNvbmZpZyIsIm1haW4iLCJwb2RjYXN0cyIsImNvbGxlY3Rpb24iLCJMb2dpbiIsInR5cGUiLCJ0ZXh0IiwiTG9naW5Db25maWciLCJFbWFpbElucHV0IiwiUGFzc3dvcmRJbnB1dCIsIlNpZ251cCIsIlNpZ25VcENvbmZpZyIsIlVzZXJuYW1lSW5wdXQiLCJQYXNzd29yZENoZWNrSW5wdXQiLCJEYXRlSW5wdXQiLCJIT1NUIiwiUE9SVCIsInJvdXRlQ29uZmlnIiwicmVuZGVyRmVlZCIsInJlbmRlclBvZGNhc3RzIiwicmVuZGVyQ29sbGVjdGlvbiIsInJlbmRlckxvZ2luIiwicmVuZGVyU2lnblVwIiwicmVuZGVyU2lnbm91dCIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFnZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImxvZ2luIiwic2lnbnVwIiwid2luZG93IiwiQWpheCIsImdldCIsInVybCIsImlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJzdGF0dXMiLCJwYXJzZWRKc29uIiwiYWxlcnQiLCJzaWdudXBGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwiZWxlbWVudHMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsImJpcnRoRGF0ZSIsImRhdGUiLCJ1c2VybmFtZSIsInN0eWxlIiwicG9zdCIsImJvZHkiLCJzZXRJdGVtIiwiZ29Ub1BhZ2UiLCJnZXRFbGVtZW50c0J5TmFtZSIsImxvZ2luRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJMaW5rIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0IiwiSFRNTEFuY2hvckVsZW1lbnQiLCJIVE1MQnV0dG9uRWxlbWVudCIsIkFKQVhfTUVUSE9EUyIsIkdFVCIsIlBPU1QiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInBhcnNlZEJvZHkiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=