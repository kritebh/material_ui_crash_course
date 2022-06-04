import React, { useState, useEffect } from 'react'
import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material'

function MuiSkeleton() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[])

    return (
        // <Stack spacing={1} width='300px'>
        //     <Skeleton/>
        //     <Skeleton variant='circular' width={40} height={40} />
        //     <Skeleton variant='rectangular' width={250} height={125} animation='wave' />
        // </Stack>
        <Box sx={{ width: '250px' }}>
            {
                loading ? (<Skeleton variant='rectangular' width={256} height={144} animation="wave"></Skeleton>) : (
                    <img src="https://source.unsplash.com/random/256x144" alt="skeleton" width="256px" height="144px"></img>
                )
            }

            <Stack direction="row" spacing={1} sx={{ width: '100%', marginTop: "12px" }}>
                {
                    loading ? (<Skeleton variant='circular' width={40} height={40} animation='wave' />) : (
                        <Avatar >V</Avatar>
                    )}
                <Stack sx={{ width: "80%" }}>
                    {
                        loading ? (
                            <>
                                <Typography variant="body1">
                                    <Skeleton variant='text' animation='wave' />
                                </Typography>
                                <Typography variant="body2">
                                    <Skeleton variant='text' animation='wave' />
                                </Typography>
                            </>
                        ) : (
                            <>
                               <Typography variant="body1">
                                   React Mui Tutorial
                                </Typography> 
                            </>
                        )}
                </Stack>
            </Stack>
        </Box>
    )
}

export default MuiSkeleton