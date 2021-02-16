// Este es el punto de entrada de tu aplicacion

import { authentication } from "./lib/index.js";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBtGImqGGVhvaAc6_Jet3sB_dFhrCtf0Q0",
  authDomain: "social-network-sn8.firebaseapp.com",
  projectId: "social-network-sn8",
  storageBucket: "social-network-sn8.appspot.com",
  messagingSenderId: "747280353813",
  appId: "1:747280353813:web:4b8f99e5a4450c8fc5dc1c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  authentication(provider);
  //muestra la pantalla 3
};
document.querySelector("#gmailIcon").addEventListener("click", authGoogle);


