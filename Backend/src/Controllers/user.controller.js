import User from "../Models/User.model.js";

export const createUserIfNotExists = async (userData) => { 
  try {
    let user = await User.findOne({ uid: userData.uid });
    if (!user) {
      user = new User(userData);
      await user.save();
    }
    return user; 
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUserByUid = async (uid) => {
  try {
    const user = await User.findOne({ uid });
    return user;
  } catch (error) {
    console.error("Error fetching user by UID:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await User.findById(id);       
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}; 

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

export const updateUserRole = async (uid, newRole) => {
  try {
    const user = await User.findOneAndUpdate({ uid }, { role: newRole }, { new: true });
    return user;
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error;
  } 
};
