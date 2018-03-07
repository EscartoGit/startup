require("babel-register");

import EventEmitter from './EventEmitter.js';
export default class Movie extends EventEmitter

{
  constructor(title,year,duracion){
    super();
    this.title = title;
    this.year = year;
    this.duration = duracion;
    this.actors = [];
  }

  addCast(actorslist){
    for (let i=0; i<actorslist.length;i++){
            this.actors.push(actorslist[i])
          }
  }

  seeActors(){
     for(let i=0; i<this.actors.length; i++){
          console.log(this.actors[i]);
     }
  }

  getTitle(){
    return this.title;
  }

  getYear(){
    return this.year;
  }

  getDuration(){
    return this.duration;
  }

  play(){
    console.log("Play Movie");
  }

  pause(){
    console.log("Pause Movie");
  }

  resume(){
    console.log("Resume Movie");
  }
}
