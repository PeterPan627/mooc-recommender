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
export const  USER_DATA_LOCALSTORAGE_LOCATION = 'authUserData'
export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
