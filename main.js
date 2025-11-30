// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetch-history-data";
import { submitData } from "./my-modules/submit-data";
import "./sanitize.css";
import "./style.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// Cloud Firestoreを初期化
const db = getFirestore(app);

// ページ内にid"js-history"が存在すれば非同期の関数を実行
if (document.getElementById("js-history")) {
  fetchHistoryData(getDocs, collection, db);
}

// ページ内にid"js-form"が存在すれば非同期の関数を実行
if(document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
};