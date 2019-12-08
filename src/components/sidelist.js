import React, { Component } from 'react';

class Sidelist extends Component {
  render() {
    console.log("SAVED PLACES ",this.props.savep)

    if(this.props.savep !== undefined){
      var slist = this.props.savep.map(name=>{
        console.log(name)
      return (  <li >{name}
      <p>{name.formatted_address}</p><button type="button"  className="btn btn-outline-warning btn-sm ">remove</button>
      </li>
    
       
          )
    
      })
    }
    

    return (
        <div className="savePlace">
        <h3>Saved Places</h3>
           <ul>
           {slist}
          </ul>
           </div>


    );
  }
}

export default Sidelist;
