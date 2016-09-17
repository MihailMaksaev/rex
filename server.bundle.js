/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var NODE_ENV = process.env.NODE_ENV || 'development';

	if (NODE_ENV == 'development') __webpack_require__(1)({ presets: ['es2015'] });

	var testES;

	testES = __webpack_require__(2).lol;

	console.log(testES);

	var express = __webpack_require__(3);
	var path = __webpack_require__(4);

	/*
	var webpack = require('webpack');
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var config = require('./webpack.config');
	*/

	var routes = __webpack_require__(5);
	//var bodyParser = require('body-parser');
	//var cookieParser = require('cookie-parser');
	var session = __webpack_require__(22);

	var app = express();
	var PORT = 3000;

	app.engine('ejs', __webpack_require__(23));
	app.set("views", __dirname + "/views");
	app.set("view engine", "ejs");

	if (NODE_ENV == 'development') {
	  var webpackDevMiddleware = __webpack_require__(24);
	  __webpack_require__(25).dev(app, webpackDevMiddleware);
	}

	//var compiler = webpack(config);
	//app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));

	//app.use(cookieParser());
	//app.use(bodyParser.json()); // for parsing application/json
	//app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

	app.use(session({
	  secret: "secret",
	  key: "sid",
	  resave: false,
	  saveUninitialized: false,
	  cookie: { path: '/', httpOnly: false, maxAge: 1000 * 60 * 60 /* null*/ }

	}));
	//app.use(function(req, res, next){res.header('Access-Control-Allow-Credentials', 'true'); next();})
	app.use(express.static(path.join(__dirname, "dist")));
	// добавляем роуты
	routes(app);

	app.use(function (err, req, res, next) {

	  if (err) console.log(err);
	});

	app.listen(PORT, function (error) {

	  if (error) console.log(error);

	  console.info("listen port %s in your browser", PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-register");

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var lol = "lol";
	exports.lol = lol;
	/*
	export default function(){
		
		console.log("babel WORK!");
	}
	*/

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var parseFileForm = __webpack_require__(6);
	var NODE_ENV = process.env.NODE_ENV || 'development';
	console.log(NODE_ENV);
	var path = __webpack_require__(4);

	module.exports = function (app) {

		if (NODE_ENV != "production") {
			app.get("/*", function (req, res) {

				var sess = req.session;
				if (sess.views) {
					sess.views++;
				} else {
					sess.views = 1;
				}
				///console.log(sess);
				//console.log(req.cookies);	

				res.render('index', { title: "hello world", NODE_ENV: NODE_ENV });

				// console.log(req.body );       
			});
		} else {

			app.get("/*", function (req, res) {

				var sess = req.session;
				if (sess.views) {
					sess.views++;
				} else {
					sess.views = 1;
				}
				///console.log(sess);
				//console.log(req.cookies);	

				res.sendFile(path.resolve(__dirname, '../dist/index.html'));

				// console.log(req.body );       
			});
		}
		/*
	    app.get("/test",  function(req, res){
	 	
	 	var sess = req.session;
	 	if(sess.views){
	 		sess.views++;
	 	}else{
	 		sess.views =1;
	 	}
	  ///console.log(sess);
	  //console.log(req.cookies);	
	   res.sendFile(path.resolve(__dirname, '../dist/index.html'));
	 	
	  
	 // console.log(req.body );       
	 });
	   */
		app.post("/create", parseFileForm, function (req, res, next) {

			//res.header('Access-Control-Allow-Credentials', 'true');	

			var sess = req.session;

			if (sess.views) {
				sess.views++;
			}

			//console.log(sess);
			//console.log(req.cookies);

			// res.status(200).jsonp({ mess: 'message' });	 
		});
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "routes"))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var inspect = __webpack_require__(7).inspect;
	var Busboy = __webpack_require__(8);
	var path = __webpack_require__(4),
	    fs = __webpack_require__(9);

	var POST_ACTIONS = __webpack_require__(10).POST_ACTIONS;
	// = ['addSoundFile', "addItem", "addCategory", "login", "registration"]	
	var PATH_TO_SAVE_AUDIO_FILE = '../dist/uploads';

	var formFildsReducer = __webpack_require__(11);

	var UserModel = __webpack_require__(12).User;
	var user = new UserModel({ name: 'admin' });
	console.dir(user.updated);
	/*
	user.save(function (err, user) {
	  if (err) return console.log(err);
	  
	  console.log("user save");
	  //fluffy.speak();
	});
	*/
	/*
	UserModel.find(function (err, users) {
	  if (err) return console.log(err);
	  console.log(users);
	})
	*/

	UserModel.find({ name: "admin" }, function (err, users) {
	  if (err) return console.log(err);
	  console.log(29);
	  console.log(users[0]);
	  users[0].updated = Date.now();
	  user.save();
	});

	/*
	var contact = new Contact({
	  phone: request.phone,
	  status: request.status
	});

	// Convert the Model instance to a simple object using Model's 'toObject' function
	// to prevent weirdness like infinite looping...
	var upsertData = contact.toObject();

	// Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
	delete upsertData._id;
	*/
	// Do the upsert, which works like this: If no Contact document exists with 
	// _id = contact.id, then create a new doc using upsertData.
	// Otherwise, update the existing doc with upsertData

	/*UserModel.update({name: "admin" }, {updated: Date.now()}, {upsert: true},

	     function(err, user){
		 if(err)console.log(err);	 
		 console.log(user);
	 });
	*/

	module.exports = function (req, res, next) {

	  var busboy = new Busboy({ headers: req.headers });

	  busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
	    console.log('Field [' + fieldname + ']: value: ' + inspect(val));

	    if (val == POST_ACTIONS[0]) {
	      // ����� ��������� ���� �� ���� � ��������� �����
	      busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
	        console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
	        if (mimetype != 'audio/mp3') {
	          file.resume();
	        } else {

	          var saveTo = path.join(path.resolve(__dirname, PATH_TO_SAVE_AUDIO_FILE), filename);
	          file.pipe(fs.createWriteStream(saveTo));
	        }

	        /*file.on('data', function(data) {
	             console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
	           });*/ //path.basename(fieldname)

	        file.on('end', function () {
	          console.log('File [' + fieldname + '] Finished');
	        });
	      });
	    }
	  });

	  busboy.on('finish', function () {
	    console.log('Done parsing form!');
	    res.writeHead(303, { Connection: 'close' /*, Location: '/' */ });
	    res.end();
	  });
	  req.pipe(busboy);

	  next();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "middleware"))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("busboy");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var POST_ACTIONS = ['addSoundFile', "addItem", "addCategory", "login", "registration"];

	var FORM_FILDS = ["title", "desc", "sound", "category", "username", "password"];

	//	export  {POST_ACTIONS, FORM_FILDS};

	module.exports.POST_ACTIONS = POST_ACTIONS;

	module.exports.FORM_FILDS = FORM_FILDS;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _initialState;

	exports.default = FormFildsReducer;

	var _constant = __webpack_require__(10);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//var POST_ACTIONS = ['addSoundFile', "addItem", "addCategory", "login", "registration"];

	var initialState = (_initialState = {}, _defineProperty(_initialState, "" + _constant.POST_ACTIONS[2], [{ name: "title", type: "text" }]), _defineProperty(_initialState, "" + _constant.POST_ACTIONS[1], [{ name: "title", type: "text" }, { name: "desc", type: "text" }, { name: "category", type: "select" }]), _defineProperty(_initialState, "" + _constant.POST_ACTIONS[0], [{ name: "title", type: "text" }, { name: "sound", type: "file" }]), _defineProperty(_initialState, "" + _constant.POST_ACTIONS[3], [{ name: "username", type: "text" }, { name: "password", type: "password" }]), _defineProperty(_initialState, "" + _constant.POST_ACTIONS[4], [{ name: "username", type: "text" }, { name: "password", type: "password" }]), _initialState);

	function FormFildsReducer() {
		var store = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];


		return store;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mongoose = __webpack_require__(13);
	mongoose.connect('mongodb://localhost/test');

	var configureStore = __webpack_require__(14).default;
	var formFildsReducer = __webpack_require__(11);

	var store = configureStore({});
	console.dir(store);

	var db = mongoose.connection;

	db.on('error', function () {
	   console.log('connection error:');
	});
	db.once('open', function () {
	   console.log('connection open');
	});

	var Schema = mongoose.Schema({
	   name: {
	      type: String,
	      lowercase: true, // Always convert `test` to lowercase
	      required: true,
	      unique: true
	   },
	   password: {
	      type: String
	   },
	   updated: {
	      type: Number,
	      default: Date.now()
	   }
	});

	module.exports.User = mongoose.model('User', Schema);

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (initialState) {
		//let logger = createLogger();

		return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)( /*logger,*/_reduxThunk2.default));
	};

	var _redux = __webpack_require__(15);

	var _reducers = __webpack_require__(16);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxThunk = __webpack_require__(21);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(15);

	var _ItemReducer = __webpack_require__(17);

	var _ItemReducer2 = _interopRequireDefault(_ItemReducer);

	var _CategoryReducer = __webpack_require__(19);

	var _CategoryReducer2 = _interopRequireDefault(_CategoryReducer);

	var _FormFildsReducer = __webpack_require__(11);

	var _FormFildsReducer2 = _interopRequireDefault(_FormFildsReducer);

	var _MainStateReducer = __webpack_require__(20);

	var _MainStateReducer2 = _interopRequireDefault(_MainStateReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({

		ItemReducer: _ItemReducer2.default,
		CategoryReducer: _CategoryReducer2.default,
		FormFildsReducer: _FormFildsReducer2.default,
		MainStateReducer: _MainStateReducer2.default
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = ItemReducer;

	var _LoadActions = __webpack_require__(18);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var ADD_ITEM = "ADD_ITEM";

	var initialState = (0, _LoadActions.LoadItems)();

	function ItemReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];


		switch (action.type) {

			case ADD_ITEM:
				return [].concat(_toConsumableArray(state), [action.payload]);
			default:
				return state;

		}
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoadCategories = LoadCategories;
	exports.LoadItems = LoadItems;
	var categories = [{
		title: "первая",
		catId: 1
	}, {
		title: "вторая",
		catId: 2
	}];

	function LoadCategories() {

		return categories;
	}

	var items = [{
		title: "первая запись",
		desc: "Описание первой записи",
		date: "сегодня",
		categoryId: 1
	}, {
		title: "Вторая запись",
		desc: "Описание второй записи",
		date: "сегодня",
		categoryId: 2
	}];

	function LoadItems() {

		//console.log("load items12");

		return items;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = CategoryReducer;

	var _LoadActions = __webpack_require__(18);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var ADD_CATEGORY = "ADD_CATEGORY";

	var initialState = (0, _LoadActions.LoadCategories)();

	function CategoryReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];


		switch (action.payload) {
			case ADD_CATEGORY:
				return [].concat(_toConsumableArray(action.payload), [state]);
			default:
				return state;
		}
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];


		switch (action.type) {
			case WAIT_RESP:
				return Object.assign({}, state, { wait_resp: action.payload });

			default:
				return state;
		}
	};

	//import {SendItemOnServer} from "../actions/SendToServerActions"

	var WAIT_RESP = "WAIT_RESP";

	var initialState = {
		wait_resp: false // send	
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("ejs-locals");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";

	var path = __webpack_require__(4);
	var webpack = __webpack_require__(26);

	var config = {
	  // ��� ������ � ��������
	  devtool: 'cheap-module-eval-source-map',
	  entry: ['whatwg-fetch', 'babel-polyfill', './src_front/index_entry_front'],
	  output: {
	    path: path.join(__dirname, 'dist'),
	    filename: 'bundle.js',
	    publicPath: '/static/'
	  },
	  plugins: [new webpack.optimize.OccurenceOrderPlugin(),
	  // ���� ������ �� �� ������� ������
	  new webpack.NoErrorsPlugin()],
	  // ������ - ��� ������ ������ � � ���� �����������
	  resolve: {
	    modulesDirectories: ['node_modules'],
	    extensions: ['', '.js', '.jsx']
	  },
	  // ��� ������ �������
	  resolveLoader: {
	    modulesDirectories: ['node_modules'],
	    moduleTemplates: ['*-loader', '*'],
	    extensions: ['', '.js']
	  },

	  module: {

	    preLoaders: [{
	      test: /\.js$/,
	      loaders: ['eslint'],
	      include: [path.resolve(__dirname, "src_front")]
	    }],

	    loaders: [{
	      loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
	      //���� �������� �����(�� ��� ����� � ����� src)
	      include: [path.resolve(__dirname, "src_front")],
	      test: /\.js$/,
	      plugins: ['transform-runtime']
	    }]
	  }
	};

	module.exports = config;

	module.exports.dev = function (app, webpackDevMiddleware) {

	  var compiler = webpack(config);
	  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ }
/******/ ]);