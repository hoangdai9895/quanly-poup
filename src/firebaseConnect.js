import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCYIWWvqGPUqxoRWQZOteQBKfy3DBl_xdk",
    authDomain: "popup-e4624.firebaseapp.com",
    databaseURL: "https://popup-e4624.firebaseio.com",
    projectId: "popup-e4624",
    storageBucket: "popup-e4624.appspot.com",
    messagingSenderId: "585360800131"
  };
firebase.initializeApp(config);
// export const firebaseConnect = firebase.database().ref('Popup')

export const popupData = firebase.database().ref('Popup')
    // popupData.once('value').then((snapshot) => {
    //   console.log(snapshot.val())
    // })



  