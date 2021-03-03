import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button} from "@material-ui/core";
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
    const loginByUsernameLink = "http://localhost:5000/users/loginByUsername";
    const loginByEmailLink = "http://localhost:5000/users/loginByEmail";
    const [user, setUser] = useState({username: '', email: '', password: ''}) 
    const [auth, setAuth] = useState(true);
    const [loginDialog, setLoginDialog] = useState(false);
    const dispatch = useDispatch();


    const loginByUsername = (e) => {
        console.log(user);
        const formUser = {
            username: user.username,
            password: user.password
        };

        async function loginUser() {
            const result = await axios.post(loginByUsernameLink, formUser);
            console.log(result);
            if(result.data.connected === true) {
                console.log(result.data);
                setLoginDialog(false);
                dispatch(signIn(result.data.user));
            }
        }

        loginUser();
        setUser({username: '', email: '', password: ''});
    }

    const loginByEmail = () => {
        const formUser = {
            email: user.email,
            password: user.password
        };

        async function loginUser() {
            const result = await axios.post(loginByEmailLink, formUser);
                console.log(result);

            if(result.data.connected === true) {
                setLoginDialog(false);
                dispatch(signIn(result.data.user));
            }
        }

        loginUser();
        setUser({username: '', email: '', password: ''});
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
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch checked={auth} onChange={() => setAuth(!auth)} aria-label="login switch" />}
                                    label={"Switch between email or username login"}
                                />
                            </FormGroup>
                            {
                                auth ? (
                                    <TextField
                                        margin="dense"
                                        color="secondary"
                                        id="username"                                        
                                        label="Username"
                                        type="text"
                                        fullWidth
                                        onChange={(e) => setUser({...user, username: e.target.value})}
                                    />
                                ) : (
                                    <TextField
                                        margin="dense"
                                        color="secondary"
                                        id="email"
                                        label="Email"
                                        type="text"
                                        fullWidth
                                        onChange={(e) => setUser({...user, email: e.target.value})}
                                    />
                                )

                            }
                            <TextField
                                margin="dense"
                                color="secondary"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                onChange={(e) => setUser({...user, password: e.target.value})}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                color="secondary" 
                                variant="contained"
                                onClick={auth ? loginByUsername : loginByEmail}
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
