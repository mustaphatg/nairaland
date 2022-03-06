import React,{ useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Toolbar from "@material-ui/core/Toolbar"
import { useDispatch, useSelector }  from "react-redux"
import { getTopic } from "../api"
import Loader from "./Loader"
import TopicHeader from "./TopicHeader"
import Reply from "./Reply"



const Topic = props => {
    
    var [topic, setTopic] = useState({})
    var [ready, setReady] = useState(false)
    
    
    var {slug} = useParams()
    slug = decodeURIComponent(slug)
    
    
    useEffect(() =>{
         
         
         getTopic(slug)
         .then(result => {
              setTopic(result.data)
              setReady(ready => !ready)
              
         })
         .catch(er => {
              console.log(er)
         })
         
    }, [])
    
    
    
     if(!ready){
          return <Loader />
     }

     return (
          <>
               <Toolbar />
               <TopicHeader topic= { topic } />
               
               <div >
                    { topic.replies.map((data, i) => <Reply key= {i} reply={ data }  /> ) }                       
               </div>
          </>
     )
               
     
}



export default Topic