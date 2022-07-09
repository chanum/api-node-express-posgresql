const { Router } = require('express');
const router = Router();

// first approach ----------------
// router.get("/users", (req, res) => {
//     res.send("users");
// });
//  ----------------
 
// second approach -------------------
// const { getUsers } = require("../controllers/index.controller");
// router.get("/users", getUsers);
//  ----------------

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

module.exports = router;