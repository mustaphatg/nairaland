import React, { useEffect} from "react"
import { useParams }  from "react-router-dom"
import Toolbar from "@material-ui/core/Toolbar"


const Category = props => {
    
    const {name} = useParams()
    
    
    useEffect(() => {
         
    }, [])
    
    
    return (
         <>
               <Toolbar />
               <p> App new  { name } </p>
          
          </>
         
    )
    
    
}



export default Category