import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIa6Y21ds6Wyv5Js1uXp0vdWI1e8EUUec",
  authDomain: "creative-universe-e3019.firebaseapp.com",
  projectId: "creative-universe-e3019",
  storageBucket: "creative-universe-e3019.firebasestorage.app",
  messagingSenderId: "693377898922",
  appId: "1:693377898922:web:01c97f9afa886581a4f3d3",
  measurementId: "G-3FTFBF2CJJ",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, getDownloadURL, ref };
