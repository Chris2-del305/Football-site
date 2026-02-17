// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA2sHcxmcdXd_r-28VsxU8Nqs_t6s7LBDI",
  authDomain: "sure-odds-uganda.firebaseapp.com",
  databaseURL: "https://sure-odds-uganda-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sure-odds-uganda",
  storageBucket: "sure-odds-uganda.firebasestorage.app",
  messagingSenderId: "26839342156",
  appId: "1:26839342156:web:e3ea35b88ba31d366528e9"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.data.title || "🔥 New Tips Available!";
  const notificationOptions = {
    body: payload.data.body || "Check out today's Sure Odds now!",
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
