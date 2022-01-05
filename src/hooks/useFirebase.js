import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import inintializeAuthentication from "../Firebase/firebase.init";

// initialize firebase system
inintializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    // Firebase auth
    const auth = getAuth();

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((issue) => setError(issue.message));
    };

    return {
        user,
        error,
        googleSignIn,
    };
};

export default useFirebase;
