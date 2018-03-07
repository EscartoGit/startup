import "babel-polyfill";
require("babel-polyfill");

import Movie from './Movie.js';
import ActorClass from './Actor.js';
import EventEmitterClass from './EventEmitter.js';
import Collection from './Collection.js'
import Logger from './Logger.js'



var collection = new Collection();

function createActorButton(movie){
  //function used to create button to add actor at movie. First the element button is created.
  const addactorbutton=document.createElement("input");
  //Some propoerties are added to button like image, width and height.
  addactorbutton.type="image";
  addactorbutton.src="css/plusactor.jpg";
  addactorbutton.style.width="38px";
  addactorbutton.style.height="38px";
  //When the button is clicked
  addactorbutton.onclick= function(){let result_confirm = true;  //result value will be false when the user finish the load of actors
                                     let actors = [];
                                     while (result_confirm || (actorage === "" && actorage !== false)){
                                          let actorname = prompt("Actress/Actor Name: "); //The user insert using prompt command the actor's name.
                                          while (actorname === "" && actorname !== false){ //only when the user didnt push cancel button
                                                actorname = prompt("You should insert a name");
                                              }
                                         if (!actorname){ //if the user didnt put an actor name actorage is false to avoid the prompt age and quit.
                                              var actorage = false;
                                         }
                                         else{
                                              var actorage = "true";
                                         }
                                        if (actorage == "true"){
                                              actorage = prompt("Her/His Age is: ");//Prompt for actorage
                                              while (actorage !== false && actorage == ""){ //if user dont push cancel and actorage is empty...
                                                actorage = prompt("You should insert her/his age");
                                              }
                                            }
                                        if (actorname == null || actorage == null){ //when result_confirm is false the user stop to charge actors
                                              result_confirm=false;
                                            }
                                        else{
                                            var actor = new Actor(actorname,actorage);//the object actor is created
                                            actors.push(actor);//this variable will containe the actors created by the user
                                            result_confirm = confirm("You wish add another actor?");
                                          }
                                        }
                                      if (actors !== null){
                                        movie.addCast(actors);//When the load of actors is finished the cast is added to the movie.
                                      }
                                      };
   addactorbutton.setAttribute("class","buttons_option");//Setting style for button
   return addactorbutton;//Return the button created
}
function createPauseButton(movie){
  //function used to create the button to pause the movie. First the element is created
  const pausebutton=document.createElement("input");
  //setting some propoerties
  pausebutton.type="image";
  pausebutton.src="css/pause.jpg";
  pausebutton.style.width="38px";
  pausebutton.style.height="38px";
  movie.on("Play button",movie.pause()); // When the button be clicked the movie will pause
  return pausebutton; //The button is returned
}
function createPlayButton(movie){
  //function used to create the button to play the movie. First the element is created.
  const playbutton=document.createElement("input");
  //Setting some properties
  playbutton.type="image";
  playbutton.src="css/play.jpg";
  playbutton.style.width="38px";
  playbutton.style.height="38px";
  playbutton.alt="Play button"; //This alt name will be used when the LoggerClass "observe" this events
  let logger = new Logger("play", playbutton.alt);
  movie.on("Play button",movie.play());
  playbutton.onclick=function(){movie.emit("Play button");
                                logger.log("has been pushed!");
                              }
  playbutton.setAttribute("class","buttons_option"); //Setting class
  return playbutton; //The button is returned
}
function createSeeButton(movie){
const seeactorsbutton=document.createElement("input");
seeactorsbutton.type="image";
seeactorsbutton.src="css/see.png";
seeactorsbutton.style.width="38px";
seeactorsbutton.style.height="38px";
seeactorsbutton.setAttribute("id",movie.getTitle());
seeactorsbutton.setAttribute("class","buttons_option");
seeactorsbutton.onclick=function(){
                          // When the user clicks on <div>, open the popup
                          const movie_selected = collection.getMovie(seeactorsbutton.id); //get the movie_selected using the id of the button
                          let arrayactors = movie_selected.getCast();//get the cast of the movie
                          var actors_names="";
                          arrayactors.forEach((actor) => {actors_names = actors_names + " " + actor.getName() + "\n"});//function to show the cast
                          alert(actors_names);
                      }
  return seeactorsbutton;
}
function Mixin(){
      let social = { share(friendname){
                              alert(friendname+" shares "+this.name);
                            },
                     like(friendname){
                              alert(friendname+"likes"+this.name);
                     }
      };
      let movie_mixin = new Movie("Lord of the Rings","2016", "3:45");
      object.assign(Movie.prototype,social);
      movie_mixin.like("Ricardo Bochini");
}

function validate(anio){
    if (anio<1985 || anio>(new Date()).getFullYear()){
            return false;}
    return true;
}
function addMovie(){
    //Take the value of variables from form
    let duracion = newMovie.elements["hora"].value+" : "+newMovie.elements["min"].value;
    let anio = newMovie.elements["year"].value;
    let tit= newMovie.elements["title"].value;
    let validateYear = validate(anio);
    if (validateYear){
      //Create the movie object
      const movie = new Movie(tit,anio,duracion);
      collection.addMovieToCollection(movie);
      //Create the trow. This row will append to the table of body section
      let trow = document.createElement("TR");
      //Create the tdata. These td will contain the title, the year and the duration
      const td1 = document.createElement("TD");
      const td2 = document.createElement("TD");
      const td3 = document.createElement("TD");
      //Get the title from the object to test the response and then the nodeText is created to be append at row later. Same with year and duration
      tit=movie.getTitle();
      tit=document.createTextNode(tit);
      anio=movie.getYear();
      anio=document.createTextNode(anio);
      duracion=movie.getDuration();
      duracion=document.createTextNode(duracion);
      //Append these data on each TD
      td1.appendChild(tit);
      td2.appendChild(anio);
      td3.appendChild(duracion);
      //Setting style to each TD
      td2.setAttribute("class","td_tabla");
      td1.setAttribute("class","td_tabla");
      td3.setAttribute("class","td_tabla");
      //Adding TD at TROW
      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      //Setting style to TROW
      trow.setAttribute("class","movie_row");
      trow.setAttribute("id",tit);
      //tdbutton is the fourth td on the row. Here gonna be the options to pause, play and add actors to the movie.
      const tdbutton= document.createElement("TD");
      tdbutton.setAttribute("class","td_options");
      tdbutton.appendChild(createActorButton(movie));//call to function to create the button used to add actors
      tdbutton.appendChild(createSeeButton(movie));//call to function to create the button used to see the actors
      tdbutton.appendChild(createPlayButton(movie));//call to function to create the button used to play te movie
      tdbutton.appendChild(createPauseButton(movie));//call to function to create the button used to pause the movie
      trow.appendChild(tdbutton);
      let tableRef = document.getElementById("movie_table").getElementsByTagName("tbody")[0];
      tableRef.appendChild(trow);
      document.getElementById("movie_form").reset();//Reset the form
    }
    else {
       alert("El anio debe estar entre 1985 y "+(new Date()).getFullYear());
    }
    }
