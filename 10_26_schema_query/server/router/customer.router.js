import {Router} from 'express';

import { createUser, deleteUserById, showAllUsers, showUserById, updateUserById } from '../controller/customer.js'

const customerRouter = Router();



customerRouter.get('/', showAllUsers)
customerRouter.post('/create', createUser);

customerRouter.route('/:userid')
    .get(showUserById)
    .put(updateUserById)
    .delete(deleteUserById)
// customerRouter.put('/:userid', );


export {customerRouter};