import app from 'firebase/app';
import 'firebase/auth';
const prodConfig = {
    apiKey: process.env.REACT_PROD_APP_API_KEY,
    authDomain: process.env.REACT_PROD_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_PROD_APP_DATABASE_URL,
    projectId: process.env.REACT_PROD_APP_PROJECT_ID,
    storageBucket: process.env.REACT_PROD_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_PROD_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_PROD_APP_ID,
};
const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
};
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
class Firebase {
    auth: app.auth.Auth;
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    registerUser = (email: string, password: string) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    loginUser = (email: string, password: string) => {
        this.auth.signInWithEmailAndPassword(email, password);
    };

    logoutUser = () => this.auth.signOut();

    passwordReset = (email: string) => this.auth.sendPasswordResetEmail(email);
    passwordUpdate = (password: string) => {
        if (this.auth.currentUser) {
            this.auth.currentUser.updatePassword(password);
        }
    };

    isLoggedIn = (): boolean => !!this.auth.currentUser;
}
export default Firebase;
