import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Button, Typography } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { increment, decrement, signIn } from './Redux/actions'

const AppRedux = () => {
    const [dbUser, setDbUser] = useState({
        username: 'Blytzlike',
        firstName: 'Andrei',
        lastName: 'Constantinescu',
        password: 'a99m03d09y17'
    })

    const user = {
        username: 'Bltzlike',
        password: 'a99m03d09y17'
    }
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const handleLogin = (user) => {
        console.log(user);
        dispatch(signIn(dbUser));
    }

    const sayHello = () => {
        console.log('Hello');
    }

    useEffect(() => {
        console.log("First render");
    }, [])
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button 
                color="primary" 
                variant="contained"
                onClick={() => handleLogin(user)}
            >
                Login
            </Button>   

            {
                isLogged.username ? (
                    <div>
                        <Typography>
                            {isLogged.firstName}
                        </Typography>
                        <Typography>
                            {isLogged.lastName}
                        </Typography>
                    </div>
                ) : ' '
            } 
        </div>
    )
}

export default AppRedux
