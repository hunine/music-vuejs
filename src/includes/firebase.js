import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { ENV_CONFIG } from '@/configs/env.config'

const {
  API_KEY: apiKey,
  AUTH_DOMAIN: authDomain,
  PROJECT_ID: projectId,
  STORAGE_BUCKET: storageBucket,
  APP_ID: appId
} = ENV_CONFIG.FIREBASE

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  appId
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const usersCollection = collection(db, 'users')
const storage = getStorage()

export { auth, db, usersCollection, storage }
