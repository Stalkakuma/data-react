import React from "react"

function Table(props) {

  //console.log("passing props",props)

  	return (
  		 <div>
             <ul>
                <li> 
                <h1 className="memeTitle">
                {props.name}
                </h1>
                <img 
                className="memeImage"
                alt={props.alt} 
                src={props.url} /> 
                </li>
             </ul>
  		 </div>
  		)
  
}

export default Table