// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBjGz8AP_IBQZIaWm-5w0ZJQcXIsceGlQ",
  authDomain: "daily-report-e2bdd.firebaseapp.com",
  projectId: "daily-report-e2bdd",
  storageBucket: "daily-report-e2bdd.firebasestorage.app",
  messagingSenderId: "1082825651206",
  appId: "1:1082825651206:web:1c3f1aff0e277f7390bf87"
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// Cloud Firestoreを初期化
const db = getFirestore(app);

// 非同期の関数 Cloud Firestoreから取得したデータを表示する
const fetchHistoryData = async () => {
  let tags = "";

  // reportsコレクションのデータを取得
  const querySnapshot = await getDocs(collection(db, "reports"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    tags += 
    `<tr><td>${doc.data().date}</td>
    <td>${doc.data().name}</td>
    <td>${doc.data().work}</td>
    <td>${doc.data().comment}</td></tr>`
  });

  document.getElementById("js-history").innerHTML = tags;
};


// ページ内にid"js-history"が存在すれば非同期の関数を実行
if(document.getElementById("js-history")){
  fetchHistoryData();
}