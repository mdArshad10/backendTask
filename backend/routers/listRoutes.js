import express from "express";
import { createList, getAllList,particularTask,deleteList,updateAList } from "../constrollers/listController.js";

const router = express.Router();

router.route("/create").post(createList);
router.route("/getAll").post(getAllList);
router.route("/:id").get(particularTask).post(updateAList).delete(deleteList);


export default router;
