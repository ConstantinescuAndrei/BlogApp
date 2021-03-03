import React from 'react'
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    grid: {
        justify: "center",
        alignContent: "center",
        alignItems: "center"
    },
    title: {
        display: "block",
        textAlign: "center"
    },
    author: {
        display: "block",
        textAlign: "right",
        marginTop: "5px",
        marginRight: "5%"
    },
    content: {
        marginTop: "10px",
        marginLeft: "5%"
    }
})

const TheWholeBlog = ({title, content, author, image, avatar}) => {
    const classes = useStyles();

    return (
        <>
            <Grid item md={3} />
            <Grid item xs={12} md={6}>
                <Paper variant="outlined">
                    <Typography variant="h6" color="secondary" className={classes.title} >{title}</Typography>
                    <Typography variant="subtitle1" color="secondary" className={classes.author}>{author}</Typography>
                    <Divider variant="middle"/>
                    <img 
                        class="img"
                        style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "40%", height: "100%"}} 
                        src={image} 
                        />
                    <Typography className={classes.content}>{content}</Typography>    
                </Paper>
            </Grid>
            <Grid item md={3} />
        </>
    )
}

export default TheWholeBlog
