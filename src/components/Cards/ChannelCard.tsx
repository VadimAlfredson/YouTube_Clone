import React from "react";
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import {demoProfilePicture} from "../../utils/constants";
import {CheckCircle} from "@mui/icons-material";

const ChannelCard:React.FC<{id?: string, img: string, title: string, marginTop?: string}> = ({id, img, title , marginTop}) => {
    return <Box
    sx={{boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center',
    alignItems: 'center', width: {md: '320px', xs: '356px'}, height: '326px', margin: 'auto', marginTop: marginTop
    }}
    >
<Link to={`/channel/${id}`}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
    textAlign: 'center', color: '#fff'}}>
<CardMedia
image={`${img}` || demoProfilePicture}
sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3', backgroundColor: 'darkgrey'}}
/>
        <Typography variant='h6'>
            {title}
            <CheckCircle sx={{width: 14, color: 'gray', ml: '5px'}}/>
        </Typography>
    </CardContent>
</Link>
    </Box>
}

export default ChannelCard