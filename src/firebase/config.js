



  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAiNjy-uSiUDMpQErgsGJ4XG3KEXzQ0TwI",
  authDomain: "submersion-7.firebaseapp.com",
  projectId: "submersion-7",
  storageBucket: "submersion-7.appspot.com",
  messagingSenderId: "539435307422",
  appId: "1:539435307422:web:40f6d62fb1c47ee9dbc68f",
  measurementId: "G-3S508SZBMG"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }