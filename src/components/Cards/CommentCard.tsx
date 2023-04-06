import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import {commentType} from "../../types/typesItems";


const CommentCard: React.FC<{ comment: commentType }> = ({comment}) => {
    return (


        <Card sx={{backgroundColor: '#1e1e1e', margin: 1, borderRadius: '15px', color: 'white'}}>
            <CardHeader sx={{m: '0'}}
                        avatar={<Avatar sx={{backgroundColor: "grey"}}
                                        alt={'V'}
                                        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        />}
                        title={
                            <Typography
                                sx={{color: 'white'}}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</Typography>
                        }
                        subheader={<Typography
                            sx={{color: 'grey'}}>{comment.snippet.topLevelComment.snippet.publishedAt}</Typography>}
            />
            <CardContent sx={{m: '0', pt: '3px', pb: '3px'}}>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
                m: '0', pt: '3px',
                pb: '3px', mr: '10%', justifyContent: 'right'
            }}>
                <IconButton aria-label="add to favorites" sx={{}}>
                    {`<З`}
                </IconButton>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.likeCount}</Typography>
            </CardActions>
        </Card>

    )
}

export default CommentCard