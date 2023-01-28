import axios from "axios"





// var url = "https://nairaland-20.herokuapp.com/api/"
  //url = "http://localhost:8000/api/"

var url = "https://nairaland1.netlify.app/"

export function getHome(){
     console.log( "Getting Home" )
     return axios.get(url+"home")
}

export function getSection(){
     console.log( "Getting section" )
     return axios.get(url+"section")
}


export function getTopic(slug){
     return axios.post(url+"topic", {
          topic_url : slug
     })
}


export function getCategory(name){
     return axios.post(url+"category", {
          name : name
     })
}
