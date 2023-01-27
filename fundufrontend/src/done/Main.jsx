import React from 'react'
import Navbar from './Navbar'
import { Route, Routes} from 'react-router-dom'
import Follow from './Follow'
import Home from './Home'
import styles from "./main.module.css"
import Login from './Login'
import Signup from './Signup'
const main = () => {
  return (
    <div className={styles.Main}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/follow' element={<Follow/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
  )
}

export default main
