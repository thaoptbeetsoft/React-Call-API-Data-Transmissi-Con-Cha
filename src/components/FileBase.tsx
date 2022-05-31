import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBeA3fLd0pZSEAcSUBWAQo4fqf7hIvwDXU",
  authDomain: "microservice-a2f9b.firebaseapp.com",
  projectId: "microservice-a2f9b",
  storageBucket: "microservice-a2f9b.appspot.com",
  messagingSenderId: "988907932346",
  appId: "1:988907932346:web:e93e09811b6c3b82245083",
  measurementId: "G-ZXTL1VXXE0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export{
    analytics,app, storage as default
}