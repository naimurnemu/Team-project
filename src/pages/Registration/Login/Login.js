import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import NavigationHeader from '../../Shared/NavigationHeader/NavigationHeader';

const Login = () => {
    const {googleSignIn, user} = useFirebase()

    return (
        <div>
            <NavigationHeader />
            <button onClick={googleSignIn}>Sign IN with Google</button>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Login;