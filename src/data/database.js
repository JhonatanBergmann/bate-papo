import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDy02JkMl_XAymzYAajWlI37hagsbZFl7A",
  authDomain: "chatapp-384bb.firebaseapp.com",
  databaseURL: "https://chatapp-384bb.firebaseio.com",
  projectId: "chatapp-384bb",
  storageBucket: "chatapp-384bb.appspot.com",
  messagingSenderId: "462796692755",
  appId: "1:462796692755:web:c0b7d195e421800568cee6"
}

firebase.initializeApp(firebaseConfig)

export default firebase