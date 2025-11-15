import Space from "../Models/Space.model.js";

export const createSpace = async (spaceData) => {
    try {
        const newSpace  = new Space(spaceData);
        const savedSpace = await newSpace.save();
        return savedSpace;
    }
    catch (error){
        throw new Error("Error creating space: " + error.message);
    }
}

export const getAllSpaces = async () => {
    try {
        const spaces = await Space.find();
        if(!spaces){
            throw new Error("No spaces found");
        }
        return spaces;
    } catch (error) {
        throw new Error("Error fetching spaces: " + error.message);
    }
}

export const getSpaceById = async (id) => {
    try {
        const space = await Space.findById(id);
        if(!space){
            throw new Error("Space not found");
        }
        return space;
    } catch (error) {
        throw new Error("Error fetching space by ID: " + error.message);
    }
}

export const updateSpaceAvailability = async (id, availability) => {
    try {
        const updatedSpace = await Space.findByIdAndUpdate(id, { available: availability }, { new: true });
        if(!updatedSpace){
            throw new Error("Space not found for updating availability");
        }
        return updatedSpace;
    } catch (error) {
        throw new Error("Error updating space availability: " + error.message);
    }
}