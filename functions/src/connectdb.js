// import db and credentials
import { getFirestore } from "firebase-admin/firestore";
import { connectionString } from "./creds.js";
import { initializeApp, cert } from "firebase-admin/app";

// connect to project, similar to create(Client)
initializeApp({
    credential: cert(connectionString),
})

const db = getFirestore()

export default db 