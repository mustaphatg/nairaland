import React from "react"
import ReactPlaceholder from "react-placeholder"
import 'react-placeholder/lib/reactPlaceholder.css'
import Toolbar from "@material-ui/core/Toolbar"


const my_styles = {
     border : "var(--topic_border_width) solid var(--loader_border)",
     marginBottom : "20px",
     borderRadius : "5px",
     padding : "5px"
}


const Loader = props => {
    
    return (
         <>
               <Toolbar />
               
               { [7, 1,2,3,2,6,3].map((el, i) => (
                    <ReactPlaceholder 
                         key= {i  }
                         style= {my_styles}
                         type="media"
                         rows= {el}
                         color = "var(--loader_bg)"
                         showLoadingAnimation = {true}           
                    />
               )) }
          
          </ >
    )
    
    
}



export default Loader