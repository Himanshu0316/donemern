import { Box, Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards'

import styles from "./main.module.css"
const Home = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate();
    const loginPath = () => {
        navigate("/login")
    }
    const getData = async()=>{
        try{
            var res = await fetch("https://github.com/fundu-games/technical-task-react/blob/main/test-dataset/user_post.json")
            var data = await res.json()
            setData(...data)
            
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
   var token = localStorage.getItem("token")
  
    useEffect(()=>{

        getData()
    },[])
    
    return  token ? (
        <div className={styles.Contan}>
            <Cards />
        </div>
    
    ) : (
        <Box m="50px" p='2' direction="column" align="center"  >
            <h1 size='md'>If you want to see the content then first login</h1>
            <Button className={styles.bTn} colorScheme='teal' onClick={loginPath}>Log in</Button>
            
        </Box>
        
    )
     
}

export default Home
