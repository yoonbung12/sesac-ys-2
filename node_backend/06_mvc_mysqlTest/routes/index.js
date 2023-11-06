const express = require('express')
const user = require('../controller/Cuser')
const router = express.Router()




router.get('/', user.index)


router.get('/user/signup', user.signup)
router.post('/user/signup', user.post_signup)

router.get('/user/signin', user.signin)
router.post('/user/signin', user.post_signin)

// 세션 적용전 router.post('/user/profile', user.profile)
router.get('/user/profile', user.profile)
router.patch('/user/profile/edit/:id', user.profile_edit)
router.delete('/user/profile/delete/:id', user.profile_delete)

// 세션적용한 로그아웃
router.delete('/user/logout', user.logout);

module.exports = router


