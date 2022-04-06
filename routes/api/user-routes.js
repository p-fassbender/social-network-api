const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// /api/user
router
    .route('/')
    .get(getAllUsers) // works
    .post(createUser); // works

// /api/user/:id
router
    .route('/:id')
    .get(getUserById) // works
    .put(updateUser) // works
    .delete(deleteUser);

// /api/user/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;