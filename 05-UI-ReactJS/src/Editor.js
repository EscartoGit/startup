import React, { Component } from 'react';

class Editor extends Component{
  render(){
    {let edit = editing}
    return (
        <div className="editor">
          <form>
            <input name="title_edit" value={edit[0]}></input>
            <input name="year_edit" value={this.props.editing[1]}></input>
            <input name="duration_edit" value={this.props.editing[2]}></input>
            <input type="button" value="Confirm" onClick={this.props.confirmChange}></input>
          </form>
        </div>
      );
    }
}

export default Editor;
