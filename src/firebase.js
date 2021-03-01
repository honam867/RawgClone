import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBw6TFRNjGZkAQmoaauirHQP8VmNPFNu-Q',
  authDomain: 'ecommerce-react-ccaec.firebaseapp.com',
  databaseURL: 'https://ecommerce-react-ccaec.firebaseio.com',
  projectId: 'ecommerce-react-ccaec',
  storageBucket: 'ecommerce-react-ccaec.appspot.com',
  messagingSenderId: '85903699394',
  appId: '1:85903699394:web:0b0340bcbb4e684df67a5b',
  measurementId: 'G-3ZG372N1PZ'
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.EmailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

export default new Firebase();
