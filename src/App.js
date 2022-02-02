import React from 'react';
import './App.css';
import Table from './Table.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rows: 0,
      cols: 0
    }

    this.onRowUpdate = this.onRowUpdate.bind(this);
    this.onColUpdate = this.onColUpdate.bind(this);
  }

  onRowUpdate(e) {
    this.setState({rows: e.target.value});
  }

  onColUpdate(e) {
    console.log('colClick:', e.target.value)
    this.setState({cols: e.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <label>Rows</label>
          <label>Col</label>
          <br/>
          <input onChange={this.onRowUpdate} type="number" min="0" max="10"></input>
          <input onChange={this.onColUpdate} type="number" min="0" max="10"></input>
        </form>
        <Table rows={this.state.rows} cols={this.state.cols}/>
      </div>
    );
  }
}

export default App;
