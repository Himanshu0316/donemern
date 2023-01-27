import { Box, Button, CardActions, CardContent, Typography, Card, CardMedia } from '@mui/material';
import { TbArrowBigTop,TbArrowBigDown } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import {RiRepeatLine} from "react-icons/ri";
import React from 'react'
import styles from "./main.module.css"
const Cards = () => {

  var s = "https://mui.com/static/images/cards/paella.jpg"
  return (
    <Box sx={{ width: '60%', m: 'auto', mt: 2 }}>
      <Card variant="outlined">
        <CardContent>


          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <CardMedia
              component="img"
              height="40"
              width="40"
              sx={{ borderRadius: "50%", width: 40 }}
              image={s}
              alt="Paella dish"
            />
            <Typography variant='h6' sx={{ ml: 2, color: 'black' }} color="text.secondary" gutterBottom>
              Himanshu
            </Typography>
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
            >•</Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              @iamhsu
            </Typography>
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
            >•</Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              2h
            </Typography>
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
            >•</Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              21 jan 2022
            </Typography>
          </Box>



          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.


          </Typography>
        </CardContent>
        <hr className={styles.hrTag} />
        <CardActions sx={{width:'95%',m:'auto'}}>
          <Box sx={{width:'100%' ,display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TbArrowBigTop/>
                <Typography sx={{ml:1}}>2</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' , m:1 }}>
                <TbArrowBigDown/>
                <Typography sx={{ml:1}}>200</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' , m:1 }}>
                <FaRegCommentDots/>
                <Typography sx={{ml:1}}>2</Typography>
              </Box>
            </Box>
            <RiRepeatLine/>
          </Box>
        </CardActions>
      </Card>

    </Box>

  )
}

export default Cards
