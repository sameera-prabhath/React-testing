import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {

  render() {


    console.log(this.props.resultpalce.results)
if(this.props.resultpalce.results !== undefined){
     console.log(this.props.resultpalce.results.length)

     if(this.props.resultpalce.results.length === 0){
       console.log("no results");
       function Xxx(){
         return(
<li><p className="text-warning"><h5>Oops! No Results</h5></p>
<p>Refresh The Page And Try Again</p>
</li>
         );
       }
    
    ReactDOM.render(<Xxx />, document.querySelector('#id1'));    
   
    window.location.reload()
    
     }


else{
  
  var placelist = this.props.resultpalce.results.map(name=>{
    console.log(name)
  return (  <li key={name.id} ><h5>{name.name} <img src={name.icon} alt="pic" height="42" width="42" /> </h5> 
  
  <br/>
  <p><b>Address: </b>{name.formatted_address}</p><button type="button" onClick={()=>this.props.savelist(name.name )} className="btn btn-outline-info btn-sm ">save place</button>
  </li>

   
      )

  })
}}

 
    return (
    
<div className="ul"> 
    <ul id="id1">
    {placelist}
    </ul>
    </div>

    )
  }
}

export default  Results;
