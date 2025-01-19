import express from "express";
import {getLikes, GetuserProfileAndRepos, likedprofile} from "../controllers/user.controller.js"
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";


const router = express.Router();

router.get("/profile/:username",GetuserProfileAndRepos)

router.post('/like/:username',ensureAuthenticated,likedprofile)


router.post('/likes',ensureAuthenticated,getLikes)

export default router