import axios from "axios"





var url = "https://nairaland-20.herokuapp.com/api/"
 // url = "http://localhost:8000/api/"

export function getHome(){
     console.log( "calling" )
     return axios.get(url+"home")
}

export function getSection(){
     console.log( "calling section" )
     return axios.get(url+"section")
}


export function getTopic(slug){
     return axios.post(url+"topic", {
          topic_url : slug
     })
}