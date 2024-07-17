// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  limit,
  where,
  deleteField,
  deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxuQVs0qCTUBJrgHUToTHs-M9T583OfWA",
  authDomain: "goldstorkexpress.firebaseapp.com",
  projectId: "goldstorkexpress",
  storageBucket: "goldstorkexpress.appspot.com",
  messagingSenderId: "895916570971",
  appId: "1:895916570971:web:be07647c10b094cacf027e",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const COLLECTION = "tracker";

// auth change Listener
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

// Signup
export const signUpWithPassword = async function (email, password) {
  try {
    console.log("passed in value, " + email, password);
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const { uid } = response.user;
    await createUser({ email, uid });
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
};

export const getTrackers = async function () {
  const docs = await getDocs(collection(db, COLLECTION));
  return docs;
};

// CREATE TRACKER
export const createTracker = async function (data) {
  try {
    const docRef = await addDoc(collection(db, COLLECTION), data);
    return {
      success: true,
      id: docRef.id,
    };
  } catch (e) {
    return {
      success: false,
      message: e.message,
    };
  }
};

export const createUser = async function (newuser) {
  try {
    const userRef = await doc(db, "users", newuser.uid);
    const user = await getDoc(userRef);
    delete newuser.uid;

    if (!user.exists()) {
      await setDoc(userRef, newuser);
    }
    return userRef;
  } catch (err) {
    alert(err.message);
  }
};

// Login
export const signInWithPassword = async function ({ email, password }) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (e) {
    console.log(e);
    if (e.code == "auth/missing-email") e.message = "Wrong Email or Password";
    return { success: false, error: e.message };
  }
};

// logout
export const logOut = async function () {
  await signOut(auth);
};
