import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBiuZYg3nmrg244QgSGwjXTqzn_-zHaiXk",
    authDomain: "mynextjsblog.firebaseapp.com",
    projectId: "mynextjsblog",
    storageBucket: "mynextjsblog.appspot.com",
    messagingSenderId: "420278608099",
    appId: "1:420278608099:web:c3611bbb6cb2f91eb665d6"
  };

  //   init firebase app
  initializeApp(firebaseConfig)

//   init services
export const db = getFirestore()

