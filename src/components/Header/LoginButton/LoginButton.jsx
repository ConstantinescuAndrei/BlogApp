import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../Redux/actions';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    button: {
        marginLeft: "5px"
    }
})

const LoginButton = () => {
    const classes = useStyles();
    const loginLink = "http://localhost:5000/users/login"
    const user = useSelector(state => state.isLogged);    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginDialog, setLoginDialog] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();

        const formUser = {
            username,
            password
        };
        async function fetchData() {
            console.log(username);
            console.log(password);
            const result = await axios.post(loginLink, formUser);
            console.log(result);
            if(result.data.connected === true) {
                console.log(result.data);
                setLoginDialog(false);
                dispatch(signIn(result.data.user));
            }
        }
        fetchData();

        setUsername('');
        setPassword('');
        console.log(user);
    }


    return (       
        <div style={{display: "inline"}}>
            <Button
                variant="outlined"
                color="inherit"
                className={classes.button}
                onClick={() => setLoginDialog(!loginDialog)}
                startIcon={<AccountCircleIcon />}
            >
                Login
            </Button>
            {
                loginDialog ? (
                    <Dialog 
                        open={loginDialog}
                        onClose={() => setLoginDialog(!loginDialog)}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">
                            Login
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                color="secondary"
                                id="username"
                                label="Username"
                                type="text"
                                fullWidth
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                margin="dense"
                                color="secondary"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                color="secondary" 
                                variant="contained"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Button 
                                color="secondary"
                                variant="contained"
                                onClick={() => setLoginDialog(!loginDialog)}
                            >
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                ) : (" ")
            } 
        </div>
    )
}

export default LoginButton
