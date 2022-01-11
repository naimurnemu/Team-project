import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import inintializeAuthentication from "../Firebase/firebase.init";

// initialize firebase system
inintializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    // Firebase auth
    const auth = getAuth();

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (navigate, location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setIsAdmin(true);
                setError("");
                updateUser(user.email, user.displayName, user.photoURL);
                const destination = location.state?.from || "/";
                navigate(destination);
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    // user auth observer
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, []);

    // store User
    const updateUser = (email, name, photoURL) => {
        const user = { email, name, photoURL };
        if (!isLoading) {
            fetch("https://floating-cliffs-11080.herokuapp.com/users", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => {
                  
                });
        }
    };

    // verify admin
    useEffect(() => {
        fetch(`https://floating-cliffs-11080.herokuapp.com/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setIsAdmin(data.admin);
            });
    }, [user]);

    // logout handle
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    return {
        googleSignIn,
        user,
        error,
        isLoading,
        isAdmin,
        logOut,
    };
};

export default useFirebase;
