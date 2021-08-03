import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin')
    .post(authCtrl.signin)
router.route('/auth/singout')
    .get(authCtrl.signout)

export default router