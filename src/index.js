import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {  BrowserRouter} from "react-router-dom"
import  store  from "./reducers/store"
import { Provider } from "react-redux"




var root = document.querySelector("#root")
ReactDom.render(
    <BrowserRouter>
          <Provider store= { store } >
               <App />
         </Provider>
    </BrowserRouter>,
    root
)

