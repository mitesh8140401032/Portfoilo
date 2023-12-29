import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

let firebaseApp;

function SetupFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCNf5DOt_QswhYRP81ly_97P9Vrsh1-Veo",
        authDomain: "portfolio-my-31227.firebaseapp.com",
        projectId: "portfolio-my-31227",
        storageBucket: "portfolio-my-31227.appspot.com",
        messagingSenderId: "155304545415",
        appId: "1:155304545415:web:ba853d5777baed38207c22",
        measurementId: "G-J8GCCW2PTV"
    };

    firebaseApp = firebase.initializeApp(firebaseConfig);
}

// Call the setup function to initialize Firebase
SetupFirebase();

// Export the initialized firebaseApp
export default firebaseApp;
