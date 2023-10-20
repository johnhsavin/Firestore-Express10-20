
import express from "express";
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https"
import { getAllPets, addPets } from "./src/pets.js";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/pets", getAllPets)
app.post("/pets", addPets)



export const api = onRequest(app)
