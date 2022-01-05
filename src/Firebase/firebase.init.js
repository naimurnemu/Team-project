import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inintializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default inintializeAuthentication;
