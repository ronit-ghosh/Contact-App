import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: REACT_APP_API_KE ,
  authDomain: REACT_APP_AUTH_DOMAI ,
  projectId: REACT_APP_PROD_I ,
  storageBucket: REACT_APP_STORAGE_BUCKE ,
  messagingSenderId: REACT_APP_MSG_SENDER_I ,
  appId: REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
