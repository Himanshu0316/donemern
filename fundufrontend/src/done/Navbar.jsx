import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./main.module.css"
import { AppBar, Box, MenuItem, Select, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  const [sort, setSort] = useState('');
  const navigate = useNavigate()
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (


    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, mr: 1, justifyContent: 'space-between', backgroundColor: 'white' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, mr: 1, justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 5, backgroundColor: 'white', color: 'black' }} className={styles.Home} onClick={() => navigate("/")}>
              Home
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }} className={styles.Home} onClick={() => navigate("/follow")}>
              Fllower
            </Typography>
          </Box>
          <Select sx={{ width: 100, height: 40, backgroundColor: 'white', borderRadius: 2 }} value={sort} onChange={handleChange}>
            <MenuItem value={'recent'}>Recent</MenuItem>
            <MenuItem value={'top'}>Top</MenuItem>

          </Select>
        </Toolbar>

      </AppBar>


    </Box>

  )
}

export default Navbar
