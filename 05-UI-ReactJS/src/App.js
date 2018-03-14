import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import movie from './Movie.js';
import FormNewMovie from './FormNewMovie.js'
import Table from './Table.js'
//import Editor from './Editor'

//----------------------------------------------------- App --------------------------------------------------------
class App extends Component {
  constructor(props) {
      super(props);
      this.state={
          lastMovie:null,
      }
    }

  makeid() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
  }

  callbackForm = (dataMovie) =>{
    let movie = {
        id:this.makeid(),
        title: dataMovie[0],
        year: dataMovie[1],
        duration: dataMovie[2],
     };
     this.setState({lastMovie:movie});
}

  render(){
          return(
              <div id="container">
                <FormNewMovie callbackFromApp={this.callbackForm}/>
                <Table movie={this.state.lastMovie}/>
              </div>
            );
        }

}

export default App;


ReactDOM.render(<App />,document.body);
