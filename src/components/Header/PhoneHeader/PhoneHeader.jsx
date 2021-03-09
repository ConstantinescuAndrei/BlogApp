import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import LoginButton from '../Buttons/LoginButton/LoginButton';
import RegisterButton from '../Buttons/RegisterButton/RegisterButton';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';
import CreateNewBlog from '../Buttons/CreateNewBlog/CreateNewBlog';
import UserBlogsButton from '../Buttons/UserBlogsButton/UserBlogsButton';

const PhoneHeader = () => {
    const [anchorEl, setAnchorEl] = useState(false);
    const user = useSelector(state => state.user);

    const openMenuHandle = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const menuCloseHandle = () => {
        setAnchorEl(false);
    }

    return (
        <div>
            <IconButton
                onClick={openMenuHandle}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="phone-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={menuCloseHandle}
            >
                {
                    !user.username ? 
                    (
                        <div>
                            <LoginButton />
                            <RegisterButton />
                        </div>
                    ) :
                    (
                        <div>
                            <UserBlogsButton />
                            <CreateNewBlog />
                            <LogoutButton />
                        </div>
                    )
                }
            </Menu>
        </div>
    )
}

export default PhoneHeader
