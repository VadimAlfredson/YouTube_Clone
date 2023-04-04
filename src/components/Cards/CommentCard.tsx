import React from "react";
import {Box, Card, CardMedia, Stack, Typography} from "@mui/material";
import {commentType} from "../../types/typesItems";


const CommentCard:React.FC<{ comment: commentType }> = ({comment}) => {
    return (
        <Stack direction='row' sx={{backgroundColor: '#1e1e1e', margin: 2, borderRadius: '3px'}}>
            <Box flex={1} sx={{width: '100px', borderRadius: '50%'}}>
                <div style={{width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '50%'} }>
                <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                style={{width: '100px'}}
                /></div>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</Typography>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.likeCount}</Typography>

            </Box>
        </Stack>
    )
}

export default CommentCard