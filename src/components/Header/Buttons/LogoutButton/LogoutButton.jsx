import React from 'react';
import { Button, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../Redux/actions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles (theme => ({
    button: {
        marginLeft: "5px",
        [theme.breakpoints.down("md")] : {
            marginRight: "5px",
            marginBottom: "5px"
        }
    }
}))

const LogoutButton = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const theme = useTheme();
    const headerButtonsStyle = useMediaQuery(theme.breakpoints.up('md'));

    const logoutHandle = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div style={headerButtonsStyle ? {display: "inline"} : {display: "flex", justifyContent: "center"}}>
            <Button 
                color="inherit" 
                variant="outlined" 
                className={classes.button} 
                onClick={logoutHandle}
                startIcon={<ExitToAppIcon />}
            >
                Logout
            </Button>
        </div>
    )
}

export default LogoutButton
