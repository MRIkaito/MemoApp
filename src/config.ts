import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyATzIGuLZH49niyK1pTs-w6iSqAUqpCXOw',
  authDomain: 'memoapp-d037a.firebaseapp.com',
  projectId: 'memoapp-d037a',
  storageBucket: 'memoapp-d037a.appspot.com',
  messagingSenderId: '608795824621',
  appId: '1:608795824621:web:9a74fcc8fac77b7d17d7e4'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
