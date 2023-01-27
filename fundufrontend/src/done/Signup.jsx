import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [inp,setInp] = useState({
        name:"",
        email:"",
        password:"",
        lastname:"",
    })
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
        const url = "http://localhost:8080/api/users";
        const res = await axios.post(url, inp);
        
        alert("hii")
        navigate("/login");
        console.log(res);
      } catch (err) {
        alert(err.response.data.message);
        console.log(err);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }

   }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
            <Typography variant='h3' padding={3} textAlign="center">Signup</Typography>
            <TextField onChange={handleChange} name='name' value={inp.name} margin="normal"  type={"text"} variant='outlined' placeholder='Name'/>
            <TextField onChange={handleChange} name='email' value={inp.email} margin="normal" type={"email"} variant='outlined' placeholder='Email'/>
            <TextField onChange={handleChange} name='password' value={inp.password} margin="normal" type={"password"} variant='outlined' placeholder='Password'/>
            <TextField onChange={handleChange} name='lastname' value={inp.lastname} margin="normal" type={"text"} variant='outlined' placeholder='Lastname'/>
            <Button type={"submit"} variant='contained' color='warning' sx={{width:"150px",marginTop:3,borderRadius:2}}>Signup</Button>
            <Button onClick={()=>navigate("/login")} sx={{width:"150px",marginTop:3,borderRadius:2}}>Go for Login</Button>
        </Box>
      </form>
    </div>
  )
}

export default Signup
