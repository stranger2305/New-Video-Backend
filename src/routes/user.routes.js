import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";



const router = Router();

router.route("/register").post(
    upload.fields([ // files which we are uplaoding from frontend, we can upload multiple files at a time using fields method
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

export default router