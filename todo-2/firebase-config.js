// firebase-config.js
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDpzL3NwcnOcraznRm-f4wFHRDHokRdpGc",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "todo-db-d2208",
  storageBucket: "todo-db-d2208.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:666223648469:android:04bedd6df53bc701f18c5c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
