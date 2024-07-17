import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => { // cb= callback
    return cb(null, `${Date.now()}${file.originalname}`); //unique name for each image
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood); //added middleware using multer
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;