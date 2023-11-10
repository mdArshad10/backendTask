import List from "../models/list.js"
import {asyncHandler} from '../middlewares/asyncHandler.js';

// @Method: POST  (for create the list)
// @Routes: /create
// @access : public 

export const createList = asyncHandler(async (req, res) => {
    const { title } = req.body;

    const list = await List.create({ title, userId: req.user.id });

    res.status(201).json({ list });
  });

// @Method: get  (get all list)
// @Routes: /getAll
// @access : public 

export const getAllList = asyncHandler(async (req, res) => {
    const lists = await List.findAll({ where: { userId: req.user.id } });

    res.status(200).json({ lists });
  });

// @Method: get  (get a particular task)
// @Routes: /task/:id
// @access : public 

export const particularTask = asyncHandler(async (req, res) => {
    const listId = req.params.id;

    const list = await List.findOne({ where: { id: listId } });

    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    res.status(200).json({ list });
  },
);

// @Method: post  (update the particular task)
// @Routes: /task/:id
// @access : public 


export const updateAList = asyncHandler(async (req, res) => {
    const listId = req.params.id;
    const { title } = req.body;

    const list = await List.findOne({ where: { id: listId } });

    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    list.title = title;
    await list.save();

    res.status(200).json({ list });
  },
)


// @Method: delete  (delete the particular task)
// @Routes: /task/:id
// @access : public 
export const deleteList = asyncHandler(async (req, res) => {
    const listId = req.params.id;

    const list = await List.findOne({ where: { id: listId } });

    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    await list.destroy();

    res.status(200).json({ message: "List deleted successfully" });
  },
)
