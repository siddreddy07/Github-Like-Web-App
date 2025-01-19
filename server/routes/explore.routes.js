import express from "express"
import { explorerepos } from "../controllers/repos.controller.js"
const router = express.Router()

router.get("/repos/:language",explorerepos)



export default router