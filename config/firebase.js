import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6XG0JadOmfd_CjZQODfBditKlluu18Tw",
  authDomain: "hackathon-7a7b6.firebaseapp.com",
  projectId: "hackathon-7a7b6",
  storageBucket: "hackathon-7a7b6.appspot.com",
  messagingSenderId: "870170843576",
  appId: "1:870170843576:web:47e082f80eb4fe3f56d74d"
};
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 