import React from "react";
import {Box, Card, CardMedia, Stack, Typography} from "@mui/material";
import {commentType} from "../../types/typesItems";


const CommentCard:React.FC<{ comment: commentType }> = ({comment}) => {
    return (
        <Stack direction='row' sx={{backgroundColor: '#1e1e1e', margin: 2, borderRadius: '10px'}}>
            <Box flex={1} sx={{width: '100px', borderRadius: '50%'}}>
                <CardMedia
                    image={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                    sx={{width: {xs: '100%', sm: 120, md: 120}, height: 150}}
                />
            </Box>
            <Box flexDirection='column'>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</Typography>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.likeCount}</Typography>

            </Box>
        </Stack>
    )
}

export default CommentCard