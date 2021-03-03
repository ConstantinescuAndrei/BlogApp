import React, { useState } from 'react'
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch} from 'react-redux';
import { signIn } from '../../../Redux/actions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles({
    button: {
        marginLeft: "5px"
    }
})

const RegisterButton = () => {
    const classes = useStyles();
    const registerLink = "http://localhost:5000/users/register"
    const [formUser, setFormUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    })
    const [registerDialog, setRegisterDialog] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const registerUserHandle = (e) => {
        e.preventDefault();
        const newUser = formUser;
        console.log(newUser);

        if(newUser.username !== '' && newUser.password !== '' && newUser.email !== '' && newUser.firstName !== '' && newUser.lastName !== ''){
            async function fetchData() {
                const response = await axios.post(registerLink, newUser);

                if(response.data.registered === true) {
                    dispatch(signIn(newUser));
                    setRegisterDialog(false);
                }
            }

            fetchData();
        }
    }

    return (
        <div style={{display: "inline"}}>
            <Button 
                variant="outlined" 
                color="inherit"
                className={classes.button}
                onClick={() => setRegisterDialog(!registerDialog)}
                startIcon={<PersonAddIcon />}
            >
                Register
            </Button>
            {
                registerDialog ?
                (
                <Dialog 
                    open={registerDialog} 
                    onClose={() => setRegisterDialog(!registerDialog)}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Register
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            color="secondary"
                            id="username"
                            label="Username"
                            type="text"
                            onChange={(e) => setFormUser({...formUser, username: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            color="secondary"
                            id="firstName"
                            label="First Name"
                            type="text"
                            onChange={(e) => setFormUser({...formUser, firstName: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            color="secondary"
                            id="lastName"
                                label="Last Name"
                            type="text"
                            onChange={(e) => setFormUser({...formUser, lastName: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            color="secondary"
                            id="email"
                            label="Email"
                            type="email"
                            onChange={(e) => setFormUser({...formUser, email: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            color="secondary"
                            id="password"
                            label="Password"
                            type="password"
                            onChange={(e) => setFormUser({...formUser, password: e.target.value})}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            color="secondary" 
                            variant="contained"
                            onClick={registerUserHandle}
                        >
                            Register
                        </Button>
                        <Button color="secondary" 
                            onClick={() => setRegisterDialog(!registerDialog)} 
                            variant="contained"
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

export default RegisterButton
