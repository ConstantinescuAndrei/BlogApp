import React from 'react';
import { useSelector } from 'react-redux';

import LoginButton from '../Buttons/LoginButton/LoginButton';
import RegisterButton from '../Buttons/RegisterButton/RegisterButton';
import CreateNewBlogButton from '../Buttons/CreateNewBlogButton/CreateNewBlogButton';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';

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
                        <CreateNewBlogButton />
                        <LogoutButton />
                    </div>
                )
            }
        </div>
    
    )
}

export default DesktopHeader
