import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {googleSignIn, user} = useFirebase()

    return (
        <div>
            <button onClick={googleSignIn}>Sign IN with Google</button>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Login;