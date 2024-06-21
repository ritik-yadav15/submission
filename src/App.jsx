import { useState } from 'react'
import './App.css'
import {Provider} from "react-redux"
import store from "./store/store"
import { PostList } from './components/PostList'
import { Pagination } from './components/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Provider store={store}>
  <div className='container'>
  <h1> wirefarme card</h1>
  <PostList/>
  <Pagination/>
  </div>
  </Provider>
    
  )
}

export default App
