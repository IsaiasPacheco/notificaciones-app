import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGIfG1_6gPhzGZw6sExPYOpI_BqBzhmwE",
  authDomain: "notificaciones-push-31bf7.firebaseapp.com",
  projectId: "notificaciones-push-31bf7",
  storageBucket: "notificaciones-push-31bf7.appspot.com",
  messagingSenderId: "802973312025",
  appId: "1:802973312025:web:ab6ace5dd859d2edc63688"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const messaging = firebase.messaging();
export const firestore = firebase.firestore();
