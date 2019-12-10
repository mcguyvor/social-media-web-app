import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDuC_6PBim6jphQc6V9Q3jeNaAyAHF__f8",
    authDomain: "social-media-web-app.firebaseapp.com",
    databaseURL: "https://social-media-web-app.firebaseio.com",
    projectId: "social-media-web-app",
    storageBucket: "social-media-web-app.appspot.com",
    messagingSenderId: "778610052646",
    appId: "1:778610052646:web:714be3fc1d2efe0b7720e7",
    measurementId: "G-P80HNC7WZ8"
  };
  export const service = firebase.initializeApp(firebaseConfig);
