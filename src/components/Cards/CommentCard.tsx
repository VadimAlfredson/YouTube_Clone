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
import {Favorite} from "@mui/icons-material";


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
            <CardContent sx={{ml: '50px', pt: '3px', pb: '3px'}}>
                <Typography color='white'>{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
                m: '0', pt: '3px',
                pb: '3px', ml: '50px'
            }}>
                <IconButton aria-label="add to favorites" sx={{}}>
                    <Favorite sx={{color: 'white'}} />
                </IconButton>
                <Typography variant={'inherit'} color='white'>{comment.snippet.topLevelComment.snippet.likeCount}</Typography>
            </CardActions>
        </Card>

    )
}

export default CommentCard