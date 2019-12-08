import React,{ Component } from 'react';
import axios from 'axios';
class Search extends Component {
    getKey(e){
        e.preventDefault();
        const typedText = this.refs.inputText.value;
        const upd = this.props;

        axios.post('http://localhost:3001/getlocations', {
          city:typedText,
          })
          .then(function (response) {
             upd.callupdate(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });


      }
    
render(){
    
    return(
<form>
        <div className="form-group">    
      <label htmlFor="exampleInputEmail1">Enter The City</label>
      <input  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref="inputText"/>
     
    </div>
    <button className="btn btn-primary" onClick={this.getKey.bind(this)} >Search</button>
     </form>
    )

}

}

export default Search;