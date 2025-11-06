import { Router } from "express";
import {
  createUserIfNotExists,
  getAllUsers,
  getUserById,
  getUserByUid,
  updateUserRole,
} from "../Controllers/user.controller.js";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const user = await createUserIfNotExists(req.body);
    console.log(user);
    res.status(200).json(user, { message: "User created or already exists" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/uid/:uid", async (req, res) => {
  try {
    const user = await getUserByUid(req.params.uid);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by UID:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/update-role/:uid", async (req, res) => {
  try {
    const { newRole } = req.body;
    const user = await updateUserRole(req.params.uid, newRole);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
