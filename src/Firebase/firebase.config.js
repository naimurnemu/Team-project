const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;

function generatorCourseList(subject) {
    var courseObject = {
        name: "course-name",
        code: "course-id"
    }
    var courseList = []
    
    switch (subject) {
        case "nodejs": 
        let nodejs1 = courseObject;
            nodejs1.name= "node"
            nodejs1.code= "n101"
        break;
        default:
    }
}
