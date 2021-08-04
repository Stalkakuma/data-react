import React from "react"

function Table(props) {

	
  console.log("passing props",props)
  	return (
  		 <div>
       <h1> {props.results}  </h1>
        
  		 </div>
  		)
  
}

export default Table