import React, { Component } from 'react';
import Search from './components/search';
import Sidelist from './components/sidelist';
import Results from './components/results';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      resultlist:{},
      saved:[]
    }
  }

  updatestate(val){
this.setState({
  resultlist:val
})
  }
savelist(name){
   const places = this.state.saved.concat([name])
  this.setState({
    saved:places
  })  
}


  render() {
    return (
      <div className="container" >
      <div className="App">
        <h1>Search Nearby Places</h1>
        
        <Search callupdate={this.updatestate.bind(this)}/>

        <Results  resultpalce={this.state.resultlist}   
        savelist={this.savelist.bind(this)}
        />

        <Sidelist savep={this.state.saved} />
      </div>
     </div>
    );
  }
}

export default App;
