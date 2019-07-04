// firebase.js
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: Environment["AIzaSyAwbrZ9VIpijrJMKbQpe7mXZRFIMAbzt84"],
  authDomain: Environment["fotos-6b165.firebaseapp.com"],
  databaseURL: Environment["https://fotos-6b165.firebaseio.com"],
  projectId: Environment["fotos-6b165"],
  storageBucket: Environment["fotos-6b165.appspot.com"],
  messagingSenderId: Environment["853290314912"]
});

export default firebase;
