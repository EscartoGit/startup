jytjytjhgjhg"use strict";

require("babel-polyfill");

var _Movie = require("./Movie.js");

var _Movie2 = _interopRequireDefault(_Movie);

var _Actor = require("./Actor.js");

var _Actor2 = _interopRequireDefault(_Actor);

var _EventEmitter = require("./EventEmitter.js");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Collection = require("./Collection.js");

var _Collection2 = _interopRequireDefault(_Collection);

var _Logger = require("./Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

var collection = new _Collection2.default();

function createActorButton(movie) {
  //function used to create button to add actor at movie. First the element button is created.
  var addactorbutton = document.createElement("input");
  //Some propoerties are added to button like image, width and height.
  addactorbutton.type = "image";
  addactorbutton.src = "css/plusactor.jpg";
  addactorbutton.style.width = "38px";
  addactorbutton.style.height = "38px";
  //When the button is clicked
  addactorbutton.onclick = function () {
    var result_confirm = true; //result value will be false when the user finish the load of actors
    var actors = [];
    while (result_confirm || actorage === "" && actorage !== false) {
      var actorname = prompt("Actress/Actor Name: "); //The user insert using prompt command the actor's name.
      while (actorname === "" && actorname !== false) {
        //only when the user didnt push cancel button
        actorname = prompt("You should insert a name");
      }
      if (!actorname) {
        //if the user didnt put an actor name actorage is false to avoid the prompt age and quit.
        var actorage = false;
      } else {
        var actorage = "true";
      }
      if (actorage == "true") {
        actorage = prompt("Her/His Age is: "); //Prompt for actorage
        while (actorage !== false && actorage == "") {
          //if user dont push cancel and actorage is empty...
          actorage = prompt("You should insert her/his age");
        }
      }
      if (actorname == null || actorage == null) {
        //when result_confirm is false the user stop to charge actors
        result_confirm = false;
      } else {
        var actor = new Actor(actorname, actorage); //the object actor is created
        actors.push(actor); //this variable will containe the actors created by the user
        result_confirm = confirm("You wish add another actor?");
      }
    }
    if (actors !== null) {
      movie.addCast(actors); //When the load of actors is finished the cast is added to the movie.
    }
  };
  addactorbutton.setAttribute("class", "buttons_option"); //Setting style for button
  return addactorbutton; //Return the button created
}
function createPauseButton(movie) {
  //function used to create the button to pause the movie. First the element is created
  var pausebutton = document.createElement("input");
  //setting some propoerties
  pausebutton.type = "image";
  pausebutton.src = "css/pause.jpg";
  pausebutton.style.width = "38px";
  pausebutton.style.height = "38px";
  movie.on("Play button", movie.pause()); // When the button be clicked the movie will pause
  return pausebutton; //The button is returned
}
function createPlayButton(movie) {
  //function used to create the button to play the movie. First the element is created.
  var playbutton = document.createElement("input");
  //Setting some properties
  playbutton.type = "image";
  playbutton.src = "css/play.jpg";
  playbutton.style.width = "38px";
  playbutton.style.height = "38px";
  playbutton.alt = "Play button"; //This alt name will be used when the LoggerClass "observe" this events
  var logger = new _Logger2.default("play", playbutton.alt);
  movie.on("Play button", movie.play());
  playbutton.onclick = function () {
    movie.emit("Play button");
    logger.log("has been pushed!");
  };
  playbutton.setAttribute("class", "buttons_option"); //Setting class
  return playbutton; //The button is returned
}
function createSeeButton(movie) {
  var seeactorsbutton = document.createElement("input");
  seeactorsbutton.type = "image";
  seeactorsbutton.src = "css/see.png";
  seeactorsbutton.style.width = "38px";
  seeactorsbutton.style.height = "38px";
  seeactorsbutton.setAttribute("id", movie.getTitle());
  seeactorsbutton.setAttribute("class", "buttons_option");
  seeactorsbutton.onclick = function () {
    // When the user clicks on <div>, open the popup
    var movie_selected = collection.getMovie(seeactorsbutton.id); //get the movie_selected using the id of the button
    var arrayactors = movie_selected.getCast(); //get the cast of the movie
    var actors_names = "";
    arrayactors.forEach(function (actor) {
      actors_names = actors_names + " " + actor.getName() + "\n";
    }); //function to show the cast
    alert(actors_names);
  };
  return seeactorsbutton;
}
function Mixin() {
  var social = {
    share: function share(friendname) {
      alert(friendname + " shares " + this.name);
    },
    like: function like(friendname) {
      alert(friendname + "likes" + this.name);
    }
  };
  var movie_mixin = new _Movie2.default("Lord of the Rings", "2016", "3:45");
  object.assign(_Movie2.default.prototype, social);
  movie_mixin.like("Ricardo Bochini");
}

function validate(anio) {
  if (anio < 1985 || anio > new Date().getFullYear()) {
    return false;
  }
  return true;
}
function addMovie() {
  //Take the value of variables from form
  var duracion = newMovie.elements["hora"].value + " : " + newMovie.elements["min"].value;
  var anio = newMovie.elements["year"].value;
  var tit = newMovie.elements["title"].value;
  var validateYear = validate(anio);
  if (validateYear) {
    //Create the movie object
    var movie = new _Movie2.default(tit, anio, duracion);
    collection.addMovieToCollection(movie);
    //Create the trow. This row will append to the table of body section
    var trow = document.createElement("TR");
    //Create the tdata. These td will contain the title, the year and the duration
    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    //Get the title from the object to test the response and then the nodeText is created to be append at row later. Same with year and duration
    tit = movie.getTitle();
    tit = document.createTextNode(tit);
    anio = movie.getYear();
    anio = document.createTextNode(anio);
    duracion = movie.getDuration();
    duracion = document.createTextNode(duracion);
    //Append these data on each TD
    td1.appendChild(tit);
    td2.appendChild(anio);
    td3.appendChild(duracion);
    //Setting style to each TD
    td2.setAttribute("class", "td_tabla");
    td1.setAttribute("class", "td_tabla");
    td3.setAttribute("class", "td_tabla");
    //Adding TD at TROW
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    //Setting style to TROW
    trow.setAttribute("class", "movie_row");
    trow.setAttribute("id", tit);
    //tdbutton is the fourth td on the row. Here gonna be the options to pause, play and add actors to the movie.
    var tdbutton = document.createElement("TD");
    tdbutton.setAttribute("class", "td_options");
    tdbutton.appendChild(createActorButton(movie)); //call to function to create the button used to add actors
    tdbutton.appendChild(createSeeButton(movie)); //call to function to create the button used to see the actors
    tdbutton.appendChild(createPlayButton(movie)); //call to function to create the button used to play te movie
    tdbutton.appendChild(createPauseButton(movie)); //call to function to create the button used to pause the movie
    trow.appendChild(tdbutton);
    var tableRef = document.getElementById("movie_table").getElementsByTagName("tbody")[0];
    tableRef.appendChild(trow);
    document.getElementById("movie_form").reset(); //Reset the form
  } else {
    alert("El anio debe estar entre 1985 y " + new Date().getFullYear());
  }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function () {
  function Actor(nombre, edad) {
    _classCallCheck(this, Actor);

    this.name = nombre;
    this.age = edad;
  }

  _createClass(Actor, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "changeName",
    value: function changeName(newname) {
      this.name = newname;
    }
  }, {
    key: "changeAge",
    value: function changeAge(newage) {
      this.age = newage;
    }
  }]);

  return Actor;
}();

exports.default = Actor;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Movie = require('./Movie.js');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collection = function () {
  function Collection() {
    _classCallCheck(this, Collection);

    this.movies_collection = [];
  }

  _createClass(Collection, [{
    key: 'addMovie',
    value: function addMovie(movie) {
      this.movies_collection.push(movie);
    }
  }, {
    key: 'deleteMovie',
    value: function deleteMovie(movie) {
      for (var i = 0; i < this.movies_collection.length; i++) {
        if (this.movies_collection[i] === movie) this.movies_collection.splice(1, 1);
      }
    }
  }, {
    key: 'getMovie',
    value: function getMovie(title) {
      for (var i = 0; i < this.movies_collection.length; i++) {
        if (this.movies_collection[i].getTitle() === title) {
          return movies_collection.slice(i--, i);
        }
      }
    }
  }]);

  return Collection;
}();

exports.default = Collection;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger(id, subject) {
    _classCallCheck(this, Logger);

    //Subject param in this case will correspond to "playbutton"'s id
    this.id = id;
    this.subject = subject;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(this.subject + info);
    }
  }]);

  return Logger;
}();

exports.default = Logger;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.listeners = new Map();
    }

    _createClass(EventEmitter, [{
        key: 'addListener',
        value: function addListener(label, callback) {
            this.listeners.has(label) || this.listeners.set(label, []);
            this.listeners.get(label).push(callback);
        }
    }, {
        key: 'removeListener',
        value: function removeListener(label, callback) {
            var listeners = this.listeners.get(label),
                index = void 0;

            if (listeners && listeners.length) {
                index = listeners.reduce(function (i, listener, index) {
                    return isFunction(listener) && listener === callback ? i = index : i;
                }, -1);

                if (index > -1) {
                    listeners.splice(index, 1);
                    this.listeners.set(label, listeners);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'emit',
        value: function emit(label) {
            var listeners = this.listeners.get(label);

            if (listeners && listeners.length) {
                listeners.forEach(function (listener) {
                    listener();
                });
                return true;
            }
            return false;
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;


var isFunction = function isFunction(obj) {
    return typeof obj == 'function' || false;
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require("./EventEmitter.js");

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel-register");

var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duracion) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duracion;
    _this.actors = [];
    return _this;
  }

  _createClass(Movie, [{
    key: "addCast",
    value: function addCast(actorslist) {
      for (var i = 0; i < actorslist.length; i++) {
        this.actors.push(actorslist[i]);
      }
    }
  }, {
    key: "seeActors",
    value: function seeActors() {
      for (var i = 0; i < this.actors.length; i++) {
        console.log(this.actors[i]);
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "getYear",
    value: function getYear() {
      return this.year;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "play",
    value: function play() {
      console.log("Play Movie");
    }
  }, {
    key: "pause",
    value: function pause() {
      console.log("Pause Movie");
    }
  }, {
    key: "resume",
    value: function resume() {
      console.log("Resume Movie");
    }
  }]);

  return Movie;
}(_EventEmitter3.default);

exports.default = Movie;
