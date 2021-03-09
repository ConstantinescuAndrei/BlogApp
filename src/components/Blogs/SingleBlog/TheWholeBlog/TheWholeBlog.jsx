import React from 'react'
import { Grid, Paper, Typography, Divider, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 345,
    },
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
    },
    avatar: {
        backgroundColor: red[500]
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
})

const TheWholeBlog = ({title, content, author, image, avatar}) => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={10} md={8}>
                <Paper variant="outlined">
                    <Typography variant="h6" color="secondary" className={classes.title} >{title}</Typography>
                    <Typography variant="subtitle1" color="secondary" className={classes.author}>{author}</Typography>
                    <Divider variant="middle"/>
                    <img 
                        className="img"                        
                        style={{ display: "block", borderRadius: "15%", marginLeft: "auto", marginRight: "auto", height: "100%", width: "8rem", float: "right", paddingRight: "5px", paddingTop: "5px"}} 
                        src={image} 
                    />
                    <Typography className={classes.content}>{content}</Typography>    
                </Paper>
            </Grid>
        </>
    )
}

export default TheWholeBlog
