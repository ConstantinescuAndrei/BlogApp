import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";
import { Grid, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    grid: {
    }
});

const BlogCard = ({id, title, content, author}) => {
    const classes = useStyles();
    const [finalContent, setFinalContent] = useState('');

    useEffect(() => {
        let temporaryContent;
        temporaryContent = content.substring(0, 100);
        temporaryContent = temporaryContent + "...";
        setFinalContent(temporaryContent);
    })

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {author}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {finalContent}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/blogs/${id}`} style={{textDecoration: "none"}}>
                        <Button size="small" 
                            variant="contained" 
                            color="primary"
                        >
                            Read all
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default BlogCard
