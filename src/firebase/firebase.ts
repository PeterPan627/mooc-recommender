import app from 'firebase/app';

const devConfig = {
    apiKey: process.env.REACT_PROD_APP_API_KEY,
    authDomain: process.env.REACT_PROD_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_PROD_APP_DATABASE_URL,
    projectId: process.env.REACT_PROD_APP_PROJECT_ID,
    storageBucket: process.env.REACT_PROD_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_PROD_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_PROD_APP_ID,
};
const prodConfig = {
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
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;
