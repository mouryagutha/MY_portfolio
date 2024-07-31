import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAeN73r1Ar0RhHs9iQX_2_v68eqO5s7AZM",
  authDomain: "webrtc-a7843.firebaseapp.com",
  projectId: "webrtc-a7843",
  storageBucket: "webrtc-a7843.appspot.com",
  messagingSenderId: "235001084562",
  appId: "1:235001084562:web:9f6d7efcdd443cb5c8044b",
  measurementId: "G-7WN6MT113X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const usersCollectionRef = collection(db, "users");
