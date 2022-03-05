import React, {useEffect, useState  } from "react"
import NavBar  from "./components/NavBar"
import { Route, Switch }  from "react-router-dom"
import Home from "./components/Home"
import Topic from "./components/Topic"
import { useSelector, useDispatch } from "react-redux"
import   "./app.css"
import  { makeStyles } from "@material-ui/core/styles"
import Category from "./components/Category"


const useStyles = makeStyles(theme => ({
     shift : {
          [theme.breakpoints.up("md")] : {
               marginLeft : "240px"
          }
     }
}))

const App = props => {

    const dispatch = useDispatch()
  
    
    const classes = useStyles()
    
    
    
    useEffect(() => {
         dispatch( { type : "FETCH_HOME_DATA" })  
         dispatch( { type : "FETCH_SECTION_DATA" })  
    }, [dispatch])
    
    
   
     return (
          <>
               <NavBar />
               
               <div className= { classes.shift }>
                    <Switch>
                    
                         <Route path="/topic/:slug">
                              <Topic />
                         </Route>
                         
                         <Route path="/category/:name">
                              <Category />
                         </Route>
                         
                         <Route path="/">
                              <Home />
                         </Route>
                         
                    </Switch> 
               </div>
          
          </>
     )
}


export default App