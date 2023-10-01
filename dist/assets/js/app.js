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
const HOST = 'https://musicon.space';

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
    status
  }) => {
    if (status === 200) {
      isAuth = true;
    }
  }).catch(error => {
    throw error;
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
          localStorage.setItem('id', parsedJson.Id);
          goToPage(document.querySelector('[data-section="/feed"]'));
          return;
        } else if (status >= 400) {
          goToPage(document.querySelector('[data-section="/feed"]'));
          return;
        }
        alert('Ошибка при регистрации!');
      }).catch(error => {
        throw error;
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
        localStorage.setItem('id', parsedJson.Id);
        isAuth = true;
        goToPage(document.querySelector('[data-section="/feed"]'));
        return;
      }
      alert('Неверное имя пользователя или пароль!');
    }).catch(error => {
      throw error;
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
      goToPage(document.querySelector('[data-section="/feed"]'));
      return;
    }
    console.log(parsedJson.err);
    alert('Неверное имя пользователя или пароль!');
  }).catch(error => {
    throw error;
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
    return "        <li class=\"menu__item\">\n            <div class=\"profile\">\n                <a href=\"/profile\"><img class=\"imgAvatar\" src=\"./static/img/worm.jpg\" alt=\"\"></a>\n                <a class=\"signout\" href=\"/signout\" data-section=\"/signout\">\n                    Выйти\n                </a>\n            </div>\n        </li>\n";
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
    + "            <li class=\"login__item\">\n                <button class=\"SubmitLoginButton\"  data-section=\"/feed\" type=\"submit\">Войти</button>\n            </li>\n        \n        </form>\n        <li class=\"login__item\">\n            <div class=\"yet\">\n            Ещё нет учётной записи?\n            <a data-section=\"/signup\" class=\"yeta\" href=\"/login\">Зарегистрируйтесь</a>\n            </div>\n        </li>\n        \n        \n    </ul>\n</div>\n\n    ";
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
    + "            <li class=\"login__item\">\n                <div class=\"passcheck\" name=\"passcheck\" >Пароли не совпадают!</div>\n            </li>\n            <li class=\"login__item\">\n                <button class=\"SubmitLoginButton\" data-section=\"/feed\" type=\"submit\">Зарегистрироваться</button>\n            </li>\n        </form>\n        <li class=\"login__item\">\n            <div class=\"yet\">\n            Уже есть учетная запись?\n            <a data-section=\"/login\" class=\"yeta\" href=\"/login\">Войдите</a>\n            </div>\n        </li>\n    </ul>\n</div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9GZWVkL0ZlZWQuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0ZlZWQvRmVlZENvbnN0LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29uc3QuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbnN0LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9TaWduVXAvU2lnblVwLmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9TaWduVXAvU2lnblVwQ29uc3QuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL21vZHVsZXMvYWpheC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvRmVlZC9GZWVkLmhicyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5oYnMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmhicyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcC5oYnMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9pbmRleC5jc3M/YTRiNyIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vRmVlZC5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgRmVlZC4gKi9cbmV4cG9ydCBjbGFzcyBGZWVkIHtcblx0I3BhcmVudDtcblx0I2NvbmZpZ0ZlZWQ7XG5cdCNjb25maWdDb250ZW50O1xuXG5cdC8qKlxuICAgICAqIFNldHMgcGFyZW50IGFuZCBjb25maWcuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ0ZlZWQgXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdDb250ZW50IFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZ0ZlZWQsIGNvbmZpZ0NvbnRlbnQpIHtcblx0XHR0aGlzLiNwYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy4jY29uZmlnRmVlZCA9IGNvbmZpZ0ZlZWQ7XG5cdFx0dGhpcy4jY29uZmlnQ29udGVudCA9IGNvbmZpZ0NvbnRlbnQ7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZ0ZlZWQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb25maWdGZWVkLlxuICAgICAqL1xuXHRnZXQgY29uZmlnRmVlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnRmVlZDtcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgY29uZmlnQ29udGVudC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZ0NvbnRlbnQuXG4gICAgICovXG5cdGdldCBjb25maWdDb250ZW50KCkge1xuXHRcdHJldHVybiB0aGlzLiNjb25maWdDb250ZW50O1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnRmVlZCkubWFwKChba2V5LCB7IGhyZWYsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdGhyZWYsXG5cdFx0XHRuYW1lLCBcblx0XHR9KSk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb250ZW50LlxuICAgICAqL1xuXHRnZXQgY29udGVudCgpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb25maWdDb250ZW50KS5tYXAoKFtrZXksIHsgYWxidW1IcmVmLCBhcnRpc3RIcmVmLCBuYW1lLCBhcnRpc3QsIGltYWdlfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHRhbGJ1bUhyZWYsXG5cdFx0XHRhcnRpc3RIcmVmLFxuXHRcdFx0bmFtZSxcblx0XHRcdGFydGlzdCxcblx0XHRcdGltYWdlLFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICogUmVuZGVyIGhlYWRlci5cbiAgICAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdmZWVkX19pdGVtJztcblx0XHRcdHJldHVybiB7Li4uZWxlbWVudCwgY2xhc3NOYW1lfTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2l0ZW0nO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtcywgY29udGVudH0pO1xuXHR9XG59IiwiLyoqIFxuICogXHRAY29uc3RhbnRcbiAgICBAdHlwZSB7T2JqZWN0fVxuKi9cbmV4cG9ydCBjb25zdCBGZWVkQ29uZmlnID0ge1xuXHRmZWVkOiB7XG5cdFx0YWxsOiB7XG5cdFx0XHRocmVmOiAnL2ZlZWQvYWxsJyxcblx0XHRcdG5hbWU6ICfQktGB0ZEnLFxuXHRcdH0sXG5cdFx0bmV3OiB7XG5cdFx0XHRocmVmOiAnL2ZlZWQvbmV3Jyxcblx0XHRcdG5hbWU6ICfQndC+0LLQvtC1Jyxcblx0XHR9LFxuXHRcdGNoYXJ0OiB7XG5cdFx0XHRocmVmOiAnL2ZlZWQvY2hhcnQnLFxuXHRcdFx0bmFtZTogJ9Cn0LDRgNGCJyxcblx0XHR9LFxuXHRcdHBsYXlsaXN0czoge1xuXHRcdFx0aHJlZjogJy9mZWVkL3BsYXlsaXN0cycsXG5cdFx0XHRuYW1lOiAn0J/QvtC00LHQvtGA0LrQuCcsXG5cdFx0fVxuXHR9LFxuXHRjb250ZW50OiB7XG5cdFx0Zmlyc3Q6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL09iYScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvTWF5b3QnLFxuXHRcdFx0bmFtZTogJ9Ce0LHQsCcsXG5cdFx0XHRhcnRpc3Q6ICdNYXlvdCcsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9ib3RoLmpwZydcblx0XHR9LFxuXHRcdHNlY29uZDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvRmFudGFzeV9taXh0YXBlX3ZvbC4xJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC9Ta3J5cHRvbml0ZScsXG5cdFx0XHRuYW1lOiAnRmFudGFzeSBtaXh0YXBlLCB2b2wuMScsXG5cdFx0XHRhcnRpc3Q6ICfQodC60YDQuNC/0YLQvtC90LjRgicsXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9za3J5cC5qcGcnLFxuXHRcdH0sXG5cdFx0dGhpcmQ6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL0xPTkdfTElWRV84MTInLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL0FMQkxBS181MicsXG5cdFx0XHRuYW1lOiAnTE9ORyBMSVZFIDgxMicsXG5cdFx0XHRhcnRpc3Q6ICdBTEJMQUsgNTInLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvbG9uZ19saXZlLmpwZydcblx0XHR9LFxuXHRcdGZvdXJ0aDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvUFVTU1lfQk9ZJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC/QldCT0J7QoF/QmtCg0JjQlCcsXG5cdFx0XHRuYW1lOiAnUFVTU1kgQk9ZJyxcblx0XHRcdGFydGlzdDogJ9CV0JPQntCgINCa0KDQmNCUJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL1B1c3N5X0JveS5wbmcnXG5cdFx0fSxcblx0XHRmaWZ0aDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvSkFaWl9ET19JVCcsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvVG94aSQnLFxuXHRcdFx0bmFtZTogJ0pBWlogRE8gSVQnLFxuXHRcdFx0YXJ0aXN0OiAnVG94aSQnLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvSmF6el9kb19pdC5wbmcnXG5cdFx0fSxcblx0XHRzaXh0aDoge1xuXHRcdFx0YWxidW1IcmVmOiAnL2ZlZWQvU2Vuc2VfT2ZfSHVtYW4nLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL01hcmt1bCcsXG5cdFx0XHRuYW1lOiAnU2Vuc2UgT2YgSHVtYW4nLFxuXHRcdFx0YXJ0aXN0OiAnTWFya3VsJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL3NlbnNlX29mX2h1bWFuLnBuZydcblx0XHR9LFxuXHRcdHNldmVudGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL2NhbGlmb3JuaWFfcm9ja2V0X2Z1ZWxfcHRfMScsXG5cdFx0XHRhcnRpc3RIcmVmOiAnL2ZlZWQvQnVtYmxlX0JlZXp5Jyxcblx0XHRcdG5hbWU6ICdjYWxpZm9ybmlhIHJvY2tldCBmdWVsOiBwdC4gMScsXG5cdFx0XHRhcnRpc3Q6ICdCdW1ibGUgQmVlenknLFxuXHRcdFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvY2FsaWZvcm5pYS5qcGcnXG5cdFx0fSxcblx0XHRlaWdodGg6IHtcblx0XHRcdGFsYnVtSHJlZjogJy9mZWVkL1BISUxBUk1PTklBJyxcblx0XHRcdGFydGlzdEhyZWY6ICcvZmVlZC9QSEFSQU9IJyxcblx0XHRcdG5hbWU6ICdQSElMQVJNT05JQScsXG5cdFx0XHRhcnRpc3Q6ICdQSEFSQU9IJyxcblx0XHRcdGltYWdlOiAnLi9zdGF0aWMvaW1nL1BISUxBUk1PTklBLnBuZydcblx0XHR9LFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0hlYWRlci5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgSGVhZGVyLiAqL1xuZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHsgaHJlZiwgbmFtZX1dKSA9PiAoe1xuXHRcdFx0a2V5LFxuXHRcdFx0aHJlZixcblx0XHRcdG5hbWUsXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBSZW5kZXIgaGVhZGVyLlxuICAgICovXG5cdHJlbmRlcihpc0F1dGgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gJ21lbnVfX2l0ZW0nO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtcywgaXNBdXRofSk7XG5cdH1cbn0iLCIvKiogXG4gKiBcdEBjb25zdGFudFxuICAgIEB0eXBlIHtPYmplY3R9XG4qL1xuZXhwb3J0IGNvbnN0IEhlYWRlckNvbmZpZyA9IHtcblx0bWFpbjoge1xuXHRcdGhyZWY6ICcvZmVlZCcsXG5cdFx0bmFtZTogJ9CT0LvQsNCy0L3QvtC1Jyxcblx0fSxcblx0cG9kY2FzdHM6IHtcblx0XHRocmVmOiAnL3BvZGNhc3RzJyxcblx0XHRuYW1lOiAn0J/QvtC00LrQsNGB0YLRiycsXG5cdH0sXG5cdGNvbGxlY3Rpb246IHtcblx0XHRocmVmOiAnL2NvbGxlY3Rpb24nLFxuXHRcdG5hbWU6ICfQmtC+0LvQu9C10LrRhtC40Y8nLFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0xvZ2luLmhicyc7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBMb2dpbi4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG5cdGNvbnN0cnVjdG9yKHBhcmVudCwgY29uZmlnKSB7XG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI2NvbmZpZyA9IGNvbmZpZztcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgY29uZmlnLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnLlxuICAgICAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdHJldHVybiB0aGlzLiNjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGl0ZW1zLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gaXRlbXMuXG4gICAgICovXG5cdGdldCBpdGVtcygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb25maWcpLm1hcCgoW2tleSwge3R5cGUsIHRleHQsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdHR5cGUsXG5cdFx0XHR0ZXh0LFxuXHRcdFx0bmFtZSwgXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBSZW5kZXIgbG9naW4gcGFnZS5cbiAgICAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdsb2dpbl9faW5wdXQnO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtc30pO1xuXHR9XG59IiwiLyoqXG4gKiAgQGNvbnN0YW50XG4qICBAdHlwZSB7T2JqZWN0fVxuKi9cbmV4cG9ydCBjb25zdCBMb2dpbkNvbmZpZyA9IHtcblx0RW1haWxJbnB1dDoge1xuXHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0dGV4dDogJ0VtYWlsJyxcblx0XHRuYW1lOiAnZW1haWwnLFxuXHR9LFxuXHRQYXNzd29yZElucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL1NpZ25VcC5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgU2lnblVwLiAqL1xuZXhwb3J0IGNsYXNzIFNpZ251cCB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHt0eXBlLCB0ZXh0LCBuYW1lfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHR0eXBlLFxuXHRcdFx0dGV4dCxcblx0XHRcdG5hbWUsIFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICAqIFJlbmRlciBzaWdudXAgcGFnZS5cbiAgICAgKi9cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdGxldCBjbGFzc05hbWUgPSAnU2lnbnVwX19pbnB1dCc7XG5cdFx0XHRyZXR1cm4gey4uLmVsZW1lbnQsIGNsYXNzTmFtZX07XG5cdFx0fSk7XG5cblx0XHR0aGlzLiNwYXJlbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUoe2l0ZW1zfSk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIFx0QGNvbnN0YW50XG4gICAgQHR5cGUge09iamVjdH1cbiovXG5leHBvcnQgY29uc3QgU2lnblVwQ29uZmlnID0ge1xuXHRVc2VybmFtZUlucHV0OiB7XG5cdFx0dHlwZTogJ3VzZXJuYW1lJyxcblx0XHR0ZXh0OiAn0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycsXG5cdFx0bmFtZTogJ3VzZXJuYW1lJyxcblx0fSxcblx0RW1haWxJbnB1dDoge1xuXHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0dGV4dDogJ0VtYWlsJyxcblx0XHRuYW1lOiAnZW1haWwnLFxuXHR9LFxuXHRQYXNzd29yZElucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHR9LFxuXHRQYXNzd29yZENoZWNrSW5wdXQ6IHtcblx0XHR0eXBlOiAncGFzc3dvcmQnLFxuXHRcdHRleHQ6ICfQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmRDaGVjaycsXG5cdH0sXG5cdERhdGVJbnB1dDoge1xuXHRcdHR5cGU6ICdkYXRlJyxcblx0XHR0ZXh0OiAnYXNkJyxcblx0XHRuYW1lOiAnZGF0ZScsXG5cdH0sXG59O1xuIiwiaW1wb3J0ICcuL21vZHVsZXMvYWpheC5qcyc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQvRmVlZC5qcyc7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyc7XG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tICcuL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcC5qcyc7XG5pbXBvcnQgeyBGZWVkQ29uZmlnIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQvRmVlZENvbnN0LmpzJztcbmltcG9ydCB7IEhlYWRlckNvbmZpZyB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29uc3QuanMnO1xuaW1wb3J0IHsgTG9naW5Db25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW5Db25zdC5qcyc7XG5pbXBvcnQgeyBTaWduVXBDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcENvbnN0LmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vKiogXG4gKiBAY29uc3RhbnRcbiAgICBAdHlwZSB7c3RyaW5nfVxuKi9cbmNvbnN0IEhPU1QgPSAnaHR0cHM6Ly9tdXNpY29uLnNwYWNlJztcblxuLyoqIFxuICogQGNvbnN0YW50XG4gICAgQHR5cGUge3N0cmluZ31cbiovXG5jb25zdCBQT1JUID0gJzo4MDgwJztcblxuLyoqIFxuKiBAY29uc3RhbnRcbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCByb3V0ZUNvbmZpZyA9IHtcblx0Jy9mZWVkJzoge1xuXHRcdG5hbWU6ICfQk9C70LDQstC90L7QtScsXG5cdFx0cmVuZGVyOiByZW5kZXJGZWVkLFxuXHR9LFxuXHQnL3BvZGNhc3RzJzoge1xuXHRcdG5hbWU6ICfQn9C+0LTQutCw0YHRgtGLJyxcblx0XHRyZW5kZXI6IHJlbmRlclBvZGNhc3RzLFxuXHR9LFxuXHQnL2NvbGxlY3Rpb24nOiB7XG5cdFx0bmFtZTogJ9Ca0L7Qu9C70LXQutGG0LjRjycsXG5cdFx0cmVuZGVyOiByZW5kZXJDb2xsZWN0aW9uLFxuXHR9LFxuXHQnL2xvZ2luJzoge1xuXHRcdG5hbWU6ICfQm9C+0LPQuNC9Jyxcblx0XHRyZW5kZXI6IHJlbmRlckxvZ2luLFxuXHR9LFxuXHQnL3NpZ251cCc6IHtcblx0XHRuYW1lOiAn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjycsXG5cdFx0cmVuZGVyOiByZW5kZXJTaWduVXAsXG5cdH0sXG5cdCcvc2lnbm91dCc6IHtcblx0XHRuYW1lOiAn0JLRi9C50YLQuCcsXG5cdFx0cmVuZGVyOiByZW5kZXJTaWdub3V0LFxuXHR9LFxufTtcblxuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG5jb25zdCBtZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5yb290RWxlbWVudC5hcHBlbmRDaGlsZChtZW51RWxlbWVudCk7XG5yb290RWxlbWVudC5hcHBlbmRDaGlsZChwYWdlRWxlbWVudCk7XG5cbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIobWVudUVsZW1lbnQsIEhlYWRlckNvbmZpZyk7XG5jb25zdCBmZWVkID0gbmV3IEZlZWQocGFnZUVsZW1lbnQsIEZlZWRDb25maWcuZmVlZCwgRmVlZENvbmZpZy5jb250ZW50KTtcbmNvbnN0IGxvZ2luID0gbmV3IExvZ2luKHBhZ2VFbGVtZW50LCBMb2dpbkNvbmZpZyk7XG5jb25zdCBzaWdudXAgPSBuZXcgU2lnbnVwKHBhZ2VFbGVtZW50LCBTaWduVXBDb25maWcpO1xubGV0IGlzQXV0aCA9IGZhbHNlO1xuXG5yZW5kZXJGZWVkKCk7XG5cblxuLyoqXG4qIFJlbmRlcnMgaG9tZSBwYWdlLlxuKi9cbmZ1bmN0aW9uIHJlbmRlckZlZWQoKSB7XG5cdHdpbmRvdy5BamF4LmdldCh7XG5cdFx0dXJsOiBIT1NUICsgUE9SVCArICcvYXBpL3YxL2F1dGg/aWQ9JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpLFxuXHR9KVxuXHRcdC50aGVuKCh7IHN0YXR1cyB9KSA9PiB7XG5cdFx0XHRpZiAoc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0aXNBdXRoID0gdHJ1ZTtcblx0XHRcdH1cdFxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdGhlYWRlci5yZW5kZXIoaXNBdXRoKTtcblx0ZmVlZC5yZW5kZXIoKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIFNpZ251cCBwYWdlLlxuICovXG5mdW5jdGlvbiByZW5kZXJTaWduVXAoKSB7XG5cdHNpZ251cC5yZW5kZXIoKTtcblx0Y29uc3Qgc2lnbnVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuXHRzaWdudXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgZW1haWwgPSBzaWdudXBGb3JtLmVsZW1lbnRzLmVtYWlsLnZhbHVlO1xuXHRcdGNvbnN0IHBhc3N3b3JkID0gc2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC52YWx1ZTtcblx0XHRjb25zdCBwYXNzd29yZENoZWNrID0gc2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnZhbHVlO1xuXHRcdGNvbnN0IGJpcnRoRGF0ZSA9IHNpZ251cEZvcm0uZWxlbWVudHMuZGF0ZS52YWx1ZTtcblx0XHRjb25zdCB1c2VybmFtZSA9IHNpZ251cEZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWU7XG5cblx0XHRpZiAocGFzc3dvcmQgPT0gcGFzc3dvcmRDaGVjaykge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzY2hlY2tcIl0nKS5zdHlsZSA9ICd2aXNpYmlsaXR5OiBoaWRkZW4nO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC5zdHlsZSA9ICdib3JkZXItY29sb3I6ICNGRkZGRkYnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0ZGRkZGRic7XG5cblx0XHRcdHdpbmRvdy5BamF4LnBvc3Qoe1xuXHRcdFx0XHR1cmw6IEhPU1QgKyBQT1JUICsgJy9hcGkvdjEvc2lnbl91cCcsXG5cdFx0XHRcdGJvZHk6IHsgZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCwgYmlydGhEYXRlIH0sXG5cdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoeyBzdGF0dXMsIHBhcnNlZEpzb24gfSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdFx0aXNBdXRoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHBhcnNlZEpzb24uSWQpO1xuXHRcdFx0XHRcdFx0Z29Ub1BhZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VjdGlvbj1cIi9mZWVkXCJdJykpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0Z29Ub1BhZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VjdGlvbj1cIi9mZWVkXCJdJykpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhbGVydCgn0J7RiNC40LHQutCwINC/0YDQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4IScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3NjaGVja1wiXScpLnN0eWxlID0gJ3Zpc2liaWxpdHk6IHZpc2libGUnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZC5zdHlsZSA9ICdib3JkZXItY29sb3I6ICNFRjU4NTgnO1xuXHRcdFx0c2lnbnVwRm9ybS5lbGVtZW50cy5wYXNzd29yZENoZWNrLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0VGNTg1OCc7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG4vKipcbiAqIFJlbmRlcnMgTG9naW4gcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTG9naW4oKSB7XG5cdGxvZ2luLnJlbmRlcigpO1xuXG5cdGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuXHRsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbWFpbCA9IGxvZ2luRm9ybS5lbGVtZW50cy5lbWFpbC52YWx1ZTtcblx0XHRjb25zdCBwYXNzd29yZCA9IGxvZ2luRm9ybS5lbGVtZW50cy5wYXNzd29yZC52YWx1ZTtcblxuXHRcdHdpbmRvdy5BamF4LnBvc3Qoe1xuXHRcdFx0dXJsOiBIT1NUICsgUE9SVCArICcvYXBpL3YxL2xvZ2luJyxcblx0XHRcdGJvZHk6IHsgZW1haWwsIHBhc3N3b3JkIH0sXG5cdFx0fSlcblx0XHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRcdGlmIChzdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHBhcnNlZEpzb24uSWQpO1xuXHRcdFx0XHRcdGlzQXV0aCA9IHRydWU7XG5cdFx0XHRcdFx0Z29Ub1BhZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VjdGlvbj1cIi9mZWVkXCJdJykpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRhbGVydCgn0J3QtdCy0LXRgNC90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCDQv9Cw0YDQvtC70YwhJyk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIFBvZGNhc3RzIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclBvZGNhc3RzKCkge1xuXG59XG5cbi8qKlxuICogUmVuZGVycyBDb2xsZWN0aW9uIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbGxlY3Rpb24oKSB7XG5cbn1cblxuLyoqXG4gKiBSZW5kZXJzIFNpZ25vdXQgcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2lnbm91dCgpIHtcblx0d2luZG93LkFqYXgucG9zdCh7XG5cdFx0dXJsOiBIT1NUICsgUE9SVCArICcvYXBpL3YxL2xvZ291dCcsXG5cdFx0Ym9keToge2lkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKX1cblx0fSlcblx0XHQudGhlbigoeyBzdGF0dXMsIHBhcnNlZEpzb24gfSkgPT4ge1xuXHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdGlzQXV0aCA9IGZhbHNlO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBudWxsKTtcblx0XHRcdFx0Z29Ub1BhZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VjdGlvbj1cIi9mZWVkXCJdJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhwYXJzZWRKc29uLmVycik7XG5cdFx0XHRhbGVydCgn0J3QtdCy0LXRgNC90L7QtSDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCDQv9Cw0YDQvtC70YwhJyk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9KTtcbn1cblxuLyoqXG4gKiBHb2VzIHRvIGFub3RoZXIgcGFnZVxuICogQHBhcmFtIHtIVE1MQW5jaG9yRWxlbWVudH0gTGluayBcbiAqL1xuZnVuY3Rpb24gZ29Ub1BhZ2UoTGluaykge1xuXHRtZW51RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0cGFnZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cblx0Zm9yIChsZXQgaHJlZiBpbiByb3V0ZUNvbmZpZykge1xuXHRcdGlmIChMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJykgPT09IGhyZWYpIHtcblx0XHRcdHJvdXRlQ29uZmlnW2hyZWZdLnJlbmRlcihpc0F1dGgpO1xuXHRcdH1cblx0fVxufVxuXG5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuXG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJykgPT09ICcvbG9naW4nKSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRnb1RvUGFnZShlLnRhcmdldCk7XG5cdH1cbn0pO1xuIiwiLy8g0JTQtdC80L7QvdGB0YLRgNCw0YbQuNGPINC80L7QtNGD0LvQtdC5INC90LAgSUlGRS4g0K3RgtC+INGD0YHRgtCw0YDQtdCy0YjQsNGPINC60L7QvdGG0LXQv9GG0LjRjywg0L3QviDQv9GA0LXQutGA0LDRgdC90L4g0YDQsNCx0L7RgtCw0LXRgiDQtNC+INGB0LjRhSDQv9C+0YBcbihmdW5jdGlvbiAoKSB7XG5cdFxuXHQvKipcblx0KiAgQGNvbnN0YW50XG5cdCogIEB0eXBlIHtPYmplY3R9XG5cdCovXG5cdGNvbnN0IEFKQVhfTUVUSE9EUyA9IHtcblx0XHRHRVQ6ICdHRVQnLFxuXHRcdFBPU1Q6ICdQT1NUJyxcblx0fTtcblxuXHQvKiogQ2xhc3MgcmVwcmVzZW50aW5nIEFqYXggbW9kdWxlLiAqL1xuXHRjbGFzcyBBamF4IHtcblxuXHRcdC8qKlxuXHRcdCAqIE1ha2VzIGdldCByZXF1ZXN0LlxuXHRcdCAqIEBhc3luY1xuXHRcdCAqIEBmdW5jdGlvbiBnZXRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG5cdFx0ICogQHJldHVybiB7T2JqZWN0fSBzdGF0dXMgYW5kIHBhcnNlZEpzb25cblx0XHQgKi9cblx0XHRhc3luYyBnZXQocGFyYW1zID0ge30pIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGFyYW1zLnVybCwge1xuXHRcdFx0XHRtZXRob2Q6IEFKQVhfTUVUSE9EUy5HRVQsXG5cdFx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgcGFyc2VkQm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdHBhcnNlZEpzb246IHBhcnNlZEJvZHksXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIE1ha2VzIHBvc3QgcmVxdWVzdC5cblx0XHQgKiBAYXN5bmNcblx0XHQgKiBAZnVuY3Rpb24gcG9zdFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcblx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHN0YXR1cyBhbmQgcGFyc2VkSnNvblxuXHRcdCAqL1xuXHRcdGFzeW5jIHBvc3QocGFyYW1zID0ge30pIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGFyYW1zLnVybCwge1xuXHRcdFx0XHRtZXRob2Q6IEFKQVhfTUVUSE9EUy5QT1NULFxuXHRcdFx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuXHRcdFx0XHRtb2RlOiAnY29ycycsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMuYm9keSksXG5cdFx0XHR9KTtcbiBcblx0XHRcdGNvbnN0IHBhcnNlZEJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0XHRwYXJzZWRKc29uOiBwYXJzZWRCb2R5LFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHR3aW5kb3cuQWpheCA9IG5ldyBBamF4KCk7XG59KSgpO1xuIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjbGFzc05hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJmZWVkYVxcXCIgaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaHJlZlwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgZGF0YS1zZWN0aW9uPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJrZXlcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9saT5cXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWxidW1IcmVmXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiA+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImNvbnRlbnRQaG90b1xcXCIgc3JjPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpbWFnZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInNvbmdOYW1lXFxcIj5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9wPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhcnRpc3RIcmVmXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiA+PHAgY2xhc3M9XFxcImFydGlzdE5hbWVcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFydGlzdFwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvcD48L2E+XFxuICAgICAgICA8L2xpPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJmZWVkVGV4dFxcXCI+0JPQu9Cw0LLQvdC+0LU8L2Rpdj5cXG48dWwgY2xhc3M9XFxcImZlZWRcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3VsPlxcblxcbjxoMT7QndC+0LLRi9C1INGC0YDQtdC60LgsINCw0LvRjNCx0L7QvNGLINC4INGB0LHQvtGA0L3QuNC60Lg8L2gxPlxcblxcbjx1bCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29udGVudFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyNCxcImNvbHVtblwiOjEzfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdWw+XFxuICAgIFwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY2xhc3NOYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImhlYWRlcmFcXFwiIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImhyZWZcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGRhdGEtc2VjdGlvbj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaHJlZlwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3Byb2ZpbGVcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0F2YXRhclxcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvd29ybS5qcGdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJzaWdub3V0XFxcIiBocmVmPVxcXCIvc2lnbm91dFxcXCIgZGF0YS1zZWN0aW9uPVxcXCIvc2lnbm91dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICDQktGL0LnRgtC4XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImxvZ2luXFxcIiBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCIgPjxidXR0b24gY2xhc3M9XFxcImxvZ2luQnV0dG9uXFxcIiBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCI+0JLQvtC50YLQuDwvYnV0dG9uPjwvYT5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImFzZFxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICA8L2xpPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTMsXCJjb2x1bW5cIjoxN319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwibWVudV9faXRlbVxcXCI+PGltZyBzcmM9XFxcIi4vc3RhdGljL2ltZy9Mb3VwZS5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiaW5wdXRfc2VhcmNoXFxcIj4gXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLXNlY3Rpb249XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyID1cXFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQv9C10YHQvdC4INC40LvQuCDQsNC70YzQsdC+0LzQsFxcXCI+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9saT5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaXNBdXRoXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjE1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3VsPlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJlcXVpcmVkID5cXG4gICAgICAgICAgICA8L2xpPiBcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcImxvZ2luXFxcIj5cXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cXFwicG9zdFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjIxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJTdWJtaXRMb2dpbkJ1dHRvblxcXCIgIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JLQvtC50YLQuDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICBcXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInlldFxcXCI+XFxuICAgICAgICAgICAg0JXRidGRINC90LXRgiDRg9GH0ZHRgtC90L7QuSDQt9Cw0L/QuNGB0Lg/XFxuICAgICAgICAgICAgPGEgZGF0YS1zZWN0aW9uPVxcXCIvc2lnbnVwXFxcIiBjbGFzcz1cXFwieWV0YVxcXCIgaHJlZj1cXFwiL2xvZ2luXFxcIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgIDwvdWw+XFxuPC9kaXY+XFxuXFxuICAgIFwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJlcXVpcmVkID5cXG4gICAgICAgICAgICA8L2xpPiBcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcInNpZ251cFxcXCI+XFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9mZWVkXFxcIiBocmVmPVxcXCJcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0xvZ29cXFwiIHNyYz1cXFwiLi9zdGF0aWMvaW1nL0xvZ28uc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29UZXh0XFxcIj5NdXNpY09uPC9kaXY+ICAgIFxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XFxcInBvc3RcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpdGVtc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjoyMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFzc2NoZWNrXFxcIiBuYW1lPVxcXCJwYXNzY2hlY2tcXFwiID7Qn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YIhPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiU3VibWl0TG9naW5CdXR0b25cXFwiIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInlldFxcXCI+XFxuICAgICAgICAgICAg0KPQttC1INC10YHRgtGMINGD0YfQtdGC0L3QsNGPINC30LDQv9C40YHRjD9cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCIgY2xhc3M9XFxcInlldGFcXFwiIGhyZWY9XFxcIi9sb2dpblxcXCI+0JLQvtC50LTQuNGC0LU8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYWRkb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthZGRvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsidGVtcGxhdGUiLCJGZWVkIiwicGFyZW50IiwiY29uZmlnRmVlZCIsImNvbmZpZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIml0ZW1zIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsImhyZWYiLCJuYW1lIiwiY29udGVudCIsImFsYnVtSHJlZiIsImFydGlzdEhyZWYiLCJhcnRpc3QiLCJpbWFnZSIsInJlbmRlciIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJGZWVkQ29uZmlnIiwiZmVlZCIsImFsbCIsIm5ldyIsImNoYXJ0IiwicGxheWxpc3RzIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwic2l4dGgiLCJzZXZlbnRoIiwiZWlnaHRoIiwiSGVhZGVyIiwiY29uZmlnIiwiaXNBdXRoIiwiSGVhZGVyQ29uZmlnIiwibWFpbiIsInBvZGNhc3RzIiwiY29sbGVjdGlvbiIsIkxvZ2luIiwidHlwZSIsInRleHQiLCJMb2dpbkNvbmZpZyIsIkVtYWlsSW5wdXQiLCJQYXNzd29yZElucHV0IiwiU2lnbnVwIiwiU2lnblVwQ29uZmlnIiwiVXNlcm5hbWVJbnB1dCIsIlBhc3N3b3JkQ2hlY2tJbnB1dCIsIkRhdGVJbnB1dCIsIkhPU1QiLCJQT1JUIiwicm91dGVDb25maWciLCJyZW5kZXJGZWVkIiwicmVuZGVyUG9kY2FzdHMiLCJyZW5kZXJDb2xsZWN0aW9uIiwicmVuZGVyTG9naW4iLCJyZW5kZXJTaWduVXAiLCJyZW5kZXJTaWdub3V0Iiwicm9vdEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYWdlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaGVhZGVyIiwibG9naW4iLCJzaWdudXAiLCJ3aW5kb3ciLCJBamF4IiwiZ2V0IiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJzdGF0dXMiLCJjYXRjaCIsImVycm9yIiwic2lnbnVwRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImVsZW1lbnRzIiwidmFsdWUiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJiaXJ0aERhdGUiLCJkYXRlIiwidXNlcm5hbWUiLCJzdHlsZSIsInBvc3QiLCJib2R5IiwicGFyc2VkSnNvbiIsInNldEl0ZW0iLCJJZCIsImdvVG9QYWdlIiwiYWxlcnQiLCJsb2dpbkZvcm0iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJMaW5rIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0IiwiSFRNTEFuY2hvckVsZW1lbnQiLCJIVE1MQnV0dG9uRWxlbWVudCIsIkFKQVhfTUVUSE9EUyIsIkdFVCIsIlBPU1QiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInBhcnNlZEJvZHkiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=