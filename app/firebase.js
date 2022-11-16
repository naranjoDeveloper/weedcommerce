import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAhfgFTJuWupyYgj4b8DztU77Xf_SBdfs0",
  authDomain: "weedcommerce-920c1.firebaseapp.com",
  projectId: "weedcommerce-920c1",
  storageBucket: "weedcommerce-920c1.appspot.com",
  messagingSenderId: "393589788380",
  appId: "1:393589788380:web:f3505112d2b129ea70ee19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)