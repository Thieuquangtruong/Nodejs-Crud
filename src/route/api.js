import express from "express";
import APIController from '../controller/APIController'

let router = express.Router()

const initApiRoute = (app) => {
  router.get('/users', APIController.getAllUsers);
  router.post('/create-users', APIController.createNewUser);
  router.put('/update-user', APIController.updateUser)
  router.delete('/update-user/:id', APIController.deleteUser)
  return app.use('/api/v1/', router)
}
module.export = initApiRoute
export default initApiRoute