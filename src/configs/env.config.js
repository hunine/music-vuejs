const env = import.meta.env;

export const ENV_CONFIG = {
    FIREBASE: {
        API_KEY: env.VITE_FIREBASE_API_KEY,
        AUTH_DOMAIN: env.VITE_FIREBASE_AUTH_DOMAIN,
        PROJECT_ID: env.VITE_FIREBASE_PROJECT_ID,
        STORAGE_BUCKET: env.VITE_FIREBASE_STORAGE_BUCKET,
        APP_ID: env.VITE_FIREBASE_APP_ID,
    }
}