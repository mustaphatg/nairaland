import React from "react"
import ReactPlaceholder  from "react-placeholder"
import Toolbar from "@material-ui/core/Toolbar"
import 'react-placeholder/lib/reactPlaceholder.css'


function HomeLoader(props){
     return (
          <>
               <Toolbar />
               <br />
               { [2, 4, 3, 5, 7, 9, 10].map((el, i) =>  (
                    <ReactPlaceholder 
                         color="var(--loader_bg)" 
                         key= { i } type="text" 
                         rows= { el } 
                         showLoadingAnimation = {true}      
                    />)  
               ) }
          </>
     )
}


export default HomeLoader