import React, { Component } from 'react';
import './App.css'

class Movie extends Component{
  constructor(props){
    super(props);
    this.state={
        title:this.props.title,
        year:this.props.year,
        duration:this.props.duration,}

    this.handleEdit = this.handleEdit.bind(this);
}

  handleEdit(){
    let editor=this.state.labels;
    editor.title = prompt("Title: ",this.state.title);
    editor.year = prompt("Year: ",this.state.year);
    editor.duration = prompt("Duration: ", this.state.duration);
    this.setState({labels:editor});
    console.log(this.state.labels.title);
  }

  render(){
      return(
            <tr>
                <td>
                    <label name="title">{this.state.title}</label>
                </td>
                <td>
                    <label name="year">{this.state.year}</label>
                </td>
                <td>
                    <label name="duration">{this.state.duration}</label>
                </td>
                <td>
                  <button onClick={this.handleEdit.bind(this)} name="Edit">Edit</button>
                  <button onClick={this.props.deleteButton(this)} name="Delete">Delete</button>
                </td>
            </tr>

     );
  }
}

export default Movie;
