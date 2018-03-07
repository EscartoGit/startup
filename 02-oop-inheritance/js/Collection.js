import Movie from './Movie.js';
export default class Collection{
    constructor(){
       this.movies_collection=[];
    }

    addMovie(movie){
      this.movies_collection.push(movie);
    }

    deleteMovie(movie){
      for (let i=0;i<this.movies_collection.length;i++){
          if (this.movies_collection[i] === movie)
              this.movies_collection.splice(1,1);
      }
    }

    getMovie(title){
      for (let i=0;i<this.movies_collection.length;i++){
         if (this.movies_collection[i].getTitle() === title){
            return movies_collection.slice(i--,i);
         }
      }
    }
}
