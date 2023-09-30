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
      image: './static/img/long_live.jpg'
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
      image: './static/img/Jazz_do_it.png'
    },
    sixth: {
      albumHref: '/feed/Sense_Of_Human',
      artistHref: '/feed/Markul',
      name: 'Sense Of Human',
      artist: 'Markul',
      image: './static/img/sense_of_human.png'
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
    url: HOST + PORT + '/api/v1/auth?id=' + localStorage.getItem('id')
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
        url: HOST + PORT + '/api/v1/sign_up',
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
      url: HOST + PORT + '/api/v1/login',
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
  window.Ajax.post({
    url: HOST + PORT + '/api/v1/logout',
    body: {
      id: localStorage.getItem('id')
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9GZWVkL0ZlZWQuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0ZlZWQvRmVlZENvbnN0LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29uc3QuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbnN0LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9TaWduVXAvU2lnblVwLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9TaWduVXAvU2lnblVwQ29uc3QuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL21vZHVsZXMvYWpheC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvRmVlZC9GZWVkLmhicyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5oYnMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmhicyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcC5oYnMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9pbmRleC5jc3M/YTRiNyIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vRmVlZC5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgRmVlZC4gKi9cbmV4cG9ydCBjbGFzcyBGZWVkIHtcblx0I3BhcmVudDtcblx0I2NvbmZpZ0ZlZWQ7XG5cdCNjb25maWdDb250ZW50O1xuXG5cdC8qKlxuICAgICAqIFNldHMgcGFyZW50IGFuZCBjb25maWcuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ0ZlZWQgXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdDb250ZW50IFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZ0ZlZWQsIGNvbmZpZ0NvbnRlbnQpIHtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy4jY29uZmlnRmVlZCA9IGNvbmZpZ0ZlZWQ7XG5cdFx0dGhpcy4jY29uZmlnQ29udGVudCA9IGNvbmZpZ0NvbnRlbnQ7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZ0ZlZWQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb25maWdGZWVkLlxuICAgICAqL1xuXHRnZXQgY29uZmlnRmVlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnRmVlZDtcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgY29uZmlnQ29udGVudC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZ0NvbnRlbnQuXG4gICAgICovXG5cdGdldCBjb25maWdDb250ZW50KCkge1xuXHRcdHJldHVybiB0aGlzLiNjb25maWdDb250ZW50O1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnRmVlZCkubWFwKChba2V5LCB7IGhyZWYsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdGhyZWYsXG5cdFx0XHRuYW1lLCBcblx0XHR9KSk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb250ZW50LlxuICAgICAqL1xuXHRnZXQgY29udGVudCgpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb25maWdDb250ZW50KS5tYXAoKFtrZXksIHsgYWxidW1IcmVmLCBhcnRpc3RIcmVmLCBuYW1lLCBhcnRpc3QsIGltYWdlfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHRhbGJ1bUhyZWYsXG5cdFx0XHRhcnRpc3RIcmVmLFxuXHRcdFx0bmFtZSxcblx0XHRcdGFydGlzdCxcblx0XHRcdGltYWdlLFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICogUmVuZGVyIGhlYWRlci5cbiAgICAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdmZWVkX19pdGVtJztcblx0XHRcdHJldHVybiB7Li4uZWxlbWVudCwgY2xhc3NOYW1lfTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2l0ZW0nO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtcywgY29udGVudH0pO1xuXHR9XG59IiwiLyoqIFxuICogXHRAY29uc3RhbnRcbiAgICBAdHlwZSB7T2JqZWN0fVxuKi9cbmV4cG9ydCBjb25zdCBGZWVkQ29uZmlnID0ge1xuXHRmZWVkOiB7XG5cdFx0YWxsOiB7XG5cdFx0XHRocmVmOiAnL2ZlZWQvYWxsJyxcblx0XHRcdG5hbWU6ICfQktGB0ZEnLFxuXHRcdH0sXG5cdFx0bmV3OiB7XG5cdFx0XHRocmVmOiAnL2ZlZWQvbmV3Jyxcblx0XHRcdG5hbWU6ICfQndC+0LLQvtC1Jyxcblx0XHR9LFxuXHRcdGNoYXJ0OiB7XG5cdFx0XHRocmVmOiAnL2ZlZWQvY2hhcnQnLFxuXHRcdFx0bmFtZTogJ9Cn0LDRgNGCJyxcblx0XHR9LFxuXHRcdHBsYXlsaXN0czoge1xuXHRcdFx0aHJlZjogJy9mZWVkL3BsYXlsaXN0cycsXG5cdFx0XHRuYW1lOiAn0J/QvtC00LHQvtGA0LrQuCcsXG5cdFx0fVxuXHR9LFxuXHRjb250ZW50OiB7XG5cdFx0Zmlyc3Q6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL09iYScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvTWF5b3QnLFxuXHRcdFx0bmFtZTogJ9Ce0LHQsCcsXG5cdFx0XHRhcnRpc3Q6ICdNYXlvdCcsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9ib3RoLmpwZydcblx0XHR9LFxuXHRcdHNlY29uZDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvRmFudGFzeV9taXh0YXBlX3ZvbC4xJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC9Ta3J5cHRvbml0ZScsXG5cdFx0XHRuYW1lOiAnRmFudGFzeSBtaXh0YXBlLCB2b2wuMScsXG5cdFx0XHRhcnRpc3Q6ICfQodC60YDQuNC/0YLQvtC90LjRgicsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9za3J5cC5qcGcnLFxuXHRcdH0sXG5cdFx0dGhpcmQ6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL0xPTkdfTElWRV84MTInLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL0FMQkxBS181MicsXG5cdFx0XHRuYW1lOiAnTE9ORyBMSVZFIDgxMicsXG5cdFx0XHRhcnRpc3Q6ICdBTEJMQUsgNTInLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvbG9uZ19saXZlLmpwZydcblx0XHR9LFxuXHRcdGZvdXJ0aDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvUFVTU1lfQk9ZJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC/QldCT0J7QoF/QmtCg0JjQlCcsXG5cdFx0XHRuYW1lOiAnUFVTU1kgQk9ZJyxcblx0XHRcdGFydGlzdDogJ9CV0JPQntCgINCa0KDQmNCUJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL1B1c3N5X0JveS5wbmcnXG5cdFx0fSxcblx0XHRmaWZ0aDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvSkFaWl9ET19JVCcsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvVG94aSQnLFxuXHRcdFx0bmFtZTogJ0pBWlogRE8gSVQnLFxuXHRcdFx0YXJ0aXN0OiAnVG94aSQnLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvSmF6el9kb19pdC5wbmcnXG5cdFx0fSxcblx0XHRzaXh0aDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvU2Vuc2VfT2ZfSHVtYW4nLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL01hcmt1bCcsXG5cdFx0XHRuYW1lOiAnU2Vuc2UgT2YgSHVtYW4nLFxuXHRcdFx0YXJ0aXN0OiAnTWFya3VsJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL3NlbnNlX29mX2h1bWFuLnBuZydcblx0XHR9LFxuXHRcdHNldmVudGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL2NhbGlmb3JuaWFfcm9ja2V0X2Z1ZWxfcHRfMScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvQnVtYmxlX0JlZXp5Jyxcblx0XHRcdG5hbWU6ICdjYWxpZm9ybmlhIHJvY2tldCBmdWVsOiBwdC4gMScsXG5cdFx0XHRhcnRpc3Q6ICdCdW1ibGUgQmVlenknLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvY2FsaWZvcm5pYS5qcGcnXG5cdFx0fSxcblx0XHRlaWdodGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL1BISUxBUk1PTklBJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC9QSEFSQU9IJyxcblx0XHRcdG5hbWU6ICdQSElMQVJNT05JQScsXG5cdFx0XHRhcnRpc3Q6ICdQSEFSQU9IJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL1BISUxBUk1PTklBLnBuZydcblx0XHR9LFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0hlYWRlci5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgSGVhZGVyLiAqL1xuZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHsgaHJlZiwgbmFtZX1dKSA9PiAoe1xuXHRcdFx0a2V5LFxuXHRcdFx0aHJlZixcblx0XHRcdG5hbWUsXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBSZW5kZXIgaGVhZGVyLlxuICAgICovXG5cdHJlbmRlcihpc0F1dGgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gJ21lbnVfX2l0ZW0nO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtcywgaXNBdXRofSk7XG5cdH1cbn0iLCIvKiogXG4gKiBcdEBjb25zdGFudFxuICAgIEB0eXBlIHtPYmplY3R9XG4qL1xuZXhwb3J0IGNvbnN0IEhlYWRlckNvbmZpZyA9IHtcblx0bWFpbjoge1xuXHRcdGhyZWY6ICcvZmVlZCcsXG5cdFx0bmFtZTogJ9CT0LvQsNCy0L3QvtC1Jyxcblx0fSxcblx0cG9kY2FzdHM6IHtcblx0XHRocmVmOiAnL3BvZGNhc3RzJyxcblx0XHRuYW1lOiAn0J/QvtC00LrQsNGB0YLRiycsXG5cdH0sXG5cdGNvbGxlY3Rpb246IHtcblx0XHRocmVmOiAnL2NvbGxlY3Rpb24nLFxuXHRcdG5hbWU6ICfQmtC+0LvQu9C10LrRhtC40Y8nLFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0xvZ2luLmhicyc7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBMb2dpbi4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG5cdGNvbnN0cnVjdG9yKHBhcmVudCwgY29uZmlnKSB7XG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI2NvbmZpZyA9IGNvbmZpZztcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgY29uZmlnLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnLlxuICAgICAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdHJldHVybiB0aGlzLiNjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGl0ZW1zLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gaXRlbXMuXG4gICAgICovXG5cdGdldCBpdGVtcygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb25maWcpLm1hcCgoW2tleSwge3R5cGUsIHRleHQsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdHR5cGUsXG5cdFx0XHR0ZXh0LFxuXHRcdFx0bmFtZSwgXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBSZW5kZXIgbG9naW4gcGFnZS5cbiAgICAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdsb2dpbl9faW5wdXQnO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtc30pO1xuXHR9XG59IiwiLyoqXG4gKiAgQGNvbnN0YW50XG4qICBAdHlwZSB7T2JqZWN0fVxuKi9cbmV4cG9ydCBjb25zdCBMb2dpbkNvbmZpZyA9IHtcblx0RW1haWxJbnB1dDoge1xuXHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0dGV4dDogJ0VtYWlsJyxcblx0XHRuYW1lOiAnZW1haWwnLFxuXHR9LFxuXHRQYXNzd29yZElucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL1NpZ25VcC5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgU2lnblVwLiAqL1xuZXhwb3J0IGNsYXNzIFNpZ251cCB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHt0eXBlLCB0ZXh0LCBuYW1lfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHR0eXBlLFxuXHRcdFx0dGV4dCxcblx0XHRcdG5hbWUsIFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICAqIFJlbmRlciBzaWdudXAgcGFnZS5cbiAgICAgKi9cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdGxldCBjbGFzc05hbWUgPSAnU2lnbnVwX19pbnB1dCc7XG5cdFx0XHRyZXR1cm4gey4uLmVsZW1lbnQsIGNsYXNzTmFtZX07XG5cdFx0fSk7XG5cblx0XHR0aGlzLiNwYXJlbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUoe2l0ZW1zfSk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIFx0QGNvbnN0YW50XG4gICAgQHR5cGUge09iamVjdH1cbiovXG5leHBvcnQgY29uc3QgU2lnblVwQ29uZmlnID0ge1xuXHRVc2VybmFtZUlucHV0OiB7XG5cdFx0dHlwZTogJ3VzZXJuYW1lJyxcblx0XHR0ZXh0OiAn0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycsXG5cdFx0bmFtZTogJ3VzZXJuYW1lJyxcblx0fSxcblx0RW1haWxJbnB1dDoge1xuXHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0dGV4dDogJ0VtYWlsJyxcblx0XHRuYW1lOiAnZW1haWwnLFxuXHR9LFxuXHRQYXNzd29yZElucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHR9LFxuXHRQYXNzd29yZENoZWNrSW5wdXQ6IHtcblx0XHR0eXBlOiAncGFzc3dvcmQnLFxuXHRcdHRleHQ6ICfQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmRDaGVjaycsXG5cdH0sXG5cdERhdGVJbnB1dDoge1xuXHRcdHR5cGU6ICdkYXRlJyxcblx0XHR0ZXh0OiAnYXNkJyxcblx0XHRuYW1lOiAnZGF0ZScsXG5cdH0sXG59O1xuIiwiaW1wb3J0ICcuL21vZHVsZXMvYWpheC5qcyc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQvRmVlZC5qcyc7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyc7XG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tICcuL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcC5qcyc7XG5pbXBvcnQgeyBGZWVkQ29uZmlnIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQvRmVlZENvbnN0LmpzJztcbmltcG9ydCB7IEhlYWRlckNvbmZpZyB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29uc3QuanMnO1xuaW1wb3J0IHsgTG9naW5Db25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW5Db25zdC5qcyc7XG5pbXBvcnQgeyBTaWduVXBDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcENvbnN0LmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vKiogXG4gKiBAY29uc3RhbnRcbiAgICBAdHlwZSB7c3RyaW5nfVxuKi9cbmNvbnN0IEhPU1QgPSAnaHR0cDovLzgyLjE0Ni40NS4xNjQnO1xuXG4vKiogXG4gKiBAY29uc3RhbnRcbiAgICBAdHlwZSB7c3RyaW5nfVxuKi9cbmNvbnN0IFBPUlQgPSAnOjgwODAnO1xuXG4vKiogXG4qIEBjb25zdGFudFxuKiBAdHlwZSB7T2JqZWN0fVxuKi9cbmNvbnN0IHJvdXRlQ29uZmlnID0ge1xuXHQnL2ZlZWQnOiB7XG5cdFx0bmFtZTogJ9CT0LvQsNCy0L3QvtC1Jyxcblx0XHRyZW5kZXI6IHJlbmRlckZlZWQsXG5cdH0sXG5cdCcvcG9kY2FzdHMnOiB7XG5cdFx0bmFtZTogJ9Cf0L7QtNC60LDRgdGC0YsnLFxuXHRcdHJlbmRlcjogcmVuZGVyUG9kY2FzdHMsXG5cdH0sXG5cdCcvY29sbGVjdGlvbic6IHtcblx0XHRuYW1lOiAn0JrQvtC70LvQtdC60YbQuNGPJyxcblx0XHRyZW5kZXI6IHJlbmRlckNvbGxlY3Rpb24sXG5cdH0sXG5cdCcvbG9naW4nOiB7XG5cdFx0bmFtZTogJ9Cb0L7Qs9C40L0nLFxuXHRcdHJlbmRlcjogcmVuZGVyTG9naW4sXG5cdH0sXG5cdCcvc2lnbnVwJzoge1xuXHRcdG5hbWU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJyxcblx0XHRyZW5kZXI6IHJlbmRlclNpZ25VcCxcblx0fSxcblx0Jy9zaWdub3V0Jzoge1xuXHRcdG5hbWU6ICfQktGL0LnRgtC4Jyxcblx0XHRyZW5kZXI6IHJlbmRlclNpZ25vdXQsXG5cdH0sXG59O1xuXG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbmNvbnN0IG1lbnVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBwYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKG1lbnVFbGVtZW50KTtcbnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VFbGVtZW50KTtcblxuY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihtZW51RWxlbWVudCwgSGVhZGVyQ29uZmlnKTtcbmNvbnN0IGZlZWQgPSBuZXcgRmVlZChwYWdlRWxlbWVudCwgRmVlZENvbmZpZy5mZWVkLCBGZWVkQ29uZmlnLmNvbnRlbnQpO1xuY29uc3QgbG9naW4gPSBuZXcgTG9naW4ocGFnZUVsZW1lbnQsIExvZ2luQ29uZmlnKTtcbmNvbnN0IHNpZ251cCA9IG5ldyBTaWdudXAocGFnZUVsZW1lbnQsIFNpZ25VcENvbmZpZyk7XG5sZXQgaXNBdXRoID0gZmFsc2U7XG5cbnJlbmRlckZlZWQoKTtcblxuXG4vKipcbiogUmVuZGVycyBob21lIHBhZ2UuXG4qL1xuZnVuY3Rpb24gcmVuZGVyRmVlZCgpIHtcblx0d2luZG93LkFqYXguZ2V0KHtcblx0XHR1cmw6IEhPU1QgKyBQT1JUICsgJy9hcGkvdjEvYXV0aD9pZD0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyksXG5cdH0pXG5cdFx0LnRoZW4oKHsgc3RhdHVzLCBwYXJzZWRKc29uIH0pID0+IHtcblx0XHRcdGlmIChzdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRpZiAocGFyc2VkSnNvbi5pZCkge1xuXHRcdFx0XHRcdGlzQXV0aCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0YWxlcnQoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCEnKTtcblx0XHR9KTtcblx0aGVhZGVyLnJlbmRlcihpc0F1dGgpO1xuXHRmZWVkLnJlbmRlcigpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgU2lnbnVwIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNpZ25VcCgpIHtcblx0c2lnbnVwLnJlbmRlcigpO1xuXHRjb25zdCBzaWdudXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG5cdHNpZ251cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbWFpbCA9IHNpZ251cEZvcm0uZWxlbWVudHMuZW1haWwudmFsdWU7XG5cdFx0Y29uc3QgcGFzc3dvcmQgPSBzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlO1xuXHRcdGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSBzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkQ2hlY2sudmFsdWU7XG5cdFx0Y29uc3QgYmlydGhEYXRlID0gc2lnbnVwRm9ybS5lbGVtZW50cy5kYXRlLnZhbHVlO1xuXHRcdGNvbnN0IHVzZXJuYW1lID0gc2lnbnVwRm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZTtcblxuXHRcdGlmIChwYXNzd29yZCA9PSBwYXNzd29yZENoZWNrKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3NjaGVja1wiXScpLnN0eWxlID0gJ3Zpc2liaWxpdHk6IGhpZGRlbic7XG5cdFx0XHRzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0ZGRkZGRic7XG5cdFx0XHRzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkQ2hlY2suc3R5bGUgPSAnYm9yZGVyLWNvbG9yOiAjRkZGRkZGJztcblxuXHRcdFx0d2luZG93LkFqYXgucG9zdCh7XG5cdFx0XHRcdHVybDogSE9TVCArIFBPUlQgKyAnL2FwaS92MS9zaWduX3VwJyxcblx0XHRcdFx0Ym9keTogeyBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBiaXJ0aERhdGUgfSxcblx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRpc0F1dGggPSB0cnVlO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcGFyc2VkSnNvbi5pZCk7XG5cdFx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnL2ZlZWQnKVswXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnL2ZlZWQnKVswXSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFsZXJ0KCfQntGI0LjQsdC60LAg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LghJyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3NjaGVja1wiXScpLnN0eWxlID0gJ3Zpc2liaWxpdHk6IHZpc2libGUnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC5zdHlsZSA9ICdib3JkZXItY29sb3I6ICNFRjU4NTgnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0VGNTg1OCc7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG4vKipcbiAqIFJlbmRlcnMgTG9naW4gcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTG9naW4oKSB7XG5cdGxvZ2luLnJlbmRlcigpO1xuXG5cdGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuXHRsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbWFpbCA9IGxvZ2luRm9ybS5lbGVtZW50cy5lbWFpbC52YWx1ZTtcblx0XHRjb25zdCBwYXNzd29yZCA9IGxvZ2luRm9ybS5lbGVtZW50cy5wYXNzd29yZC52YWx1ZTtcblxuXHRcdHdpbmRvdy5BamF4LnBvc3Qoe1xuXHRcdFx0dXJsOiBIT1NUICsgUE9SVCArICcvYXBpL3YxL2xvZ2luJyxcblx0XHRcdGJvZHk6IHsgZW1haWwsIHBhc3N3b3JkIH0sXG5cdFx0fSlcblx0XHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRcdGlmIChzdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHBhcnNlZEpzb24uaWQpO1xuXHRcdFx0XHRcdGlzQXV0aCA9IHRydWU7XG5cdFx0XHRcdFx0Z29Ub1BhZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJy9mZWVkJylbMF0pO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRhbGVydCgn0J3QtdCy0LXRgNC90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCDQv9Cw0YDQvtC70YwhJyk7XG5cdFx0XHR9KTtcblx0fSk7XG59XG5cbi8qKlxuICogUmVuZGVycyBQb2RjYXN0cyBwYWdlLlxuICovXG5mdW5jdGlvbiByZW5kZXJQb2RjYXN0cygpIHtcblxufVxuXG4vKipcbiAqIFJlbmRlcnMgQ29sbGVjdGlvbiBwYWdlLlxuICovXG5mdW5jdGlvbiByZW5kZXJDb2xsZWN0aW9uKCkge1xuXG59XG5cbi8qKlxuICogUmVuZGVycyBTaWdub3V0IHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNpZ25vdXQoKSB7XG5cdHdpbmRvdy5BamF4LnBvc3Qoe1xuXHRcdHVybDogSE9TVCArIFBPUlQgKyAnL2FwaS92MS9sb2dvdXQnLFxuXHRcdGJvZHk6IHtpZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyl9XG5cdH0pXG5cdFx0LnRoZW4oKHsgc3RhdHVzLCBwYXJzZWRKc29uIH0pID0+IHtcblx0XHRcdGlmIChzdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRpc0F1dGggPSBmYWxzZTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgbnVsbCk7XG5cdFx0XHRcdGdvVG9QYWdlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCcvZmVlZCcpWzBdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2cocGFyc2VkSnNvbi5lcnIpO1xuXHRcdFx0YWxlcnQoJ9Cd0LXQstC10YDQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70Lgg0L/QsNGA0L7Qu9GMIScpO1xuXHRcdH0pO1xufVxuXG4vKipcbiAqIEdvZXMgdG8gYW5vdGhlciBwYWdlXG4gKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBMaW5rIFxuICovXG5mdW5jdGlvbiBnb1RvUGFnZShMaW5rKSB7XG5cdG1lbnVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRwYWdlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuXHRmb3IgKGxldCBocmVmIGluIHJvdXRlQ29uZmlnKSB7XG5cdFx0aWYgKExpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKSA9PT0gaHJlZikge1xuXHRcdFx0cm91dGVDb25maWdbaHJlZl0ucmVuZGVyKGlzQXV0aCk7XG5cdFx0fVxuXHR9XG59XG5cbnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Y29uc3QgeyB0YXJnZXQgfSA9IGU7XG5cblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8ICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKSA9PT0gJy9sb2dpbicpKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGdvVG9QYWdlKGUudGFyZ2V0KTtcblx0fVxufSk7XG4iLCIvLyDQlNC10LzQvtC90YHRgtGA0LDRhtC40Y8g0LzQvtC00YPQu9C10Lkg0L3QsCBJSUZFLiDQrdGC0L4g0YPRgdGC0LDRgNC10LLRiNCw0Y8g0LrQvtC90YbQtdC/0YbQuNGPLCDQvdC+INC/0YDQtdC60YDQsNGB0L3QviDRgNCw0LHQvtGC0LDQtdGCINC00L4g0YHQuNGFINC/0L7RgFxuKGZ1bmN0aW9uICgpIHtcblx0XG5cdC8qKlxuXHQqICBAY29uc3RhbnRcblx0KiAgQHR5cGUge09iamVjdH1cblx0Ki9cblx0Y29uc3QgQUpBWF9NRVRIT0RTID0ge1xuXHRcdEdFVDogJ0dFVCcsXG5cdFx0UE9TVDogJ1BPU1QnLFxuXHR9O1xuXG5cdC8qKiBDbGFzcyByZXByZXNlbnRpbmcgQWpheCBtb2R1bGUuICovXG5cdGNsYXNzIEFqYXgge1xuXG5cdFx0LyoqXG5cdFx0ICogTWFrZXMgZ2V0IHJlcXVlc3QuXG5cdFx0ICogQGFzeW5jXG5cdFx0ICogQGZ1bmN0aW9uIGdldFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcblx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHN0YXR1cyBhbmQgcGFyc2VkSnNvblxuXHRcdCAqL1xuXHRcdGFzeW5jIGdldChwYXJhbXMgPSB7fSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXJhbXMudXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogQUpBWF9NRVRIT0RTLkdFVCxcblx0XHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBwYXJzZWRCb2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdFx0cGFyc2VkSnNvbjogcGFyc2VkQm9keSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogTWFrZXMgcG9zdCByZXF1ZXN0LlxuXHRcdCAqIEBhc3luY1xuXHRcdCAqIEBmdW5jdGlvbiBwb3N0XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gc3RhdHVzIGFuZCBwYXJzZWRKc29uXG5cdFx0ICovXG5cdFx0YXN5bmMgcG9zdChwYXJhbXMgPSB7fSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXJhbXMudXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogQUpBWF9NRVRIT0RTLlBPU1QsXG5cdFx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdFx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5ib2R5KSxcblx0XHRcdH0pO1xuIFxuXHRcdFx0Y29uc3QgcGFyc2VkQm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdHBhcnNlZEpzb246IHBhcnNlZEJvZHksXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHdpbmRvdy5BamF4ID0gbmV3IEFqYXgoKTtcbn0pKCk7XG4iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImZlZWRhXFxcIiBocmVmPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJocmVmXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBkYXRhLXNlY3Rpb249XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImtleVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2xpPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgIDxsaSBjbGFzcz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY2xhc3NOYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhbGJ1bUhyZWZcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiID5cXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiY29udGVudFBob3RvXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImltYWdlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBhbHQ9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic29uZ05hbWVcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L3A+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFydGlzdEhyZWZcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiID48cCBjbGFzcz1cXFwiYXJ0aXN0TmFtZVxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYXJ0aXN0XCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9wPjwvYT5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIlxcbjxkaXYgY2xhc3M9XFxcImZlZWRUZXh0XFxcIj7Qk9C70LDQstC90L7QtTwvZGl2Plxcbjx1bCBjbGFzcz1cXFwiZmVlZFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaXRlbXNcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxMCxcImNvbHVtblwiOjEzfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdWw+XFxuXFxuPGgxPtCd0L7QstGL0LUg0YLRgNC10LrQuCwg0LDQu9GM0LHQvtC80Ysg0Lgg0YHQsdC+0YDQvdC40LrQuDwvaDE+XFxuXFxuPHVsIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb250ZW50XCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjI0LFwiY29sdW1uXCI6MTN9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC91bD5cXG4gICAgXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjbGFzc05hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaGVhZGVyYVxcXCIgaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaHJlZlwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgZGF0YS1zZWN0aW9uPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJocmVmXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2ZpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvcHJvZmlsZVxcXCI+PGltZyBjbGFzcz1cXFwiaW1nQXZhdGFyXFxcIiBzcmM9XFxcIndvcm0uanBnXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwic2lnbm91dFxcXCIgaHJlZj1cXFwiL3NpZ25vdXRcXFwiIGRhdGEtc2VjdGlvbj1cXFwiL3NpZ25vdXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAg0JLRi9C50YLQuFxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJsb2dpblxcXCIgZGF0YS1zZWN0aW9uPVxcXCIvbG9naW5cXFwiID48YnV0dG9uIGNsYXNzPVxcXCJsb2dpbkJ1dHRvblxcXCIgZGF0YS1zZWN0aW9uPVxcXCIvbG9naW5cXFwiPtCS0L7QudGC0Lg8L2J1dHRvbj48L2E+XFxuICAgICAgICA8L2xpPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJhc2RcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm1lbnVcXFwiPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0xvZ29cXFwiIHNyYz1cXFwiLi9zdGF0aWMvaW1nL0xvZ28uc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29UZXh0XFxcIj5NdXNpY09uPC9kaXY+ICAgIFxcbiAgICAgICAgPC9saT5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpdGVtc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjEzLFwiY29sdW1uXCI6MTd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPjxpbWcgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG91cGUuc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+PC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibWVudV9faXRlbVxcXCI+XFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImlucHV0X3NlYXJjaFxcXCI+IFxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1zZWN0aW9uPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlciA9XFxcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0L/QtdGB0L3QuCDQuNC70Lgg0LDQu9GM0LHQvtC80LBcXFwiPlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvbGk+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlzQXV0aFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIwLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MzMsXCJjb2x1bW5cIjoxNX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC91bD5cXG48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjbGFzc05hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIG5hbWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInR5cGVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0ZXh0XCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiByZXF1aXJlZCA+XFxuICAgICAgICAgICAgPC9saT4gXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJsb2dpblxcXCI+XFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9mZWVkXFxcIiBocmVmPVxcXCJcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0xvZ29cXFwiIHNyYz1cXFwiLi9zdGF0aWMvaW1nL0xvZ28uc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29UZXh0XFxcIj5NdXNpY09uPC9kaXY+ICAgIFxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XFxcInBvc3RcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpdGVtc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjoyMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiU3VibWl0TG9naW5CdXR0b25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JLQvtC50YLQuDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICBcXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInlldFxcXCI+XFxuICAgICAgICAgICAg0JXRidGRINC90LXRgiDRg9GH0ZHRgtC90L7QuSDQt9Cw0L/QuNGB0Lg/XFxuICAgICAgICAgICAgPGEgZGF0YS1zZWN0aW9uPVxcXCIvc2lnbnVwXFxcIiBjbGFzcz1cXFwieWV0YVxcXCIgaHJlZj1cXFwiL2xvZ2luXFxcIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgIDwvdWw+XFxuPC9kaXY+XFxuXFxuICAgIFwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJlcXVpcmVkID5cXG4gICAgICAgICAgICA8L2xpPiBcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcInNpZ251cFxcXCI+XFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9mZWVkXFxcIiBocmVmPVxcXCJcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0xvZ29cXFwiIHNyYz1cXFwiLi9zdGF0aWMvaW1nL0xvZ28uc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29UZXh0XFxcIj5NdXNpY09uPC9kaXY+ICAgIFxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XFxcInBvc3RcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpdGVtc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjoyMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFzc2NoZWNrXFxcIiBkYXRhLXNlY3Rpb249XFxcInBhc3NjaGVja1xcXCIgPtCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgiE8L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJTdWJtaXRMb2dpbkJ1dHRvblxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJsb2dpbl9faXRlbVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwieWV0XFxcIj5cXG4gICAgICAgICAgICDQo9C20LUg0LXRgdGC0Ywg0YPRh9C10YLQvdCw0Y8g0LfQsNC/0LjRgdGMP1xcbiAgICAgICAgICAgIDxhIGRhdGEtc2VjdGlvbj1cXFwiL2xvZ2luXFxcIiBjbGFzcz1cXFwieWV0YVxcXCIgaHJlZj1cXFwiL2xvZ2luXFxcIj7QktC+0LnQtNC40YLQtTwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthZGRvXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2FkZG9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsIkZlZWQiLCJwYXJlbnQiLCJjb25maWdGZWVkIiwiY29uZmlnQ29udGVudCIsImNvbnN0cnVjdG9yIiwiaXRlbXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiaHJlZiIsIm5hbWUiLCJjb250ZW50IiwiYWxidW1IcmVmIiwiYXJ0aXN0SHJlZiIsImFydGlzdCIsImltYWdlIiwicmVuZGVyIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIkZlZWRDb25maWciLCJmZWVkIiwiYWxsIiwibmV3IiwiY2hhcnQiLCJwbGF5bGlzdHMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJzaXh0aCIsInNldmVudGgiLCJlaWdodGgiLCJIZWFkZXIiLCJjb25maWciLCJpc0F1dGgiLCJIZWFkZXJDb25maWciLCJtYWluIiwicG9kY2FzdHMiLCJjb2xsZWN0aW9uIiwiTG9naW4iLCJ0eXBlIiwidGV4dCIsIkxvZ2luQ29uZmlnIiwiRW1haWxJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJTaWdudXAiLCJTaWduVXBDb25maWciLCJVc2VybmFtZUlucHV0IiwiUGFzc3dvcmRDaGVja0lucHV0IiwiRGF0ZUlucHV0IiwiSE9TVCIsIlBPUlQiLCJyb3V0ZUNvbmZpZyIsInJlbmRlckZlZWQiLCJyZW5kZXJQb2RjYXN0cyIsInJlbmRlckNvbGxlY3Rpb24iLCJyZW5kZXJMb2dpbiIsInJlbmRlclNpZ25VcCIsInJlbmRlclNpZ25vdXQiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInBhZ2VFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJoZWFkZXIiLCJsb2dpbiIsInNpZ251cCIsIndpbmRvdyIsIkFqYXgiLCJnZXQiLCJ1cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInN0YXR1cyIsInBhcnNlZEpzb24iLCJpZCIsImFsZXJ0Iiwic2lnbnVwRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImVsZW1lbnRzIiwidmFsdWUiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJiaXJ0aERhdGUiLCJkYXRlIiwidXNlcm5hbWUiLCJzdHlsZSIsInBvc3QiLCJib2R5Iiwic2V0SXRlbSIsImdvVG9QYWdlIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsb2dpbkZvcm0iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiTGluayIsImdldEF0dHJpYnV0ZSIsInRhcmdldCIsIkhUTUxBbmNob3JFbGVtZW50IiwiSFRNTEJ1dHRvbkVsZW1lbnQiLCJBSkFYX01FVEhPRFMiLCJHRVQiLCJQT1NUIiwicGFyYW1zIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJwYXJzZWRCb2R5IiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9