import React, { Component } from 'react';
import './App.css';

class FormNewMovie extends Component{
  constructor(props) {
      super(props);
      this.state = {
                    title: '',
                    year:null,
                    duration:null,
                   };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

  handleSubmit = (event) => {
        event.preventDefault();
        var data = [];
        data.push(this.state.title);
        data.push(this.state.year);
        data.push(this.state.duration);
        this.props.callbackFromApp(data);

      }

  render(){
      return(
        <form className="form" ref="form" onSubmit={this.handleSubmit}>
                  <div id="container_form_oculto">
                    <div id="form_movies">
                      <input type="text" placeholder="Title" name="title" /*value={this.state.title}*/ onChange={this.handleChange.bind(this)}></input>
                      <input type="number" placeholder="Year" name="year" /*value={this.state.year}*/ onChange={this.handleChange.bind(this)}></input>
                      <input type="number" placeholder="Duration (in minutes)" name="duration" /*value={this.state.duration}*/ onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div id="buttons">
                      <input type="submit" value="Add Movie"></input>
                      <button type="reset" value="Reset">Reset</button>
                    </div>
                  </div>
        </form>
      );
   }
}

export default FormNewMovie;
