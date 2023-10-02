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
  set setConfigContent(config) {
    this.#configContent = config;
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
    // let a = Object.entries(this.configContent);
    // console.log(a);
    // a.map(([key, {name, }]) => ({

    // }));
    return Object.entries(this.configContent).map(([key, {
      Name,
      Artist,
      Album,
      Preview,
      Content
    }]) => ({
      key,
      Name,
      Artist,
      Album,
      Preview,
      Content
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
      artist: {
        name: 'Mayot',
        id: 1
      },
      image: './static/img/both.jpg'
    }
    // second: {
    // 	albumHref: '/feed/Fantasy_mixtape_vol.1',
    // 	artistHref: '/feed/Skryptonite',
    // 	name: 'Fantasy mixtape, vol.1',
    // 	artist: 'Скриптонит',
    // 	image: './static/img/skryp.jpg',
    // },
    // third: {
    // 	albumHref: '/feed/LONG_LIVE_812',
    // 	artistHref: '/feed/ALBLAK_52',
    // 	name: 'LONG LIVE 812',
    // 	artist: 'ALBLAK 52',
    // 	image: './static/img/long_live.jpg'
    // },
    // fourth: {
    // 	albumHref: '/feed/PUSSY_BOY',
    // 	artistHref: '/feed/ЕГОР_КРИД',
    // 	name: 'PUSSY BOY',
    // 	artist: 'ЕГОР КРИД',
    // 	image: './static/img/Pussy_Boy.png'
    // },
    // fifth: {
    // 	albumHref: '/feed/JAZZ_DO_IT',
    // 	artistHref: '/feed/Toxi$',
    // 	name: 'JAZZ DO IT',
    // 	artist: 'Toxi$',
    // 	image: './static/img/Jazz_do_it.png'
    // },
    // sixth: {
    // 	albumHref: '/feed/Sense_Of_Human',
    // 	artistHref: '/feed/Markul',
    // 	name: 'Sense Of Human',
    // 	artist: 'Markul',
    // 	image: './static/img/sense_of_human.png'
    // },
    // seventh: {
    // 	albumHref: '/feed/california_rocket_fuel_pt_1',
    // 	artistHref: '/feed/Bumble_Beezy',
    // 	name: 'california rocket fuel: pt. 1',
    // 	artist: 'Bumble Beezy',
    // 	image: './static/img/california.jpg'
    // },
    // eighth: {
    // 	albumHref: '/feed/PHILARMONIA',
    // 	artistHref: '/feed/PHARAOH',
    // 	name: 'PHILARMONIA',
    // 	artist: 'PHARAOH',
    // 	image: './static/img/PHILARMONIA.png'
    // },
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
let feed = new _components_Feed_Feed_js__WEBPACK_IMPORTED_MODULE_2__.Feed(pageElement, _components_Feed_FeedConst_js__WEBPACK_IMPORTED_MODULE_5__.FeedConfig.feed, _components_Feed_FeedConst_js__WEBPACK_IMPORTED_MODULE_5__.FeedConfig.content);
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
  window.Ajax.get({
    url: HOST + PORT + '/api/v1/music'
  }).then(({
    status,
    parsedJson
  }) => {
    if (status === 200) {
      console.log(parsedJson);
      feed.setConfigContent(parsedJson);
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
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"className") : depth0), depth0))
    + "\">\n            <a href=\"\" >\n                <img class=\"contentPhoto\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"Preview") : depth0), depth0))
    + "\" alt=\"1\">\n                <p class=\"songName\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"Name") : depth0), depth0))
    + "</p>\n            </a>\n            <a href=\"\" ><p class=\"artistName\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"Artist") : depth0)) != null ? lookupProperty(stack1,"Name") : stack1), depth0))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0ZlZWQvRmVlZC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvRmVlZC9GZWVkQ29uc3QuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJDb25zdC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29uc3QuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL1NpZ25VcC9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vYWRkby8uL3NyYy9jb21wb25lbnRzL1NpZ25VcC9TaWduVXBDb25zdC5qcyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvbW9kdWxlcy9hamF4LmpzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9GZWVkL0ZlZWQuaGJzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmhicyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uaGJzIiwid2VicGFjazovL2FkZG8vLi9zcmMvY29tcG9uZW50cy9TaWduVXAvU2lnblVwLmhicyIsIndlYnBhY2s6Ly9hZGRvLy4vc3JjL2luZGV4LmNzcz9hNGI3Iiwid2VicGFjazovL2FkZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWRkby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FkZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hZGRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9GZWVkLmhicyc7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBGZWVkLiAqL1xuZXhwb3J0IGNsYXNzIEZlZWQge1xuXHQjcGFyZW50O1xuXHQjY29uZmlnRmVlZDtcblx0I2NvbmZpZ0NvbnRlbnQ7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnRmVlZCBcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ0NvbnRlbnQgXG4gICAgICovXG5cdGNvbnN0cnVjdG9yKHBhcmVudCwgY29uZmlnRmVlZCwgY29uZmlnQ29udGVudCkge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWdGZWVkID0gY29uZmlnRmVlZDtcblx0XHR0aGlzLiNjb25maWdDb250ZW50ID0gY29uZmlnQ29udGVudDtcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgY29uZmlnRmVlZC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZ0ZlZWQuXG4gICAgICovXG5cdGdldCBjb25maWdGZWVkKCkge1xuXHRcdHJldHVybiB0aGlzLiNjb25maWdGZWVkO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBjb25maWdDb250ZW50LlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnQ29udGVudC5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZ0NvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuI2NvbmZpZ0NvbnRlbnQ7XG5cdH1cblxuXHRzZXQgc2V0Q29uZmlnQ29udGVudChjb25maWcpIHtcblx0XHR0aGlzLiNjb25maWdDb250ZW50ID0gY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnRmVlZCkubWFwKChba2V5LCB7IGhyZWYsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdGhyZWYsXG5cdFx0XHRuYW1lLCBcblx0XHR9KSk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBjb250ZW50LlxuICAgICAqL1xuXHRnZXQgY29udGVudCgpIHtcblx0XHQvLyBsZXQgYSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnQ29udGVudCk7XG5cdFx0Ly8gY29uc29sZS5sb2coYSk7XG5cdFx0Ly8gYS5tYXAoKFtrZXksIHtuYW1lLCB9XSkgPT4gKHtcblxuXHRcdC8vIH0pKTtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb25maWdDb250ZW50KS5tYXAoKFtrZXksIHsgTmFtZSwgQXJ0aXN0LCBBbGJ1bSwgUHJldmlldywgQ29udGVudH1dKSA9PiAoe1xuXHRcdFx0a2V5LFxuXHRcdFx0TmFtZSxcblx0XHRcdEFydGlzdCxcblx0XHRcdEFsYnVtLFxuXHRcdFx0UHJldmlldyxcblx0XHRcdENvbnRlbnRcblx0XHR9KSk7XG5cdH1cblxuXHQvKipcbiAgICAqIFJlbmRlciBoZWFkZXIuXG4gICAgKi9cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdGxldCBjbGFzc05hbWUgPSAnZmVlZF9faXRlbSc7XG5cdFx0XHRyZXR1cm4gey4uLmVsZW1lbnQsIGNsYXNzTmFtZX07XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50Lm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdjb250ZW50X19pdGVtJztcblx0XHRcdHJldHVybiB7Li4uZWxlbWVudCwgY2xhc3NOYW1lfTtcblx0XHR9KTtcblxuXHRcdHRoaXMuI3BhcmVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7aXRlbXMsIGNvbnRlbnR9KTtcblx0fVxufSIsIi8qKiBcbiAqIFx0QGNvbnN0YW50XG4gICAgQHR5cGUge09iamVjdH1cbiovXG5leHBvcnQgY29uc3QgRmVlZENvbmZpZyA9IHtcblx0ZmVlZDoge1xuXHRcdGFsbDoge1xuXHRcdFx0aHJlZjogJy9mZWVkL2FsbCcsXG5cdFx0XHRuYW1lOiAn0JLRgdGRJyxcblx0XHR9LFxuXHRcdG5ldzoge1xuXHRcdFx0aHJlZjogJy9mZWVkL25ldycsXG5cdFx0XHRuYW1lOiAn0J3QvtCy0L7QtScsXG5cdFx0fSxcblx0XHRjaGFydDoge1xuXHRcdFx0aHJlZjogJy9mZWVkL2NoYXJ0Jyxcblx0XHRcdG5hbWU6ICfQp9Cw0YDRgicsXG5cdFx0fSxcblx0XHRwbGF5bGlzdHM6IHtcblx0XHRcdGhyZWY6ICcvZmVlZC9wbGF5bGlzdHMnLFxuXHRcdFx0bmFtZTogJ9Cf0L7QtNCx0L7RgNC60LgnLFxuXHRcdH1cblx0fSxcblx0Y29udGVudDoge1xuXHRcdGZpcnN0OiB7XG5cdFx0XHRhbGJ1bUhyZWY6ICcvZmVlZC9PYmEnLFxuXHRcdFx0YXJ0aXN0SHJlZjogJy9mZWVkL01heW90Jyxcblx0XHRcdG5hbWU6ICfQntCx0LAnLFxuXHRcdFx0YXJ0aXN0OiB7bmFtZTogJ01heW90Jyxcblx0XHRpZDogMX0sXG5cdFx0XHRpbWFnZTogJy4vc3RhdGljL2ltZy9ib3RoLmpwZydcblx0XHR9LFxuXHRcdC8vIHNlY29uZDoge1xuXHRcdC8vIFx0YWxidW1IcmVmOiAnL2ZlZWQvRmFudGFzeV9taXh0YXBlX3ZvbC4xJyxcblx0XHQvLyBcdGFydGlzdEhyZWY6ICcvZmVlZC9Ta3J5cHRvbml0ZScsXG5cdFx0Ly8gXHRuYW1lOiAnRmFudGFzeSBtaXh0YXBlLCB2b2wuMScsXG5cdFx0Ly8gXHRhcnRpc3Q6ICfQodC60YDQuNC/0YLQvtC90LjRgicsXG5cdFx0Ly8gXHRpbWFnZTogJy4vc3RhdGljL2ltZy9za3J5cC5qcGcnLFxuXHRcdC8vIH0sXG5cdFx0Ly8gdGhpcmQ6IHtcblx0XHQvLyBcdGFsYnVtSHJlZjogJy9mZWVkL0xPTkdfTElWRV84MTInLFxuXHRcdC8vIFx0YXJ0aXN0SHJlZjogJy9mZWVkL0FMQkxBS181MicsXG5cdFx0Ly8gXHRuYW1lOiAnTE9ORyBMSVZFIDgxMicsXG5cdFx0Ly8gXHRhcnRpc3Q6ICdBTEJMQUsgNTInLFxuXHRcdC8vIFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvbG9uZ19saXZlLmpwZydcblx0XHQvLyB9LFxuXHRcdC8vIGZvdXJ0aDoge1xuXHRcdC8vIFx0YWxidW1IcmVmOiAnL2ZlZWQvUFVTU1lfQk9ZJyxcblx0XHQvLyBcdGFydGlzdEhyZWY6ICcvZmVlZC/QldCT0J7QoF/QmtCg0JjQlCcsXG5cdFx0Ly8gXHRuYW1lOiAnUFVTU1kgQk9ZJyxcblx0XHQvLyBcdGFydGlzdDogJ9CV0JPQntCgINCa0KDQmNCUJyxcblx0XHQvLyBcdGltYWdlOiAnLi9zdGF0aWMvaW1nL1B1c3N5X0JveS5wbmcnXG5cdFx0Ly8gfSxcblx0XHQvLyBmaWZ0aDoge1xuXHRcdC8vIFx0YWxidW1IcmVmOiAnL2ZlZWQvSkFaWl9ET19JVCcsXG5cdFx0Ly8gXHRhcnRpc3RIcmVmOiAnL2ZlZWQvVG94aSQnLFxuXHRcdC8vIFx0bmFtZTogJ0pBWlogRE8gSVQnLFxuXHRcdC8vIFx0YXJ0aXN0OiAnVG94aSQnLFxuXHRcdC8vIFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvSmF6el9kb19pdC5wbmcnXG5cdFx0Ly8gfSxcblx0XHQvLyBzaXh0aDoge1xuXHRcdC8vIFx0YWxidW1IcmVmOiAnL2ZlZWQvU2Vuc2VfT2ZfSHVtYW4nLFxuXHRcdC8vIFx0YXJ0aXN0SHJlZjogJy9mZWVkL01hcmt1bCcsXG5cdFx0Ly8gXHRuYW1lOiAnU2Vuc2UgT2YgSHVtYW4nLFxuXHRcdC8vIFx0YXJ0aXN0OiAnTWFya3VsJyxcblx0XHQvLyBcdGltYWdlOiAnLi9zdGF0aWMvaW1nL3NlbnNlX29mX2h1bWFuLnBuZydcblx0XHQvLyB9LFxuXHRcdC8vIHNldmVudGg6IHtcblx0XHQvLyBcdGFsYnVtSHJlZjogJy9mZWVkL2NhbGlmb3JuaWFfcm9ja2V0X2Z1ZWxfcHRfMScsXG5cdFx0Ly8gXHRhcnRpc3RIcmVmOiAnL2ZlZWQvQnVtYmxlX0JlZXp5Jyxcblx0XHQvLyBcdG5hbWU6ICdjYWxpZm9ybmlhIHJvY2tldCBmdWVsOiBwdC4gMScsXG5cdFx0Ly8gXHRhcnRpc3Q6ICdCdW1ibGUgQmVlenknLFxuXHRcdC8vIFx0aW1hZ2U6ICcuL3N0YXRpYy9pbWcvY2FsaWZvcm5pYS5qcGcnXG5cdFx0Ly8gfSxcblx0XHQvLyBlaWdodGg6IHtcblx0XHQvLyBcdGFsYnVtSHJlZjogJy9mZWVkL1BISUxBUk1PTklBJyxcblx0XHQvLyBcdGFydGlzdEhyZWY6ICcvZmVlZC9QSEFSQU9IJyxcblx0XHQvLyBcdG5hbWU6ICdQSElMQVJNT05JQScsXG5cdFx0Ly8gXHRhcnRpc3Q6ICdQSEFSQU9IJyxcblx0XHQvLyBcdGltYWdlOiAnLi9zdGF0aWMvaW1nL1BISUxBUk1PTklBLnBuZydcblx0XHQvLyB9LFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0hlYWRlci5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgSGVhZGVyLiAqL1xuZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHsgaHJlZiwgbmFtZX1dKSA9PiAoe1xuXHRcdFx0a2V5LFxuXHRcdFx0aHJlZixcblx0XHRcdG5hbWUsXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBSZW5kZXIgaGVhZGVyLlxuICAgICovXG5cdHJlbmRlcihpc0F1dGgpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gJ21lbnVfX2l0ZW0nO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtcywgaXNBdXRofSk7XG5cdH1cbn0iLCIvKiogXG4gKiBcdEBjb25zdGFudFxuICAgIEB0eXBlIHtPYmplY3R9XG4qL1xuZXhwb3J0IGNvbnN0IEhlYWRlckNvbmZpZyA9IHtcblx0bWFpbjoge1xuXHRcdGhyZWY6ICcvZmVlZCcsXG5cdFx0bmFtZTogJ9CT0LvQsNCy0L3QvtC1Jyxcblx0fSxcblx0cG9kY2FzdHM6IHtcblx0XHRocmVmOiAnL3BvZGNhc3RzJyxcblx0XHRuYW1lOiAn0J/QvtC00LrQsNGB0YLRiycsXG5cdH0sXG5cdGNvbGxlY3Rpb246IHtcblx0XHRocmVmOiAnL2NvbGxlY3Rpb24nLFxuXHRcdG5hbWU6ICfQmtC+0LvQu9C10LrRhtC40Y8nLFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL0xvZ2luLmhicyc7XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBMb2dpbi4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG5cdGNvbnN0cnVjdG9yKHBhcmVudCwgY29uZmlnKSB7XG5cdFx0dGhpcy4jcGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuI2NvbmZpZyA9IGNvbmZpZztcblx0fVxuXG5cdC8qKlxuICAgICAqIEdldCB0aGUgY29uZmlnLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gY29uZmlnLlxuICAgICAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdHJldHVybiB0aGlzLiNjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGl0ZW1zLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gaXRlbXMuXG4gICAgICovXG5cdGdldCBpdGVtcygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5jb25maWcpLm1hcCgoW2tleSwge3R5cGUsIHRleHQsIG5hbWV9XSkgPT4gKHtcblx0XHRcdGtleSxcblx0XHRcdHR5cGUsXG5cdFx0XHR0ZXh0LFxuXHRcdFx0bmFtZSwgXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBSZW5kZXIgbG9naW4gcGFnZS5cbiAgICAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9ICdsb2dpbl9faW5wdXQnO1xuXHRcdFx0cmV0dXJuIHsuLi5lbGVtZW50LCBjbGFzc05hbWV9O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4jcGFyZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtc30pO1xuXHR9XG59IiwiLyoqXG4gKiAgQGNvbnN0YW50XG4qICBAdHlwZSB7T2JqZWN0fVxuKi9cbmV4cG9ydCBjb25zdCBMb2dpbkNvbmZpZyA9IHtcblx0RW1haWxJbnB1dDoge1xuXHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0dGV4dDogJ0VtYWlsJyxcblx0XHRuYW1lOiAnZW1haWwnLFxuXHR9LFxuXHRQYXNzd29yZElucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHR9LFxufTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL1NpZ25VcC5oYnMnO1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgU2lnblVwLiAqL1xuZXhwb3J0IGNsYXNzIFNpZ251cCB7XG5cdCNwYXJlbnQ7XG5cdCNjb25maWc7XG5cblx0LyoqXG4gICAgICogU2V0cyBwYXJlbnQgYW5kIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFxuICAgICAqL1xuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIGNvbmZpZykge1xuXHRcdHRoaXMuI3BhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLiNjb25maWcgPSBjb25maWc7XG5cdH1cblxuXHQvKipcbiAgICAgKiBHZXQgdGhlIGNvbmZpZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZy5cbiAgICAgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy4jY29uZmlnO1xuXHR9XG5cblx0LyoqXG4gICAgICogR2V0IHRoZSBpdGVtcy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGl0ZW1zLlxuICAgICAqL1xuXHRnZXQgaXRlbXMoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnKS5tYXAoKFtrZXksIHt0eXBlLCB0ZXh0LCBuYW1lfV0pID0+ICh7XG5cdFx0XHRrZXksXG5cdFx0XHR0eXBlLFxuXHRcdFx0dGV4dCxcblx0XHRcdG5hbWUsIFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuICAgICAqIFJlbmRlciBzaWdudXAgcGFnZS5cbiAgICAgKi9cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdGxldCBjbGFzc05hbWUgPSAnU2lnbnVwX19pbnB1dCc7XG5cdFx0XHRyZXR1cm4gey4uLmVsZW1lbnQsIGNsYXNzTmFtZX07XG5cdFx0fSk7XG5cblx0XHR0aGlzLiNwYXJlbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUoe2l0ZW1zfSk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIFx0QGNvbnN0YW50XG4gICAgQHR5cGUge09iamVjdH1cbiovXG5leHBvcnQgY29uc3QgU2lnblVwQ29uZmlnID0ge1xuXHRVc2VybmFtZUlucHV0OiB7XG5cdFx0dHlwZTogJ3VzZXJuYW1lJyxcblx0XHR0ZXh0OiAn0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycsXG5cdFx0bmFtZTogJ3VzZXJuYW1lJyxcblx0fSxcblx0RW1haWxJbnB1dDoge1xuXHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0dGV4dDogJ0VtYWlsJyxcblx0XHRuYW1lOiAnZW1haWwnLFxuXHR9LFxuXHRQYXNzd29yZElucHV0OiB7XG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR0ZXh0OiAn0J/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHR9LFxuXHRQYXNzd29yZENoZWNrSW5wdXQ6IHtcblx0XHR0eXBlOiAncGFzc3dvcmQnLFxuXHRcdHRleHQ6ICfQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMJyxcblx0XHRuYW1lOiAncGFzc3dvcmRDaGVjaycsXG5cdH0sXG5cdERhdGVJbnB1dDoge1xuXHRcdHR5cGU6ICdkYXRlJyxcblx0XHR0ZXh0OiAnYXNkJyxcblx0XHRuYW1lOiAnZGF0ZScsXG5cdH0sXG59O1xuIiwiaW1wb3J0ICcuL21vZHVsZXMvYWpheC5qcyc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQvRmVlZC5qcyc7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qcyc7XG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tICcuL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcC5qcyc7XG5pbXBvcnQgeyBGZWVkQ29uZmlnIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQvRmVlZENvbnN0LmpzJztcbmltcG9ydCB7IEhlYWRlckNvbmZpZyB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQ29uc3QuanMnO1xuaW1wb3J0IHsgTG9naW5Db25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW5Db25zdC5qcyc7XG5pbXBvcnQgeyBTaWduVXBDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMvU2lnblVwL1NpZ25VcENvbnN0LmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vKiogXG4gKiBAY29uc3RhbnRcbiAgICBAdHlwZSB7c3RyaW5nfVxuKi9cbmNvbnN0IEhPU1QgPSAnaHR0cHM6Ly9tdXNpY29uLnNwYWNlJztcblxuLyoqIFxuICogQGNvbnN0YW50XG4gICAgQHR5cGUge3N0cmluZ31cbiovXG5jb25zdCBQT1JUID0gJzo4MDgwJztcblxuLyoqIFxuKiBAY29uc3RhbnRcbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCByb3V0ZUNvbmZpZyA9IHtcblx0Jy9mZWVkJzoge1xuXHRcdG5hbWU6ICfQk9C70LDQstC90L7QtScsXG5cdFx0cmVuZGVyOiByZW5kZXJGZWVkLFxuXHR9LFxuXHQnL3BvZGNhc3RzJzoge1xuXHRcdG5hbWU6ICfQn9C+0LTQutCw0YHRgtGLJyxcblx0XHRyZW5kZXI6IHJlbmRlclBvZGNhc3RzLFxuXHR9LFxuXHQnL2NvbGxlY3Rpb24nOiB7XG5cdFx0bmFtZTogJ9Ca0L7Qu9C70LXQutGG0LjRjycsXG5cdFx0cmVuZGVyOiByZW5kZXJDb2xsZWN0aW9uLFxuXHR9LFxuXHQnL2xvZ2luJzoge1xuXHRcdG5hbWU6ICfQm9C+0LPQuNC9Jyxcblx0XHRyZW5kZXI6IHJlbmRlckxvZ2luLFxuXHR9LFxuXHQnL3NpZ251cCc6IHtcblx0XHRuYW1lOiAn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjycsXG5cdFx0cmVuZGVyOiByZW5kZXJTaWduVXAsXG5cdH0sXG5cdCcvc2lnbm91dCc6IHtcblx0XHRuYW1lOiAn0JLRi9C50YLQuCcsXG5cdFx0cmVuZGVyOiByZW5kZXJTaWdub3V0LFxuXHR9LFxufTtcblxuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG5jb25zdCBtZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgcGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5yb290RWxlbWVudC5hcHBlbmRDaGlsZChtZW51RWxlbWVudCk7XG5yb290RWxlbWVudC5hcHBlbmRDaGlsZChwYWdlRWxlbWVudCk7XG5cbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIobWVudUVsZW1lbnQsIEhlYWRlckNvbmZpZyk7XG5sZXQgZmVlZCA9IG5ldyBGZWVkKHBhZ2VFbGVtZW50LCBGZWVkQ29uZmlnLmZlZWQsIEZlZWRDb25maWcuY29udGVudCk7XG5jb25zdCBsb2dpbiA9IG5ldyBMb2dpbihwYWdlRWxlbWVudCwgTG9naW5Db25maWcpO1xuY29uc3Qgc2lnbnVwID0gbmV3IFNpZ251cChwYWdlRWxlbWVudCwgU2lnblVwQ29uZmlnKTtcbmxldCBpc0F1dGggPSBmYWxzZTtcblxucmVuZGVyRmVlZCgpO1xuXG5cbi8qKlxuKiBSZW5kZXJzIGhvbWUgcGFnZS5cbiovXG5mdW5jdGlvbiByZW5kZXJGZWVkKCkge1xuXHR3aW5kb3cuQWpheC5nZXQoe1xuXHRcdHVybDogSE9TVCArIFBPUlQgKyAnL2FwaS92MS9hdXRoP2lkPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSxcblx0fSlcblx0XHQudGhlbigoeyBzdGF0dXMgfSkgPT4ge1xuXHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdGlzQXV0aCA9IHRydWU7XG5cdFx0XHR9XHRcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0pO1xuXHR3aW5kb3cuQWpheC5nZXQoe1xuXHRcdHVybDogSE9TVCArIFBPUlQgKyAnL2FwaS92MS9tdXNpYydcblx0fSlcblx0XHQudGhlbigoeyBzdGF0dXMsIHBhcnNlZEpzb24gfSkgPT4ge1xuXHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHBhcnNlZEpzb24pO1xuXHRcdFx0XHRmZWVkLnNldENvbmZpZ0NvbnRlbnQocGFyc2VkSnNvbik7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9KTtcblx0aGVhZGVyLnJlbmRlcihpc0F1dGgpO1xuXHRmZWVkLnJlbmRlcigpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgU2lnbnVwIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNpZ25VcCgpIHtcblx0c2lnbnVwLnJlbmRlcigpO1xuXHRjb25zdCBzaWdudXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG5cdHNpZ251cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbWFpbCA9IHNpZ251cEZvcm0uZWxlbWVudHMuZW1haWwudmFsdWU7XG5cdFx0Y29uc3QgcGFzc3dvcmQgPSBzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlO1xuXHRcdGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSBzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkQ2hlY2sudmFsdWU7XG5cdFx0Y29uc3QgYmlydGhEYXRlID0gc2lnbnVwRm9ybS5lbGVtZW50cy5kYXRlLnZhbHVlO1xuXHRcdGNvbnN0IHVzZXJuYW1lID0gc2lnbnVwRm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZTtcblxuXHRcdGlmIChwYXNzd29yZCA9PSBwYXNzd29yZENoZWNrKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3NjaGVja1wiXScpLnN0eWxlID0gJ3Zpc2liaWxpdHk6IGhpZGRlbic7XG5cdFx0XHRzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0ZGRkZGRic7XG5cdFx0XHRzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkQ2hlY2suc3R5bGUgPSAnYm9yZGVyLWNvbG9yOiAjRkZGRkZGJztcblxuXHRcdFx0d2luZG93LkFqYXgucG9zdCh7XG5cdFx0XHRcdHVybDogSE9TVCArIFBPUlQgKyAnL2FwaS92MS9zaWduX3VwJyxcblx0XHRcdFx0Ym9keTogeyBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBiaXJ0aERhdGUgfSxcblx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRpc0F1dGggPSB0cnVlO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcGFyc2VkSnNvbi5JZCk7XG5cdFx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWN0aW9uPVwiL2ZlZWRcIl0nKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWN0aW9uPVwiL2ZlZWRcIl0nKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFsZXJ0KCfQntGI0LjQsdC60LAg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LghJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc2NoZWNrXCJdJykuc3R5bGUgPSAndmlzaWJpbGl0eTogdmlzaWJsZSc7XG5cdFx0XHRzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnN0eWxlID0gJ2JvcmRlci1jb2xvcjogI0VGNTg1OCc7XG5cdFx0XHRzaWdudXBGb3JtLmVsZW1lbnRzLnBhc3N3b3JkQ2hlY2suc3R5bGUgPSAnYm9yZGVyLWNvbG9yOiAjRUY1ODU4Jztcblx0XHR9XG5cdH0pO1xufVxuXG5cbi8qKlxuICogUmVuZGVycyBMb2dpbiBwYWdlLlxuICovXG5mdW5jdGlvbiByZW5kZXJMb2dpbigpIHtcblx0bG9naW4ucmVuZGVyKCk7XG5cblx0Y29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG5cdGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGVtYWlsID0gbG9naW5Gb3JtLmVsZW1lbnRzLmVtYWlsLnZhbHVlO1xuXHRcdGNvbnN0IHBhc3N3b3JkID0gbG9naW5Gb3JtLmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlO1xuXG5cdFx0d2luZG93LkFqYXgucG9zdCh7XG5cdFx0XHR1cmw6IEhPU1QgKyBQT1JUICsgJy9hcGkvdjEvbG9naW4nLFxuXHRcdFx0Ym9keTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHsgc3RhdHVzLCBwYXJzZWRKc29uIH0pID0+IHtcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcGFyc2VkSnNvbi5JZCk7XG5cdFx0XHRcdFx0aXNBdXRoID0gdHJ1ZTtcblx0XHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWN0aW9uPVwiL2ZlZWRcIl0nKSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFsZXJ0KCfQndC10LLQtdGA0L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQu9C4INC/0LDRgNC+0LvRjCEnKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgUG9kY2FzdHMgcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyUG9kY2FzdHMoKSB7XG5cbn1cblxuLyoqXG4gKiBSZW5kZXJzIENvbGxlY3Rpb24gcGFnZS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29sbGVjdGlvbigpIHtcblxufVxuXG4vKipcbiAqIFJlbmRlcnMgU2lnbm91dCBwYWdlLlxuICovXG5mdW5jdGlvbiByZW5kZXJTaWdub3V0KCkge1xuXHR3aW5kb3cuQWpheC5wb3N0KHtcblx0XHR1cmw6IEhPU1QgKyBQT1JUICsgJy9hcGkvdjEvbG9nb3V0Jyxcblx0XHRib2R5OiB7aWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpfVxuXHR9KVxuXHRcdC50aGVuKCh7IHN0YXR1cywgcGFyc2VkSnNvbiB9KSA9PiB7XG5cdFx0XHRpZiAoc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0aXNBdXRoID0gZmFsc2U7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIG51bGwpO1xuXHRcdFx0XHRnb1RvUGFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWN0aW9uPVwiL2ZlZWRcIl0nKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKHBhcnNlZEpzb24uZXJyKTtcblx0XHRcdGFsZXJ0KCfQndC10LLQtdGA0L3QvtC1INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQu9C4INC/0LDRgNC+0LvRjCEnKTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0pO1xufVxuXG4vKipcbiAqIEdvZXMgdG8gYW5vdGhlciBwYWdlXG4gKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBMaW5rIFxuICovXG5mdW5jdGlvbiBnb1RvUGFnZShMaW5rKSB7XG5cdG1lbnVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRwYWdlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuXHRmb3IgKGxldCBocmVmIGluIHJvdXRlQ29uZmlnKSB7XG5cdFx0aWYgKExpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKSA9PT0gaHJlZikge1xuXHRcdFx0cm91dGVDb25maWdbaHJlZl0ucmVuZGVyKGlzQXV0aCk7XG5cdFx0fVxuXHR9XG59XG5cbnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Y29uc3QgeyB0YXJnZXQgfSA9IGU7XG5cblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8ICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKSA9PT0gJy9sb2dpbicpKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGdvVG9QYWdlKGUudGFyZ2V0KTtcblx0fVxufSk7XG4iLCIvLyDQlNC10LzQvtC90YHRgtGA0LDRhtC40Y8g0LzQvtC00YPQu9C10Lkg0L3QsCBJSUZFLiDQrdGC0L4g0YPRgdGC0LDRgNC10LLRiNCw0Y8g0LrQvtC90YbQtdC/0YbQuNGPLCDQvdC+INC/0YDQtdC60YDQsNGB0L3QviDRgNCw0LHQvtGC0LDQtdGCINC00L4g0YHQuNGFINC/0L7RgFxuKGZ1bmN0aW9uICgpIHtcblx0XG5cdC8qKlxuXHQqICBAY29uc3RhbnRcblx0KiAgQHR5cGUge09iamVjdH1cblx0Ki9cblx0Y29uc3QgQUpBWF9NRVRIT0RTID0ge1xuXHRcdEdFVDogJ0dFVCcsXG5cdFx0UE9TVDogJ1BPU1QnLFxuXHR9O1xuXG5cdC8qKiBDbGFzcyByZXByZXNlbnRpbmcgQWpheCBtb2R1bGUuICovXG5cdGNsYXNzIEFqYXgge1xuXG5cdFx0LyoqXG5cdFx0ICogTWFrZXMgZ2V0IHJlcXVlc3QuXG5cdFx0ICogQGFzeW5jXG5cdFx0ICogQGZ1bmN0aW9uIGdldFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcblx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHN0YXR1cyBhbmQgcGFyc2VkSnNvblxuXHRcdCAqL1xuXHRcdGFzeW5jIGdldChwYXJhbXMgPSB7fSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXJhbXMudXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogQUpBWF9NRVRIT0RTLkdFVCxcblx0XHRcdFx0bW9kZTogJ2NvcnMnLFxuXHRcdFx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBwYXJzZWRCb2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdFx0cGFyc2VkSnNvbjogcGFyc2VkQm9keSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogTWFrZXMgcG9zdCByZXF1ZXN0LlxuXHRcdCAqIEBhc3luY1xuXHRcdCAqIEBmdW5jdGlvbiBwb3N0XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gc3RhdHVzIGFuZCBwYXJzZWRKc29uXG5cdFx0ICovXG5cdFx0YXN5bmMgcG9zdChwYXJhbXMgPSB7fSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXJhbXMudXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogQUpBWF9NRVRIT0RTLlBPU1QsXG5cdFx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdFx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5ib2R5KSxcblx0XHRcdH0pO1xuIFxuXHRcdFx0Y29uc3QgcGFyc2VkQm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdHBhcnNlZEpzb246IHBhcnNlZEJvZHksXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHdpbmRvdy5BamF4ID0gbmV3IEFqYXgoKTtcbn0pKCk7XG4iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImZlZWRhXFxcIiBocmVmPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJocmVmXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBkYXRhLXNlY3Rpb249XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImtleVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2xpPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjbGFzc05hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgPlxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJjb250ZW50UGhvdG9cXFwiIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiUHJldmlld1wiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInNvbmdOYW1lXFxcIj5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJOYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9wPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiID48cCBjbGFzcz1cXFwiYXJ0aXN0TmFtZVxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJBcnRpc3RcIikgOiBkZXB0aDApKSAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoc3RhY2sxLFwiTmFtZVwiKSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvcD48L2E+XFxuICAgICAgICA8L2xpPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJmZWVkVGV4dFxcXCI+0JPQu9Cw0LLQvdC+0LU8L2Rpdj5cXG48dWwgY2xhc3M9XFxcImZlZWRcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3VsPlxcblxcbjxoMT7QndC+0LLRi9C1INGC0YDQtdC60LgsINCw0LvRjNCx0L7QvNGLINC4INGB0LHQvtGA0L3QuNC60Lg8L2gxPlxcblxcbjx1bCBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29udGVudFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTYsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyNCxcImNvbHVtblwiOjEzfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdWw+XFxuICAgIFwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY2xhc3NOYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImhlYWRlcmFcXFwiIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImhyZWZcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGRhdGEtc2VjdGlvbj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaHJlZlwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3Byb2ZpbGVcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0F2YXRhclxcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvd29ybS5qcGdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJzaWdub3V0XFxcIiBocmVmPVxcXCIvc2lnbm91dFxcXCIgZGF0YS1zZWN0aW9uPVxcXCIvc2lnbm91dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICDQktGL0LnRgtC4XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImxvZ2luXFxcIiBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCIgPjxidXR0b24gY2xhc3M9XFxcImxvZ2luQnV0dG9uXFxcIiBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCI+0JLQvtC50YLQuDwvYnV0dG9uPjwvYT5cXG4gICAgICAgIDwvbGk+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImFzZFxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcIm1lbnVfX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICA8L2xpPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTMsXCJjb2x1bW5cIjoxN319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgIDxsaSBjbGFzcz1cXFwibWVudV9faXRlbVxcXCI+PGltZyBzcmM9XFxcIi4vc3RhdGljL2ltZy9Mb3VwZS5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJtZW51X19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiaW5wdXRfc2VhcmNoXFxcIj4gXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLXNlY3Rpb249XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyID1cXFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDQv9C10YHQvdC4INC40LvQuCDQsNC70YzQsdC+0LzQsFxcXCI+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9saT5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaXNBdXRoXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjAsXCJjb2x1bW5cIjo4fSxcImVuZFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjE1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3VsPlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJlcXVpcmVkID5cXG4gICAgICAgICAgICA8L2xpPiBcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcImxvZ2luXFxcIj5cXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxhIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIGhyZWY9XFxcIlxcXCI+PGltZyBjbGFzcz1cXFwiaW1nTG9nb1xcXCIgc3JjPVxcXCIuL3N0YXRpYy9pbWcvTG9nby5zdmdcXFwiIGFsdD1cXFwiXFxcIj48L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nb1RleHRcXFwiPk11c2ljT248L2Rpdj4gICAgXFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cXFwicG9zdFxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIml0ZW1zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjIxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJTdWJtaXRMb2dpbkJ1dHRvblxcXCIgIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JLQvtC50YLQuDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICBcXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInlldFxcXCI+XFxuICAgICAgICAgICAg0JXRidGRINC90LXRgiDRg9GH0ZHRgtC90L7QuSDQt9Cw0L/QuNGB0Lg/XFxuICAgICAgICAgICAgPGEgZGF0YS1zZWN0aW9uPVxcXCIvc2lnbnVwXFxcIiBjbGFzcz1cXFwieWV0YVxcXCIgaHJlZj1cXFwiL2xvZ2luXFxcIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgIDwvdWw+XFxuPC9kaXY+XFxuXFxuICAgIFwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgbmFtZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJlcXVpcmVkID5cXG4gICAgICAgICAgICA8L2xpPiBcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcInNpZ251cFxcXCI+XFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9mZWVkXFxcIiBocmVmPVxcXCJcXFwiPjxpbWcgY2xhc3M9XFxcImltZ0xvZ29cXFwiIHNyYz1cXFwiLi9zdGF0aWMvaW1nL0xvZ28uc3ZnXFxcIiBhbHQ9XFxcIlxcXCI+PC9hPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ29UZXh0XFxcIj5NdXNpY09uPC9kaXY+ICAgIFxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XFxcInBvc3RcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpdGVtc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjoyMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFzc2NoZWNrXFxcIiBuYW1lPVxcXCJwYXNzY2hlY2tcXFwiID7Qn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YIhPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImxvZ2luX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiU3VibWl0TG9naW5CdXR0b25cXFwiIGRhdGEtc2VjdGlvbj1cXFwiL2ZlZWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibG9naW5fX2l0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInlldFxcXCI+XFxuICAgICAgICAgICAg0KPQttC1INC10YHRgtGMINGD0YfQtdGC0L3QsNGPINC30LDQv9C40YHRjD9cXG4gICAgICAgICAgICA8YSBkYXRhLXNlY3Rpb249XFxcIi9sb2dpblxcXCIgY2xhc3M9XFxcInlldGFcXFwiIGhyZWY9XFxcIi9sb2dpblxcXCI+0JLQvtC50LTQuNGC0LU8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYWRkb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthZGRvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsidGVtcGxhdGUiLCJGZWVkIiwicGFyZW50IiwiY29uZmlnRmVlZCIsImNvbmZpZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsInNldENvbmZpZ0NvbnRlbnQiLCJjb25maWciLCJpdGVtcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJocmVmIiwibmFtZSIsImNvbnRlbnQiLCJOYW1lIiwiQXJ0aXN0IiwiQWxidW0iLCJQcmV2aWV3IiwiQ29udGVudCIsInJlbmRlciIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJGZWVkQ29uZmlnIiwiZmVlZCIsImFsbCIsIm5ldyIsImNoYXJ0IiwicGxheWxpc3RzIiwiZmlyc3QiLCJhbGJ1bUhyZWYiLCJhcnRpc3RIcmVmIiwiYXJ0aXN0IiwiaWQiLCJpbWFnZSIsIkhlYWRlciIsImlzQXV0aCIsIkhlYWRlckNvbmZpZyIsIm1haW4iLCJwb2RjYXN0cyIsImNvbGxlY3Rpb24iLCJMb2dpbiIsInR5cGUiLCJ0ZXh0IiwiTG9naW5Db25maWciLCJFbWFpbElucHV0IiwiUGFzc3dvcmRJbnB1dCIsIlNpZ251cCIsIlNpZ25VcENvbmZpZyIsIlVzZXJuYW1lSW5wdXQiLCJQYXNzd29yZENoZWNrSW5wdXQiLCJEYXRlSW5wdXQiLCJIT1NUIiwiUE9SVCIsInJvdXRlQ29uZmlnIiwicmVuZGVyRmVlZCIsInJlbmRlclBvZGNhc3RzIiwicmVuZGVyQ29sbGVjdGlvbiIsInJlbmRlckxvZ2luIiwicmVuZGVyU2lnblVwIiwicmVuZGVyU2lnbm91dCIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFnZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImxvZ2luIiwic2lnbnVwIiwid2luZG93IiwiQWpheCIsImdldCIsInVybCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwic3RhdHVzIiwiY2F0Y2giLCJlcnJvciIsInBhcnNlZEpzb24iLCJjb25zb2xlIiwibG9nIiwic2lnbnVwRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImVsZW1lbnRzIiwidmFsdWUiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJiaXJ0aERhdGUiLCJkYXRlIiwidXNlcm5hbWUiLCJzdHlsZSIsInBvc3QiLCJib2R5Iiwic2V0SXRlbSIsIklkIiwiZ29Ub1BhZ2UiLCJhbGVydCIsImxvZ2luRm9ybSIsImVyciIsIkxpbmsiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXQiLCJIVE1MQW5jaG9yRWxlbWVudCIsIkhUTUxCdXR0b25FbGVtZW50IiwiQUpBWF9NRVRIT0RTIiwiR0VUIiwiUE9TVCIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicGFyc2VkQm9keSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==