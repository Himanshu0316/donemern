import React, { useState } from 'react'
import axios from "axios";
import { Box, Button, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [inp,setInp] = useState({
        email:"",
        password:"",
    })
    
    const navigate = useNavigate()
   const google = ()=>{
    window.open("http://localhost:8000/auth/google","_self")
   }
   const handleChange = (e)=>{
    setInp((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
   }
   const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(inp)
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, inp);

      var token = res.data.message;
      var user = res.data.userdata;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(res);
      alert(res.data.message);
       navigate("/")
      

      console.log(res.message);
    } catch (err) {
      console.log(err);
    }

   }
   return (
     <div>
       <form onSubmit={handleSubmit}>
         <Box 
            display='flex'
            flexDirection={'column'}
            width='40%'
            alignItems="center"
            m="auto"
            mt={5}
            p={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
                ":hover":{
                boxShadow:"10px 10px 20px #ccc",
             },
            }}
            >
             <Typography variant='h3' padding={3} textAlign="center">Login</Typography>
             <TextField onChange={handleChange} name='email' value={inp.email} margin="normal" type={"email"} variant='outlined' placeholder='Email'/>
             <TextField onChange={handleChange} name='password' value={inp.password} margin="normal" type={"password"} variant='outlined' placeholder='Password'/>
             
             <Button type={"submit"} variant='contained' color='warning' sx={{width:"150px",marginTop:3,borderRadius:2}}>Login</Button>
              <Button onClick={google} sx={{width:"150px",marginTop:3,borderRadius:2}}>Sign IN Google</Button>
             
             <Button onClick={()=>navigate("/signup")} sx={{width:"150px",marginTop:3,borderRadius:2,color:'white',backgroundColor:'dodgerblue'}}>Go for Signup</Button>
         </Box>
       </form>
     </div>
    )
}

export default Login