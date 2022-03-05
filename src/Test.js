import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import { useSelector } from "react-redux"
import List  from "@material-ui/core/List"
import ListItem  from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link }  from "react-router-dom"


const NairaLink = props =>{
     
     const { href, text } = props.data
     
     var url = href.replace("https://www.nairaland.com/", "")
     
     return (
          <ListItem button component={Link} to={url} >
               <ListItemText primary={ text } />
          </ListItem>
     )
}

const Test = props => {
    
    
    const home = useSelector(state => state.home)
    
    return (
         <>
           <Toolbar />
           <p> Hello </p>
           
           <List>
               { 
                    home.map((el, i) => <NairaLink key= {i  } data= {el  } /> )
               }
          </List >
       </>
    )
    
    
}



export default Test