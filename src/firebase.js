import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSkDESmYzK-DqBqMNnkGINNMikk2CKpQE',
  authDomain: 'video-15e9a.firebaseapp.com',
  projectId: 'video-15e9a',
  storageBucket: 'video-15e9a.appspot.com',
  messagingSenderId: '382852001958',
  appId: '1:382852001958:web:b227e8272ae360403c0467',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
