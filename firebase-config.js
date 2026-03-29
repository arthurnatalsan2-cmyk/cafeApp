// IMPORTANTE: Use sempre o link completo (CDN) para rodar direto no navegador
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, update, remove } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-x0B777oIGfyJF5UGnwmS0LkHXnPryto",
  authDomain: "cafeapp-dfe09.firebaseapp.com",
  // PEGUE ESSE LINK NO REALTIME DATABASE (PASSO ABAIXO)
  databaseURL: "https://cafeapp-dfe09-default-rtdb.firebaseio.com", 
  projectId: "cafeapp-dfe09",
  storageBucket: "cafeapp-dfe09.firebasestorage.app",
  messagingSenderId: "446546692150",
  appId: "1:446546692150:web:81ca2213e814cf3c96b097",
  measurementId: "G-DRMNFZ5DZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, push, update, remove };