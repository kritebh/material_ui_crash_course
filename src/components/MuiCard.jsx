import React from 'react'
import {Box,Card,CardActions,CardContent,Typography,Button,CardMedia} from '@mui/material'
function MuiCard() {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component="img" height="140px" image='https://source.unsplash.com/random' alt="unsplash image"></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> React </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sunt.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard