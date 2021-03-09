import React from 'react';
import { useSelector } from 'react-redux';

import LoginButton from '../Buttons/LoginButton/LoginButton';
import RegisterButton from '../Buttons/RegisterButton/RegisterButton';
import CreateNewBlog from '../Buttons/CreateNewBlog/CreateNewBlog';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';
import UserBlogsButton from '../Buttons/UserBlogsButton/UserBlogsButton';

const DesktopHeader = () => {
    const user = useSelector(state => state.user);

    return (
        <div>
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
        </div>
    
    )
}

export default DesktopHeader
