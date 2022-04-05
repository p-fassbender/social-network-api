const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

// /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(removeReaction);