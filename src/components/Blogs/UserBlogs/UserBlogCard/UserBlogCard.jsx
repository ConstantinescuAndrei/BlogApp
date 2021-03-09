import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardActions, CardContent, Button, Typography, CardHeader, CardMedia, Avatar } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import DeleteButton from './DeleteButton/DeleteButton';

const useStyles = makeStyles(theme => ({
    cardRoot: {
        minWidth: 275,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    avatar: {
        backgroundColor: red[500],
    },
}))

const UserBlogCard = ({ id,title, content, author, image }) => {
    const classes = useStyles();

    const [croppedBlog, setCroppedBlog] = useState({
        croppedContent: '',
        firstLettherOfAuthor: ''
    });

    useEffect(() => {
        let temporalyCroppedContent = '';
        let temporalyCroppedAuthor = '';
        
        temporalyCroppedContent = content.substring(0, 100);
        temporalyCroppedContent = temporalyCroppedContent + "...";
        temporalyCroppedAuthor = author.substring(0, 1);

        setCroppedBlog({
            croppedContent: temporalyCroppedContent,
            firstLettherOfAuthor: temporalyCroppedAuthor
        })

    }, [])

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.cardRoot}>
                <CardHeader
                    avatar={<Avatar className={classes.avatar}>{croppedBlog.firstLettherOfAuthor}</Avatar>}
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {croppedBlog.croppedContent}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Modify
                    </Button>
                    <DeleteButton id={id} />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default UserBlogCard
