import firebase from "firebase/app"
// import { 
//     GoogleAuthProvider,
//     FacebookAuthProvider, 
//     TwitterAuthProvider, 
//     OAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDdyK2b5zFoGoTr-D_4BHA1YKAy1R8OCxg",
    authDomain: "rentall-62478.firebaseapp.com",
    projectId: "rentall-62478",
    storageBucket: "rentall-62478.appspot.com",
    messagingSenderId: "391353882733",
    appId: "1:391353882733:web:0e83355345bbad8cbdc764"
};

export default firebase.initializeApp(firebaseConfig);

// export const Google = new GoogleAuthProvider();
// export const Facebook = new FacebookAuthProvider();
// export const Twitter = new TwitterAuthProvider();
// export const iOS = new OAuthProvider('apple.com');