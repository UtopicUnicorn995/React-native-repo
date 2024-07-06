import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: 'pO2C0eWUKdQP53K0wYrNKLfAFI86c7tzTUkaYyrdlIs',
    authDomain: 'firebase.todo.app',
    databaseURL: 'firebase-adminsdk-czb21@todo-db-d2208.iam.gserviceaccount.com',
    projectId: 'todo-db-d2208',
    storageBucket: 'firebase-adminsdk-czb21@todo-db-d2208.iam.gserviceaccount.com',
    messagingSenderId: '666223648469',
    appId: '1:666223648469:android:04bedd6df53bc701f18c5c',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };