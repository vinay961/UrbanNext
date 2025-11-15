import {Router} from 'express';

import { createSpace, getAllSpaces, getSpaceById, updateSpaceAvailability } from '../Controllers/space.controller';

const router = Router();

router.post('/createspace', async (req, res) => {
    try {
        const spaceData = req.body();
        const newSpace = await createSpace(spaceData);
        res.status(201).json(newSpace);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getallspaces', async (req, res) => {
    try {
        const spaces = await getAllSpaces();
        res.status(200).json(spaces);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getspace/:id', async (req, res) => {
    try {
        const spaceId = req.params.id;
        const space = await getSpaceById(spaceId);
        res.status(200).json(space);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/updatespaceavailability/:id', async (req, res) => {
    try {
        const spaceId = req.params.id;
        const { available } = req.body;
        const updatedSpace = await updateSpaceAvailability(spaceId, available);
        res.status(200).json(updatedSpace);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});