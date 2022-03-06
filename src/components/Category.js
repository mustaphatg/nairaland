import React, { useEffect, useState} from "react"
import { useParams , Link }  from "react-router-dom"
import Toolbar from "@material-ui/core/Toolbar"
import { useDispatch } from "react-redux"
import { getCategory } from "../api"
import Loader from "./Loader"
import  "./category.css"
import  List from "@material-ui/core/List"
import  ListItem from "@material-ui/core/ListItem"
import  ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import CommentOutlined from "@material-ui/icons/CommentOutlined"
import RemoveRedEye from "@material-ui/icons/RemoveRedEyeSharp"

function CategoryTopic(props){
     
     var topic = props.topic
     
     return (
               <div className="category__container" >
                    <div className="category">
                         <div className="category__header"> 
                              <div> <img src="/1.jpg" /> </div>            
                              <div className="info">
                                   <p className="user_name" > {  topic.creator} </p>
                                   <small> { topic.time } </small>
                              </div>
                         </div>
                         
                         <div className="category__body">
                              <List>
                                   <ListItem 
                                        className="topic_link"
                                        component= { Link }
                                        to = { "/topic"+topic.href }
                                   >
                                        <ListItemText primary= { topic.text }  />                     
                                   </ListItem> 
                              </List>
                              
                              <div className="topic_details">
                                   <span>
                                        <IconButton >
                                             <CommentOutlined />
                                        </IconButton>
                                        { topic.replies }
                                   </span>
                                   
                                   <span>
                                        <IconButton >
                                             <RemoveRedEye />
                                        </IconButton>
                                        { topic.views}
                                   </span>                     
                                   
                              </div>
                              
                         </div>
                    </div>
                    
                    <div className="bar"> </div>
               </div>          
     )
}






const Category = props => {
    
    const {name} = useParams()
    const dispatch = useDispatch()
    var [category, setCategory] = useState("loading")
    
    
    
    
    
    useEffect(() => {
         setCategory("loading")
         
         dispatch({ type : "TOGGLE_DRAWER" , payload : false })              
         
         // fetch Category
         getCategory(name)
         .then(result => {
              setCategory(result.data)
         })
         .catch(er => {
              console.log(er)
         })
         
    }, [name])
    
    
    
    if(category === "loading"){
         return <Loader />
    }
    
    
    return (
         <>
               <Toolbar />
               { category.map((el, i) =>  <CategoryTopic key={i} topic={el} /> ) }                         
          </>
    )
    
    
}



export default Category