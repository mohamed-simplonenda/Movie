import firebase from 'firebase/app'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyAtu8g9YDK0Gh2wtjUJdfK6X0w0TFaYvog",
    authDomain: "moviapp-91957.firebaseapp.com",
    databaseURL: "https://moviapp-91957-default-rtdb.firebaseio.com",
    projectId: "moviapp-91957",
    storageBucket: "moviapp-91957.appspot.com",
    messagingSenderId: "286823308950",
    appId: "1:286823308950:web:34d2e2a0004330d9492cb7",
    measurementId: "G-5HKXM0XZD9"
  };
  // Initialize Firebase
  var fireDB =firebase.initializeApp(firebaseConfig);
 
  

  export default fireDB.database().ref()