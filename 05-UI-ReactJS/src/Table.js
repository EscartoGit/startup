import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'

class Table extends Component{
  constructor(props){
    super(props),
    this.state = {
        movies:[],
    }
    this.prerender = this.prerender.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie(title){
        let movies=this.state.movies;
        for (var i=0; i<movies.length; i++){
          if (movies[i].title === title){
              movies.splice(i, 1)
              this.setState({movies: movies})
        }
      }
    }

  handleChange(){}

  renderMovie(i){
    return <Movie title={i.title} year={i.year} duration={i.duration} updateMovies={this.handleChange.bind(this)} deleteButton={this.deleteMovie.bind(this)}/>
  }

  render(){
    if (!this.state.movies){
        return(
            <table id="movie_table">
              <thead>
                <tr>
                  <td>TITLE</td>
                  <td>YEAR</td>
                  <td>DURATION</td>
                </tr>
              </thead>
              <tbody> { this.state.movies.map(i => {
                                                  this.renderMovie(i);
                                                  }
                                            )
                      }
              </tbody>
            </table>
        );}
  else{
      return(
          <table id="movie_table">
              <thead>
                <tr>
                  <td>TITLE</td>
                  <td>YEAR</td>
                  <td>DURATION</td>
                </tr>
             </thead>
             <tbody>
                    {this.renderMovie(this.props.lastMovie)}
             </tbody>
           )
         }
    }

}

export default Table;
