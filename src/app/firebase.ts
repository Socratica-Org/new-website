import { initializeApp } from 'firebase/app'
import { Analytics, getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyAOFynVtpSZDhFjas7r6VyGOJAQv8iZ-zA",
  authDomain: "socratica-website.firebaseapp.com",
  databaseURL: "https://socratica-website-default-rtdb.firebaseio.com",
  projectId: "socratica-website",
  storageBucket: "socratica-website.firebasestorage.app",
  messagingSenderId: "416041679757",
  appId: "1:416041679757:web:9ad61c604c1188a59a9bc4",
  measurementId: "G-QQ3CWQBT5K"
};

let analytics : Analytics | undefined;

const initializeFirebase = () => {
  if (typeof window !== 'undefined') {
    const app = initializeApp(firebaseConfig)
    analytics = getAnalytics(app)
  }
}

initializeFirebase();

export { analytics }